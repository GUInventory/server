import { extendType } from '@nexus/schema'
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
  },
})
