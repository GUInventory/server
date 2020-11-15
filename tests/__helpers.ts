import server from '../src/server'
import { Headers } from 'cross-fetch'

// @ts-ignore
global.Headers = global.Headers || Headers
type Config = { url: string }
//const prisma = new PrismaClient()
let app
export const getConfig = () => {
  const config: any = {}

  beforeAll(async (done) => {
    process.env.NODE_ENV = 'test'
    process.env.DATABASE_URL = 'postgres://postgres:password@localhost:5432/test?schema=test'
    app = server.listen(4001, () => {
      config.url = 'http://127.0.0.1:4001/graphql'
      done()
    })
  })

  afterAll(async (done) => {
    //prisma.$disconnect().then()
    return app && app.close(done)
  })

  return config as Config
}
