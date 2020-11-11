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

    t.field('warehouses', {
      type: 'Warehouse',
      list: [true],
      nullable: true,
    })

    t.field('roles', {
      type: 'Role',
      list: [true],
      nullable: true,
    })
    // t.dateTime('createdAt')
    // t.dateTime('updatedAt')
  },
})
