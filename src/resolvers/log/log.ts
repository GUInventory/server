import { objectType } from '@nexus/schema'

export const Log = objectType({
  name: 'Log',
  definition(t) {
    t.id('id')
    t.string('entityName')
    t.string('entityId')
    t.int('userId')

    t.field('oldValues', {
      type: 'JSON',
      resolve: ({ oldValues }) => oldValues,
    })

    t.field('newValues', {
      type: 'JSON',
      resolve: ({ oldValues }) => oldValues,
    })

    t.field('type', {
      type: 'LogTypeEnum',
      resolve: async ({ type }) => type,
    })

    t.field('createdAt', {
      type: 'Date',
      nullable: false,
      resolve: ({ createdAt }) => createdAt,
    })
  },
})
