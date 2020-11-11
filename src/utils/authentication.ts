import { sign, verify } from 'jsonwebtoken'
import { compare } from 'bcrypt'
import { APP_SECRET } from '../config/environment'
import { Context } from '../types'

interface Token {
  userID: number
  iat?: number
  exp?: number
}

export const generateToken = (userID: number, options = {}): string =>
  sign({ userID }, APP_SECRET, options)

export const verifyToken = (token: string): Token =>
  verify(token.replace('Bearer ', '').replace(/"/g, ''), APP_SECRET) as Token

export const comparePasswords = async (password: string, userPassword: string): Promise<boolean> =>
  await compare(password, userPassword)

export const getUserID = (context: Context): number | undefined => {
  const authorization = context.req?.headers?.authorization
  if (!authorization) return undefined

  const verifiedToken = verifyToken(authorization)
  return verifiedToken?.userID
}
