import { extendType, intArg } from '@nexus/schema'
import { CreateStorageInput, UpdateStorageInput } from './storage.input'

export const StorageMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createStorage', {
      type: 'Storage',
      args: { data: CreateStorageInput.asArg({ required: true }) },
      resolve: (_, { data: { warehouse, ...rest } }, ctx) => {
        return ctx.prisma.storage.create({
          data: {
            warehouse: { connect: warehouse },
            ...rest,
          },
        })
      },
    })

    t.field('updateStorage', {
      type: 'Storage',
      args: {
        id: intArg({ required: true }),
        data: UpdateStorageInput.asArg({ required: true }),
      },
      resolve: (_, { id, data }, ctx) => {
        return ctx.prisma.storage.update({
          where: { id },
          data,
        })
      },
    })

    t.field('deleteStorage', {
      type: 'Storage',
      args: {
        id: intArg({ required: true }),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.storage.delete({
          where: { id },
        })
      },
    })
  },
})
