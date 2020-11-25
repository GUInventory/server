import { extendType, stringArg } from '@nexus/schema'
import { getUserID } from '../../utils/authentication'
import { Context } from '../../types'

export const UserQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('users', {
      type: 'User',
      resolve(_root, {}, ctx) {
        return ctx.prisma.user.findMany()
      },
    })

    t.field('me', {
      type: 'User',
      resolve: (_, {}, ctx: Context) => {
        return ctx.prisma.user.findOne({ where: { id: getUserID(ctx) } })
      },
    })
  },
})
