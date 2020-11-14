import { objectType, asNexusMethod, enumType, scalarType } from '@nexus/schema'
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

export const LogTypeEnum = enumType({
  name: 'LogTypeEnum',
  members: ['EDIT', 'UPDATE', 'DELETE'],
})

export const RoleTypeEnum = enumType({
  name: 'RoleTypeEnum',
  members: ['ADMIN', 'EDITOR', 'USER'],
})

export const JSONScalar = scalarType({
  name: 'JSON',
  asNexusMethod: 'json',
  description: 'JSON scalar type',
})
