import { objectType } from '@nexus/schema'

export const Storage = objectType({
  name: 'Storage',
  definition(t) {
    t.id('id')
    t.string('name')

    t.field('size', {
      type: 'Size',
      resolve: async ({ sizeX, sizeY, sizeZ }) => {
        return {
          x: sizeX,
          y: sizeY,
          z: sizeZ,
        }
      },
    })

    t.field('position', {
      type: 'Position2D',
      resolve: async ({ positionX, positionY }) => {
        return {
          x: positionX,
          y: positionY,
        }
      },
    })

    t.field('warehouse', {
      type: 'Warehouse',
    })

    t.field('items', {
      type: 'Item',
      list: [true],
      nullable: true,
    })

    t.field('warehouse', {
      type: 'Warehouse',
      nullable: false,
    })

    t.field('usage', {
      type: 'Int',
      resolve: async ({ id, sizeX, sizeY, sizeZ }, {}, ctx) => {
        const items = await ctx.prisma.item.findMany({ where: { storageId: id } })
        const itemsArea = items
          .map((item) => {
            return item.sizeX * item.sizeY * item.sizeZ
          })
          .reduce((a, b) => a + b, 0)
        return Math.round((itemsArea / (sizeX * sizeY * sizeZ)) * 100)
      },
    })

    t.field('createdAt', {
      type: 'Date',
      nullable: false,
      resolve: ({ createdAt }) => new Date(createdAt),
    })

    t.field('updatedAt', {
      type: 'Date',
      nullable: false,
      resolve: ({ updatedAt }) => updatedAt,
    })
  },
})
