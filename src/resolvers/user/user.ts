import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id')
    t.string('name')
    t.string('email')
    t.string('password')

    t.field('globalRole', {
      type: 'RoleTypeEnum',
      resolve: async ({ globalRole }) => globalRole,
    })

    t.dateTime('createdAt')
    t.dateTime('updatedAt')
  },
})
