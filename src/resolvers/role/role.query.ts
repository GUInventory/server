import { extendType } from '@nexus/schema'

export const RoleQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('roles', {
      type: 'Role',
      resolve(_root, {}, ctx) {
        return ctx.prisma.role.findMany()
      },
    })
  },
})
