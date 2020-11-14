import { extendType, intArg } from '@nexus/schema'
import { CreateCategoryInput, UpdateCategoryInput } from './category.input'
import { Context } from '../../types'

export const CategoryMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createCategory', {
      type: 'Category',
      args: { data: CreateCategoryInput.asArg({ required: true }) },
      resolve: async (_, { data: { parent, ...rest } }, ctx: Context) => {
        return await ctx.prisma.category.create({
          data: {
            parent: { connect: parent },
            ...rest,
          },
        })
      },
    })

    t.field('updateCategory', {
      type: 'Category',
      args: {
        id: intArg({ required: true }),
        data: UpdateCategoryInput.asArg({ required: true }),
      },
      resolve: async (_, { id, data }, ctx: Context) => {
        return await ctx.prisma.category.update({
          where: { id },
          data,
        })
      },
    })

    t.field('deleteCategory', {
      type: 'Category',
      args: {
        id: intArg({ required: true }),
      },
      resolve: async (_, { id }, ctx: Context) => {
        return await ctx.prisma.category.delete({
          where: { id },
        })
      },
    })
  },
})
