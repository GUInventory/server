import { extendType } from '@nexus/schema'
import { AuthenticationError } from 'apollo-server'
import { comparePasswords, generateJWToken } from '../../utils/authentication'
import { LoginInput } from './authentication.input'

export const AuthenticationMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('login', {
      type: 'AuthenticationPayload',
      args: {
        data: LoginInput.asArg({ required: true }),
      },
      resolve: async (_, { data: { email, password } }, context) => {
        const user = await context.prisma.user.findOne({ where: { email } });
        if (user === null) {
          throw new AuthenticationError('Invalid email or password')
        }

        const isValidPassword = await comparePasswords(password, user.password)
        if (!isValidPassword) {
          throw new AuthenticationError('Invalid email or password')
        }

        return {
          token: generateJWToken(user.id),
          user,
        }
      },
    })
  }
})
