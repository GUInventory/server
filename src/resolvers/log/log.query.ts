import { extendType } from '@nexus/schema'

export const LogQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('logs', {
      type: 'Log',
      resolve: async (_, {}, ctx) => {
        return await ctx.prisma.log.findMany({})
      },
    })
  },
})
