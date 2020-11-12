import { inputObjectType } from '@nexus/schema'

export const ResetPasswordInput = inputObjectType({
  name: 'ResetPasswordInput',
  description: 'Input of password reset',
  definition(t) {
    t.string('token', { required: true })
    t.string('password', { required: true })
  },
})

export const ForgotPasswordInput = inputObjectType({
  name: 'ForgotPasswordInput',
  description: 'Input of forgot password',
  definition(t) {
    t.string('email', { required: true })
  },
})
