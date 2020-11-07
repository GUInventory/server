import { rule } from 'graphql-shield'
import { getUserID } from '../utils/authentication'

export const isAuthenticated = rule()(async (_parent, _args, ctx, _info) => {
  return !!getUserID(ctx)
})
