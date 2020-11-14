import { inputObjectType } from '@nexus/schema'

export const CreateCategoryInput = inputObjectType({
  name: 'CreateCategoryInput',
  description: 'Input of create category',
  definition(t) {
    t.string('name', { required: true })
    t.string('color', { required: true })
    t.field('parent', { type: 'ConnectRelation', required: true })
  },
})

export const UpdateCategoryInput = inputObjectType({
  name: 'UpdateCategoryInput',
  description: 'Input of update an category',
  definition(t) {
    t.string('name')
    t.string('color')
    t.field('parent', { type: 'ConnectOrDisconnectRelation' })
  },
})
