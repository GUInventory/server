import { inputObjectType } from '@nexus/schema'

export const CreateOutgoingInput = inputObjectType({
  name: 'CreateOutgoingInput',
  description: 'Input of create outgoing',
  definition(t) {
    t.string('description', { required: true })
    t.int('value', { required: true })
    t.field('item', { type: 'ConnectRelation', required: true })
  },
})

export const UpdateOutgoingInput = inputObjectType({
  name: 'UpdateOutgoingInput',
  description: 'Input of update an outgoing',
  definition(t) {
    t.string('description')
    t.int('value')
    t.field('item', { type: 'ConnectOrDisconnectRelation' })
  },
})
