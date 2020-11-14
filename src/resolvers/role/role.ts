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
      nullable: false,
    })

    t.field('user', {
      type: 'User',
      nullable: false,
    })
    t.field('createdAt', {
      type: 'Date',
      nullable: false,
      resolve: ({ createdAt }) => createdAt,
    })

    t.field('updatedAt', {
      type: 'Date',
      nullable: false,
      resolve: ({ updatedAt }) => updatedAt,
    })
  },
})
