import { extendType, intArg } from '@nexus/schema'
import { CreateItemInput } from './item.input'

export const ItemMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createItem', {
      type: 'Item',
      args: { data: CreateItemInput.asArg({ required: true }) },
      resolve: (_, { data }, ctx) => {
        return ctx.prisma.item.create(data)
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
