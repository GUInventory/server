import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http'
import { PrismaClient } from '@prisma/client'
import { applyMiddleware } from 'graphql-middleware'
import express from 'express'
import { schema } from './schema'
import { shield } from './shield'

const PORT = 4000

const app = express()
const server = createServer(app)
const prisma = new PrismaClient()

const apollo = new ApolloServer({
  context: ({ req }) => ({ req, prisma }),
  schema: applyMiddleware(schema, shield),
})

apollo.applyMiddleware({ app, cors: true })

server.listen({ port: PORT }, () => {
  process.stdout.write(`🚀 Server running on :${PORT}\n`)
})
