import { objectType } from '@nexus/schema'

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.id('id')
    t.string('name')
    t.string('color')

    t.field('children', {
      type: 'Category',
      list: [true],
      nullable: true,
    })

    t.field('parent', {
      type: 'Category',
      list: [false],
      nullable: true,
    })

    t.field('items', {
      type: 'Item',
      list: [true],
      nullable: true,
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
