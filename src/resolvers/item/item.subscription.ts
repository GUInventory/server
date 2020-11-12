import { extendType } from '@nexus/schema'
import { Context } from '../../types'
import { ItemEvent } from './item.type'
import { Item } from '@prisma/client'

export const publishItemEvent = async (event: ItemEvent, item: Item, ctx: Context) => {
  await ctx.pubsub.publish(event, { itemUpdated: item })
}

const itemAsyncIterator = (event: ItemEvent, ctx: Context) => {
  return ctx.pubsub.asyncIterator(event)
}

export const ItemSubscription = extendType({
  type: 'Subscription',
  definition: (t) => {
    t.field('itemCreated', {
      type: 'Item',
      // @ts-ignore
      subscribe: (_, {}, ctx: Context) => {
        return itemAsyncIterator('itemCreated', ctx)
      },
    })
    t.field('itemUpdated', {
      type: 'Item',
      // @ts-ignore
      subscribe: (_, {}, ctx: Context) => {
        return itemAsyncIterator('itemUpdated', ctx)
      },
    })

    t.field('itemDeleted', {
      type: 'Item',
      // @ts-ignore
      subscribe: (_, {}, ctx: Context) => {
        return itemAsyncIterator('itemDeleted', ctx)
      },
    })
  },
})
