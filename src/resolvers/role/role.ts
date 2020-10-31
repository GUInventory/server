import { objectType } from '@nexus/schema'

export const Role = objectType({
  name: 'Role',
  definition(t) {
    t.id('id')
    t.field('roleType', {
      type: 'RoleTypeEnum',
      resolve: async ({ roleType }) => roleType,
    })

    // t.dateTime('createdAt')
    // t.dateTime('updatedAt')
  },
})
