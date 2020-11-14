import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http'
import { PrismaClient } from '@prisma/client'
import { applyMiddleware } from 'graphql-middleware'
import { PubSub } from 'apollo-server'
import express from 'express'
import { schema } from './schema'
import { shield } from './shield'
import { verifyToken } from './utils/authentication'

const PORT = 4000

const app = express()
const server = createServer(app)
const prisma = new PrismaClient()
const pubsub = new PubSub()

const apollo = new ApolloServer({
  subscriptions: {
    onConnect: async (header: { Authorization: null | string }) => {
      if (!header.Authorization) throw new Error('Invalid or missing token')
      const token = verifyToken(header.Authorization)
      if (!token.userID) throw new Error('Invalid or missing token')
      return { userID: token.userID }
    },
  },
  context: async ({ req, connection }) => {
    return {
      ...(connection ? connection.context : { req: req }),
      prisma,
      pubsub,
    }
  },
  schema: applyMiddleware(schema, shield),
})

apollo.applyMiddleware({ app, cors: true })

apollo.installSubscriptionHandlers(server)

server.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${apollo.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${apollo.subscriptionsPath}`)
})
