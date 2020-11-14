import { inputObjectType } from '@nexus/schema'

export const ChangePasswordInput = inputObjectType({
  name: 'ChangePasswordInput',
  description: 'Input of pasword changing',
  definition(t) {
    t.string('oldPassword', { required: true })
    t.string('newPassword', { required: true })
  },
})

export const UpdateUserInput = inputObjectType({
  name: 'UpdateUserInput',
  description: 'Input of update a user',
  definition(t) {
    t.string('name')
    t.string('email')
    t.field('globalRole', {
      type: 'RoleTypeEnum',
    })
  },
})
