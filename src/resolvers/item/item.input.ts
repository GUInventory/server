import { inputObjectType } from '@nexus/schema'

export const CreateItemInput = inputObjectType({
  name: 'CreateItemInput',
  description: 'Input of create item',
  definition(t) {
    t.string('name', { required: true })
    t.string('image', { required: true })
    t.int('value', { required: true })
    t.int('sizeX', { required: true })
    t.int('sizeY', { required: true })
    t.int('sizeZ', { required: true })
    t.int('positionX', { required: false })
    t.int('positionY', { required: false })
    t.int('positionZ', { required: false })
    t.field('subject', { type: 'ConnectRelation', required: true })
  },
})
