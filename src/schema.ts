import { join } from 'path'
import { makeSchema } from '@nexus/schema'
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'
import * as types from './resolvers'

export const schema = makeSchema({
  types,
  plugins: [nexusSchemaPrisma({
    experimentalCRUD: true,
  })],
  typegenAutoConfig: {
    contextType: '{ prisma: PrismaClient.PrismaClient }',
    sources: [{ source: '.prisma/client', alias: 'PrismaClient' }],
  },
  shouldGenerateArtifacts: true,
  outputs: {
    schema: join(__dirname, 'generated/schema.gen.graphql'),
    typegen: join(__dirname, 'generated/nexusTypes.gen.ts'),
  }
})