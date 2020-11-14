import { extendType, intArg } from '@nexus/schema'
import { getUserID } from '../../utils/authentication'
import { Context } from '../../types'

export const WarehouseQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('warehouses', {
      type: 'Warehouse',
      resolve(_root, _args, ctx) {
        return ctx.prisma.warehouse.findMany()
      },
    })

    t.list.field('myWarehouses', {
      type: 'Warehouse',
      resolve: async (_root, _args, ctx: Context) => {
        const id = getUserID(ctx)
        const warehouses = await ctx.prisma.warehouse.findMany({
          where: {
            roles: {
              some: {
                user: { id },
              },
            },
          },
        })
        return warehouses
      },
    })

    t.field('warehouse', {
      type: 'Warehouse',
      args: {
        id: intArg({ required: true }),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.warehouse.findOne({ where: { id }, include: { storages: true } })
      },
    })
  },
})
