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
    t.field('storage', { type: 'ConnectRelation', required: true })
  },
})

export const UpdateItemInput = inputObjectType({
  name: 'UpdateItemInput',
  description: 'Input of update an item',
  definition(t) {
    t.string('name')
    t.string('image')
    t.int('value')
    t.int('sizeX')
    t.int('sizeY')
    t.int('sizeZ')
    t.int('positionX')
    t.int('positionY')
    t.int('positionZ')
    t.field('storage', { type: 'ConnectOrDisconnectRelation' })
  },
})
