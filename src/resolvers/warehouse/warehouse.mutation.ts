import { extendType, intArg } from '@nexus/schema'
import { CreateWarehouseInput, UpdateWarehouseInput } from './warehouse.input'

export const WarehouseMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createWarehouse', {
      type: 'Warehouse',
      args: { data: CreateWarehouseInput.asArg({ required: true }) },
      resolve: (_, { data }, ctx) => {
        // TODO: Add user to the warehouse as admin
        return ctx.prisma.warehouse.create({
          data,
        })
      },
    })

    t.field('updateWarehouse', {
      type: 'Warehouse',
      args: {
        id: intArg({ required: true }),
        data: UpdateWarehouseInput.asArg({ required: true }),
      },
      resolve: (_, { id, data }, ctx) => {
        return ctx.prisma.warehouse.update({
          where: { id },
          data,
        })
      },
    })

    t.field('deleteWarehouse', {
      type: 'Warehouse',
      args: {
        id: intArg({ required: true }),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.warehouse.delete({
          where: { id },
        })
      },
    })
  },
})
