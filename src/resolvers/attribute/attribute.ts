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

    // t.dateTime('createdAt')
    // t.dateTime('updatedAt')
  },
})
