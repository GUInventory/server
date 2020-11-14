import { extendType, intArg } from '@nexus/schema'
import { CreateRoleInput } from './role.input'
import { Context } from '../../types'

export const RoleMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createRole', {
      type: 'Role',
      args: {
        data: CreateRoleInput.asArg({ required: true }),
      },
      resolve: async (_, { data }, ctx: Context) => {
        return await ctx.prisma.role.create({
          data,
        })
      },
    })

    t.field('deleteRole', {
      type: 'Role',
      args: {
        id: intArg({ required: true }),
      },
      resolve: async (_, { id }, ctx: Context) => {
        return await ctx.prisma.role.delete({
          where: { id },
        })
      },
    })
  },
})
