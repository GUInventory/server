import { extendType } from '@nexus/schema'
import { Context } from '../../types'

export const ItemSubscription = extendType({
  type: 'Subscription',
  definition: (t) => {
    t.field('itemUpdated', {
      type: 'Item',
      // @ts-ignore
      subscribe: (_, {}, ctx: Context) => {
        return ctx.pubsub.asyncIterator('itemUpdated')
      },
    })
  },
})
