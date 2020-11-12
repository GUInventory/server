import { objectType } from '@nexus/schema'

export const ResetPasswordToken = objectType({
  name: 'ResetPasswordToken',
  definition(t) {
    t.id('email')
    t.string('token')

    // t.dateTime('createdAt')
    // t.dateTime('updatedAt')
  },
})
