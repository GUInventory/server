import { objectType } from '@nexus/schema'

export const AttributeType = objectType({
  name: 'AttributeType',
  definition(t) {
    t.id('id')
    t.string('name')

    t.field('type', {
      type: 'AttributeTypeEnum',
      resolve: async ({ type }) => type,
    })

    t.field('category', {
      type: 'Category',
      list: [false],
      nullable: false,
    })

    // t.dateTime('createdAt')
    // t.dateTime('updatedAt')
  },
})
