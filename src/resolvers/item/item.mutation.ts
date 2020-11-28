import { extendType, intArg } from '@nexus/schema'
import { CreateItemInput, UpdateItemInput } from './item.input'
import { Context } from '../../types'
import { publishItemEvent } from './item.subscription'
import { log } from '../../utils/log'

export const ItemMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createItem', {
      type: 'Item',
      args: { data: CreateItemInput.asArg({ required: true }) },
      resolve: async (_, { data: { storage, ...rest } }, context: Context) => {
        const item = await context.prisma.item.create({
          data: {
            storage: { connect: storage },
            ...rest,
          },
        })
        await log({
          type: 'CREATE',
          entityId: item.id,
          entityName: 'Item',
          newValues: { storage, ...rest },
          context,
        })
        await publishItemEvent('itemCreated', item, context)
        return item
      },
    })

    t.field('updateItem', {
      type: 'Item',
      args: {
        id: intArg({ required: true }),
        data: UpdateItemInput.asArg({ required: true }),
      },
      resolve: async (_, { id, data }, context: Context) => {
        const findItem = await context.prisma.item.findOne({ where: { id } })
        const item = await context.prisma.item.update({
          where: { id },
          data,
        })
        await log({
          type: 'UPDATE',
          entityId: id,
          entityName: 'Item',
          oldValues: findItem,
          newValues: data,
          context,
        })
        await publishItemEvent('itemUpdated', item, context)
        return item
      },
    })

    t.field('deleteItem', {
      type: 'Item',
      args: {
        id: intArg({ required: true }),
      },
      resolve: async (_, { id }, context: Context) => {
        const item = await context.prisma.item.delete({
          where: { id },
        })
        await log({
          type: 'DELETE',
          entityId: id,
          entityName: 'Item',
          oldValues: item,
          context,
        })
        await publishItemEvent('itemDeleted', item, context)
        return item
      },
    })
  },
})
