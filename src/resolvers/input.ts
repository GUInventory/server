import { inputObjectType } from '@nexus/schema'

export const CreateItemInput = inputObjectType({
  name: 'ConnectRelation',
  description: 'Connect a related entity',
  definition(t) {
    t.id('id', { required: true })
  },
})
