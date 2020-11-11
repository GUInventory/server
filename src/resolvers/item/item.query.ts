import { extendType, intArg } from '@nexus/schema'

export const ItemQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('item', {
      type: 'Item',
      args: {
        id: intArg({ required: true }),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.item.findOne({
          where: { id },
          include: { outgoings: true, attributes: true },
        })
      },
    })
  },
})
