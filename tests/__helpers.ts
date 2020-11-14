import server from '../src/server'
import { PrismaClient } from '@prisma/client'
import { Headers } from 'cross-fetch'
import { random } from 'faker'

// @ts-ignore
global.Headers = global.Headers || Headers
type Config = { url: string }
const prisma = new PrismaClient()

export const getConfig = () => {
  const config: any = {}

  beforeAll(async (done) => {
    process.env.NODE_ENV = 'test'
    server.listen(4001, () => {
      config.url = 'http://127.0.0.1:4001/graphql'
      done()
    })
  })

  afterAll(async (done) => {
    await server.close()
    await prisma.$disconnect()
    done()
  })

  return config as Config
}
