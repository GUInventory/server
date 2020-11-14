import { inputObjectType } from '@nexus/schema'

export const CreateRoleInput = inputObjectType({
  name: 'CreateRoleInput',
  description: 'Input of create role',
  definition(t) {
    t.field('roleType', {
      type: 'RoleTypeEnum',
    })
    t.field('user', {
      type: 'ConnectRelation',
    })
    t.field('warehouse', {
      type: 'ConnectRelation',
    })
  },
})
