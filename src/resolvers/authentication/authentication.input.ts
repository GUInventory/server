import { inputObjectType } from '@nexus/schema'

export const LoginInput = inputObjectType({
  name: 'LoginInput',
  description: 'Input of login',
  definition(t) {
    t.string('email', { required: true })
    t.string('password', { required: true })
  },
})