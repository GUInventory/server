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

    t.field('items', {
      type: 'Item',
      list: [true],
      nullable: true,
    })

    // t.dateTime('createdAt')
    // t.dateTime('updatedAt')
  },
})
