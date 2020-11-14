import { inputObjectType } from '@nexus/schema'

export const CreateRoleInput = inputObjectType({
  name: 'CreateRoleInput',
  description: 'Input of create role',
  definition(t) {
    t.field('roleType', {
      type: 'RoleTypeEnum',
      required: true,
    })
    t.field('user', {
      type: 'ConnectRelation',
      required: true,
    })
    t.field('warehouse', {
      type: 'ConnectRelation',
      required: true,
    })
  },
})

export const UpdateRoleInput = inputObjectType({
  name: 'UpdateRoleInput',
  description: 'Input of update a role',
  definition(t) {
    t.field('roleType', {
      type: 'RoleTypeEnum',
    })
  },
})
