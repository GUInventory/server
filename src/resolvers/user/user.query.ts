import { extendType, stringArg } from '@nexus/schema';

export const UserQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('users', {
      type: 'User',
      args: {
        world: stringArg({ required: false }),
      },
      resolve(_root, _args, ctx) {
        return ctx.prisma.user.findMany()
      },
    })
}
})
