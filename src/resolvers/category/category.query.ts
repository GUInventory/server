import { extendType, intArg } from '@nexus/schema'

export const CategoryQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('categories', {
      type: 'Category',
      resolve: (_, {}, ctx) => {
        return ctx.prisma.category.findMany({
          include: { children: true },
        })
      },
    })
  },
})
