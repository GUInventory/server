import { objectType } from '@nexus/schema'

export const Warehouse = objectType({
  name: 'Warehouse',
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
        };
      },
    })

    t.dateTime('createdAt')
    t.dateTime('updatedAt')
  }
})
