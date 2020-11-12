import { extendType, intArg } from '@nexus/schema'
import { CreateItemInput, UpdateItemInput } from './item.input'
import { Context } from '../../types'

export const ItemMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createItem', {
      type: 'Item',
      args: { data: CreateItemInput.asArg({ required: true }) },
      resolve: (_, { data: { storage, ...rest } }, ctx) => {
        return ctx.prisma.item.create({
          data: {
            storage: { connect: storage },
            ...rest,
          },
        })
      },
    })

    t.field('updateItem', {
      type: 'Item',
      args: {
        id: intArg({ required: true }),
        data: UpdateItemInput.asArg({ required: true }),
      },
      resolve: async (_, { id, data }, ctx: Context) => {
        await ctx.pubsub.publish('itemUpdated', { payload: { data } })
        return ctx.prisma.item.update({
          where: { id },
          data,
        })
      },
    })

    t.field('deleteItem', {
      type: 'Item',
      args: {
        id: intArg({ required: true }),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.item.delete({
          where: { id },
        })
      },
    })
  },
})
