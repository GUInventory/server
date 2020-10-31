import { objectType } from '@nexus/schema'

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.id('id')
    t.string('name')
    t.string('color')

    t.dateTime('createdAt')
    t.dateTime('updatedAt')
  },
})
