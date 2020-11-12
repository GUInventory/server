import { inputObjectType } from '@nexus/schema'

export const ConnectRelation = inputObjectType({
  name: 'ConnectRelation',
  description: 'Connect a related entity',
  definition(t) {
    t.int('id', { required: true })
  },
})

export const ConnectOrDisconnectRelation = inputObjectType({
  name: 'ConnectOrDisconnectRelation',
  definition(t) {
    t.field('connect', { type: 'ConnectRelation' })
    t.field('disconnect', { type: 'ConnectRelation' })
  },
})
