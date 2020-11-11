import { objectType } from '@nexus/schema'

export const Item = objectType({
  name: 'Item',
  definition(t) {
    t.id('id')
    t.string('name')
    t.string('image')
    t.int('value')

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
      type: 'Position3D',
      resolve: async ({ positionX, positionY, positionZ }) => {
        return {
          x: positionX,
          y: positionY,
          z: positionZ,
        }
      },
    })

    t.field('storage', {
      type: 'Storage',
      list: [false],
      nullable: false,
    })

    t.field('outgoings', {
      type: 'Outgoing',
      list: [true],
      nullable: true,
    })

    t.field('attributes', {
      type: 'Attribute',
      list: [true],
      nullable: true,
    })

    t.field('categories', {
      type: 'Category',
      list: [true],
      nullable: true,
    })

    // t.dateTime('createdAt')
    // t.dateTime('updatedAt')
  },
})
