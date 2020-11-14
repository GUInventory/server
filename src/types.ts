import { Request } from 'express'
import { PrismaClient } from '@prisma/client'
import { PubSub } from 'apollo-server'

export interface Context {
  prisma: PrismaClient
  pubsub: PubSub
  req?: Request
  userID?: number
}
