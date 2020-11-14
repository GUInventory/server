const path = require('path')
const NodeEnvironment = require('jest-environment-node')
const { v4 } = require('uuid')
const { Client } = require('pg')
const { execSync } = require('child_process')

const prismaBinary = path.join(__dirname, '..', 'node_modules', '.bin', 'prisma')
let databaseUrl
let schema

class SetupEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config)
    schema = `test_${v4()}`
    databaseUrl = `postgres://postgres:password@localhost:5432/test?schema=${schema}`
    process.env.DATABASE_URL = databaseUrl
  }

  async setup() {
    execSync(`${prismaBinary} migrate up --create-db --experimental`, {
      env: {
        ...process.env,
        DATABASE_URL: databaseUrl,
      },
    })
    console.log('🟢 DATABASE CREATED')
    return super.setup()
  }

  async teardown() {
    const client = new Client({
      connectionString: databaseUrl,
    })
    await client.connect()
    await client.query(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`)
    await client.end()

    console.log('🟢 DATABASE DROPPED')
  }
}

module.exports = SetupEnvironment
