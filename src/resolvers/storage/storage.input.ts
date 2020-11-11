import { inputObjectType } from '@nexus/schema'

export const CreateStorageInput = inputObjectType({
  name: 'CreateStorageInput',
  description: 'Input of create storage',
  definition(t) {
    t.string('name', { required: true })
    t.int('sizeX', { required: true })
    t.int('sizeY', { required: true })
    t.int('sizeZ', { required: true })
    t.int('positionX', { required: true })
    t.int('positionY', { required: true })
    t.int('positionZ', { required: true })
    t.field('warehouse', { type: 'ConnectRelation', required: true })
  },
})

export const UpdateStorageInput = inputObjectType({
  name: 'UpdateStorageInput',
  description: 'Input of update an storage',
  definition(t) {
    t.string('name')
    t.int('sizeX')
    t.int('sizeY')
    t.int('sizeZ')
    t.int('positionX')
    t.int('positionY')
    t.int('positionZ')
    t.field('warehouse', { type: 'ConnectOrDisconnectRelation' })
  },
})
