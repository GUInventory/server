import { extendType, intArg } from '@nexus/schema'

export const OutgoingeQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('outgoing', {
      type: 'Outgoing',
      args: {
        id: intArg({ required: true }),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.outgoing.findOne({
          where: { id },
        })
      },
    })
  },
})
