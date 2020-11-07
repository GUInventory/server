import { extendType, intArg } from '@nexus/schema'

export const StorageQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('storage', {
      type: 'Storage',
      args: {
        id: intArg({ required: true }),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.storage.findOne({ where: { id }, include: { items: true } })
      },
    })
  },
})
