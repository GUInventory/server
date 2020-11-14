import { request } from 'graphql-request'
import { register, login } from './graphql'
import { getConfig } from '../__helpers'

const config = getConfig()

test('successfully register a user', async () => {
  const data = {
    name: 'User Name',
    email: 'test-user@example.org',
    password: 'password',
  }
  const req: any = await request(config.url, register, data)

  expect(req).toHaveProperty('register')
  expect(req.register.user.email).toEqual(data.email)
})

test('successfully get token on login', async () => {
  const data = {
    email: 'test-user@example.org',
    password: 'password',
  }
  const req: any = await request(config.url, login, data)

  expect(req).toHaveProperty('login')
  expect(req.login.token).toBeDefined()
})
