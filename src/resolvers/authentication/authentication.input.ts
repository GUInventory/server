import { inputObjectType } from '@nexus/schema'

export const LoginInput = inputObjectType({
  name: 'LoginInput',
  description: 'Input of login',
  definition(t) {
    t.string('email', { required: true })
    t.string('password', { required: true })
  },
})

export const RegisterInput = inputObjectType({
  name: 'RegisterInput',
  description: 'Input of register',
  definition(t) {
    t.string('name', { required: true })
    t.string('email', { required: true })
    t.string('password', { required: true })
  },
})
