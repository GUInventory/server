import { objectType } from '@nexus/schema'

export const Outgoing = objectType({
  name: 'Outgoing',
  definition(t) {
    t.id('id')
    t.string('description')
    t.int('value')

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
