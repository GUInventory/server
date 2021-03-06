import { extendType } from '@nexus/schema'
import { ApolloError } from 'apollo-server'
import { hash } from 'bcrypt'
import { comparePasswords, generateToken } from '../../utils/authentication'
import { LoginInput, RegisterInput } from './authentication.input'
import { somethingWentWrong } from '../../errors/global'
import { invalidEmailOrPassword, emailAlreadyInUse } from '../../errors/authentication'

export const AuthenticationMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('login', {
      type: 'AuthenticationPayload',
      args: {
        data: LoginInput.asArg({ required: true }),
      },
      resolve: async (_, { data: { email, password } }, context) => {
        const user = await context.prisma.user.findOne({ where: { email } })
        if (user === null) {
          throw new ApolloError(invalidEmailOrPassword)
        }

        const isValidPassword = await comparePasswords(password, user.password)
        if (!isValidPassword) {
          throw new ApolloError(invalidEmailOrPassword)
        }

        return {
          token: generateToken(user.id),
          user,
        }
      },
    })

    t.field('register', {
      type: 'AuthenticationPayload',
      args: {
        data: RegisterInput.asArg({ required: true }),
      },
      resolve: async (_, { data: { email, name, password } }, context) => {
        const checkUser = await context.prisma.user.findOne({ where: { email } })
        if (checkUser !== null) {
          throw new ApolloError(emailAlreadyInUse)
        }
        try {
          const user = await context.prisma.user.create({
            data: {
              email,
              name,
              password: await hash(password, 10),
            },
          })
          return {
            token: generateToken(user.id),
            user,
          }
        } catch (error) {
          throw new ApolloError(somethingWentWrong)
        }
      },
    })
  },
})
