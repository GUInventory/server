import { objectType } from '@nexus/schema'

export const Role = objectType({
  name: 'Role',
  definition(t) {
    t.id('id')
    t.field('roleType', {
      type: 'RoleTypeEnum',
      resolve: async ({ roleType }) => roleType,
    })

    t.field('warehouse', {
      type: 'Warehouse',
      list: [false],
      nullable: false,
    })

    t.field('user', {
      type: 'User',
      list: [false],
      nullable: false,
    })
    // t.dateTime('createdAt')
    // t.dateTime('updatedAt')
  },
})
