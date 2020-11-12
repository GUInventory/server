import { extendType } from '@nexus/schema'
import { hash } from 'bcrypt'
import uuid from 'uuid'
import { ResetPasswordInput, ForgotPasswordInput } from './reset_password_token.input'
import { sendEmail } from '../../utils/email'

export const ResetPasswordTokenMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('forgotPassword', {
      type: 'Boolean',
      args: {
        data: ForgotPasswordInput.asArg({ required: true }),
      },
      resolve: async (_, { data: { email } }, context) => {
        const user = await context.prisma.user.findOne({
          where: { email },
        })

        const resetPasswordToken = await context.prisma.resetPasswordToken.create({
          data: { email, token: uuid() },
        })

        if (user !== null) {
          sendEmail({
            to: email,
            params: {
              token: resetPasswordToken.token,
            },
          })
          return true
        }
        return true
      },
    })

    t.field('resetPassword', {
      type: 'Boolean',
      args: {
        data: ResetPasswordInput.asArg({ required: true }),
      },
      resolve: async (_, { data: { token, password } }, context) => {
        const resetPasswordToken = await context.prisma.resetPasswordToken.findOne({
          where: { token },
        })
        if (resetPasswordToken === null) throw new Error('Invalid token')

        await context.prisma.user.update({
          where: {
            email: resetPasswordToken.email,
          },
          data: {
            password: await hash(password, 10),
          },
        })

        await context.prisma.resetPasswordToken.delete({ where: { token } })

        return true
      },
    })
  },
})
