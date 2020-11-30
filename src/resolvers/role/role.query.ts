import { extendType, intArg } from '@nexus/schema'

export const RoleQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('roles', {
      type: 'Role',
      args: {
        id: intArg({ required: true }),
      },
      resolve(_root, { id }, ctx) {
        return ctx.prisma.role.findMany({
          where: { warehouse: { id: id } },
          include: { user: true },
        })
      },
    })
  },
})
