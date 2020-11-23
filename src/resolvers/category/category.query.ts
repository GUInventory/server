import { extendType, intArg } from '@nexus/schema'

export const CategoryQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('categories', {
      type: 'Category',
      resolve: async (_, {}, ctx) => {
        return await ctx.prisma.category.findMany({
          include: { children: true, items: true },
        })
      },
    })

    t.field('category', {
      type: 'Category',
      args: {
        id: intArg({ required: true }),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.category.findOne({
          where: { id },
          include: { children: true, items: true },
        })
      },
    })
  },
})
