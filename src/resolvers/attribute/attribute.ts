import { objectType } from '@nexus/schema'

export const Attribute = objectType({
  name: 'Attribute',
  definition(t) {
    t.id('id')
    t.string('value')

    t.field('type', {
      type: 'AttributeTypeEnum',
      resolve: async ({ type }) => type,
    })

    t.field('item', {
      type: 'Item',
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
