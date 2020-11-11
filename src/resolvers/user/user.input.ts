import { inputObjectType } from '@nexus/schema'

export const ChangePasswordInput = inputObjectType({
  name: 'ChangePasswordInput',
  description: 'Input of pasword changing',
  definition(t) {
    t.string('oldPassword', { required: true })
    t.string('newPassword', { required: true })
  },
})
