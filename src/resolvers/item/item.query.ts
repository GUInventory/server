import { extendType, intArg, stringArg } from '@nexus/schema'

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
          include: {
            outgoings: true,
            attributes: true,
            storage: {
              include: {
                warehouse: true,
              },
            },
          },
        })
      },
    })
    t.list.field('items', {
      type: 'Item',
      args: {
        query: stringArg({ required: true }),
      },
      resolve: (_, { query }, ctx) => {
        return ctx.prisma.item.findMany({
          where: {
            name: {
              contains: query,
            },
          },
          include: {
            storage: {
              include: {
                warehouse: true,
              },
            },
          },
          take: 10,
        })
      },
    })
  },
})
