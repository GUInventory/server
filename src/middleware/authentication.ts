import { rule } from 'graphql-shield'
import { getUserID, isGlobal } from '../utils/authentication'

export const isAuthenticated = rule()(async (_parent, _args, ctx, _info) => {
  return !!getUserID(ctx)
})

export const isGlobalAdmin = rule()(async (_parent, _args, ctx, _info) => {
  return await isGlobal(ctx, 'ADMIN')
})

export const isGlobalEditor = rule()(async (_parent, _args, ctx, _info) => {
  return await isGlobal(ctx, 'EDITOR')
})

export const isGlobalUser = rule()(async (_parent, _args, ctx, _info) => {
  return await isGlobal(ctx, 'USER')
})
