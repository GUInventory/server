import { rule } from 'graphql-shield'

export const isAuthenticated = rule()(
  async (_parent, _args, _ctx, _info) => true, // TODO: Implement
)
