import { extendType, intArg } from '@nexus/schema'
import { CreateItemInput, UpdateItemInput } from './item.input'
import { Context } from '../../types'
import { publishItemEvent } from './item.subscription'

export const ItemMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createItem', {
      type: 'Item',
      args: { data: CreateItemInput.asArg({ required: true }) },
      resolve: async (_, { data: { storage, ...rest } }, ctx: Context) => {
        const item = await ctx.prisma.item.create({
          data: {
            storage: { connect: storage },
            ...rest,
          },
        })
        await publishItemEvent('itemCreated', item, ctx)
        return item
      },
    })

    t.field('updateItem', {
      type: 'Item',
      args: {
        id: intArg({ required: true }),
        data: UpdateItemInput.asArg({ required: true }),
      },
      resolve: async (_, { id, data }, ctx: Context) => {
        const item = await ctx.prisma.item.update({
          where: { id },
          data,
        })
        await publishItemEvent('itemUpdated', item, ctx)
        return item
      },
    })

    t.field('deleteItem', {
      type: 'Item',
      args: {
        id: intArg({ required: true }),
      },
      resolve: async (_, { id }, ctx: Context) => {
        const item = await ctx.prisma.item.delete({
          where: { id },
        })
        await publishItemEvent('itemDeleted', item, ctx)
        return item
      },
    })
  },
})
