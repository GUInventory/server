import { extendType } from '@nexus/schema'

export const CategoryQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('categories', {
      type: 'Category',
      resolve: async (_, {}, ctx) => {
        return await ctx.prisma.category.findMany({
          include: { children: true },
        })
      },
    })
  },
})
