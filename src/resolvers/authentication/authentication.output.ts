import { objectType } from '@nexus/schema'

export const AuthenticationPayload = objectType({
  name: 'AuthenticationPayload',
  definition(t) {
    t.string('token')
    t.field('user', { type: 'User' })
  },
})
