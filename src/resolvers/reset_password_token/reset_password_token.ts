import { objectType } from '@nexus/schema'

export const ResetPasswordToken = objectType({
  name: 'ResetPasswordToken',
  definition(t) {
    t.id('email')
    t.string('token')

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
