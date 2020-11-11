import { inputObjectType } from '@nexus/schema'

export const CreateWarehouseInput = inputObjectType({
  name: 'CreateWarehouseInput',
  description: 'Input of create warehouse',
  definition(t) {
    t.string('name', { required: true })
    t.int('sizeX', { required: true })
    t.int('sizeY', { required: true })
    t.int('sizeZ', { required: true })
  },
})

export const UpdateWarehouseInput = inputObjectType({
  name: 'UpdateWarehouseInput',
  description: 'Input of update an warehouse',
  definition(t) {
    t.string('name')
    t.int('sizeX')
    t.int('sizeY')
    t.int('sizeZ')
  },
})
