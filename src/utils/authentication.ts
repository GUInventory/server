
import { sign } from 'jsonwebtoken'
import { compare } from 'bcrypt'
import { APP_SECRET } from '../config/environment'

export const generateJWToken = (userID: Number, options = {}) =>
  sign({ userID }, APP_SECRET, options)


export const comparePasswords = async (password: string, userPassword: string) =>
  await compare(password, userPassword);
