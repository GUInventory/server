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

    t.field('createdAt', {
      type: 'Date',
      nullable: false,
      resolve: ({ createdAt }) => createdAt,
    })

    t.field('updatedAt', {
      type: 'Date',
      nullable: false,
      resolve: ({ updatedAt }) => updatedAt,
    })
  },
})
