import { extendType, intArg } from '@nexus/schema'
import { CreateOutgoingInput, UpdateOutgoingInput } from './outgoing.input'

export const OutgoingMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createOutgoing', {
      type: 'Outgoing',
      args: { data: CreateOutgoingInput.asArg({ required: true }) },
      resolve: (_, { data: { item, ...rest } }, ctx) => {
        return ctx.prisma.outgoing.create({
          data: {
            item: { connect: item },
            ...rest,
          },
        })
      },
    })

    t.field('updateOutgoing', {
      type: 'Outgoing',
      args: {
        id: intArg({ required: true }),
        data: UpdateOutgoingInput.asArg({ required: true }),
      },
      resolve: (_, { id, data }, ctx) => {
        return ctx.prisma.outgoing.update({
          where: { id },
          data,
        })
      },
    })

    t.field('deleteOutgoing', {
      type: 'Outgoing',
      args: {
        id: intArg({ required: true }),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.outgoing.delete({
          where: { id },
        })
      },
    })
  },
})
