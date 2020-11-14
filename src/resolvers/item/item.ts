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

    t.field('logs', {
      type: 'Log',
      list: [true],
      nullable: true,
      resolve: async ({ id }, {}, ctx) => {
        return await ctx.prisma.log.findMany({
          where: {
            entityId: id,
            entityName: 'Item',
          },
        })
      },
    })

    t.field('createdAt', {
      type: 'Date',
      nullable: false,
      resolve: ({ createdAt }) => createdAt,
    })

    t.field('updatedAt', {
      type: 'Date',
      nullable: false,
      resolve: ({ updatedAt }) => updatedAt,
    })
  },
})
