import { extendType, intArg } from '@nexus/schema'
import { CreateWarehouseInput, UpdateWarehouseInput } from './warehouse.input'
import { getUserID } from '../../utils/authentication'
import { Context } from '../../types'

export const WarehouseMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createWarehouse', {
      type: 'Warehouse',
      args: { data: CreateWarehouseInput.asArg({ required: true }) },
      resolve: (_, { data }, ctx: Context) => {
        return ctx.prisma.warehouse.create({
          data: {
            ...data,
            roles: {
              create: {
                roleType: 'ADMIN',
                user: { connect: { id: getUserID(ctx) } },
              },
            },
          },
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
      resolve: async (_, { id }, ctx) => {
        await ctx.prisma.role.deleteMany({
          where: {
            warehouseId: id,
          },
        })
        return await ctx.prisma.warehouse.delete({
          where: { id },
        })
      },
    })
  },
})
