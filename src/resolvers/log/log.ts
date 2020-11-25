import { objectType } from '@nexus/schema'

export const Log = objectType({
  name: 'Log',
  definition(t) {
    t.id('id')
    t.string('entityName')
    t.string('entityId')
    t.int('userId')

    t.field('user', {
      type: 'User',
      nullable: false,
      resolve: async ({ userId }, {}, ctx) => {
        return await ctx.prisma.user.findOne({
          where: { id: userId },
        })
      },
    })

    t.field('oldValues', {
      type: 'JSON',
      resolve: (root) => root['oldValues'],
    })

    t.field('newValues', {
      type: 'JSON',
      resolve: (root) => root['newValues'],
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
