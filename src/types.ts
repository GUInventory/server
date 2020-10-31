import { Request } from 'express'
import { PrismaClient } from '@prisma/client'

export interface Context {
  prisma: PrismaClient
  req?: Request
}