import { shield as GQLShield } from 'graphql-shield'
import { isAuthenticated } from './middleware/authentication'

export const shield = GQLShield({
  Query: {
    me: isAuthenticated,
  },
})
