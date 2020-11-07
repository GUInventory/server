import { extendType, intArg } from '@nexus/schema'

export const WarehouseQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('warehouses', {
      type: 'Warehouse',
      resolve(_root, _args, ctx) {
        return ctx.prisma.warehouse.findMany()
      },
    })

    t.field('warehouse', {
      type: 'Warehouse',
      args: {
        id: intArg({ required: true }),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.warehouse.findOne({ where: { id } })
      },
    })
  },
})
