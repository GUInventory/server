import { extendType } from '@nexus/schema'
import { ApolloError } from 'apollo-server'
import { hash } from 'bcrypt'
import { ChangePasswordInput } from './user.input'
import { getUserID, comparePasswords } from '../../utils/authentication'
import { invalidPassword } from '../../errors/authentication'

export const UserMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('changePassword', {
      type: 'User',
      args: { data: ChangePasswordInput.asArg({ required: true }) },
      resolve: async (_, { data: { oldPassword, newPassword } }, ctx) => {
        const user = await ctx.prisma.user.findOne({ where: { id: getUserID(ctx) } })

        const isValidPassword = await comparePasswords(oldPassword, user.password)
        if (!isValidPassword) {
          throw new ApolloError(invalidPassword)
        }
        const password = await hash(newPassword, 10)
        return ctx.prisma.user.update({ where: { id: getUserID(ctx) }, data: { password } })
      },
    })
  },
})
