import { objectType, asNexusMethod, enumType } from "@nexus/schema"
import { GraphQLDate } from 'graphql-iso-date'

export const DateTime = asNexusMethod(GraphQLDate, 'dateTime')

export const Size = objectType({
  name: 'Size',
  description: 'Size of an entity',
  definition(t) {
    t.int('x')
    t.int('y')
    t.int('z')
  },
})

export const Position2D = objectType({
  name: 'Position2D',
  description: 'Position in 2 dimension',
  definition(t) {
    t.int('x')
    t.int('y')
  },
})

export const Position3D = objectType({
  name: 'Position3D',
  description: 'Position in 3 dimension',
  definition(t) {
    t.int('x')
    t.int('y')
    t.int('z')
  },
})

export const AttributeTypeEnum = enumType({
  name: 'AttributeTypeEnum',
  members: ['STRING', 'DATE', 'DATETIME', 'NUMBER'],
})
