import { objectType } from '@nexus/schema'

export const Outgoing = objectType({
  name: 'Outgoing',
  definition(t) {
    t.id('id')
    t.string('description')
    t.int('value')

    t.dateTime('createdAt')
    t.dateTime('updatedAt')
  },
})
