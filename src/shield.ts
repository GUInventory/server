import { shield as GQLShield, allow } from 'graphql-shield'
import { isAuthenticated } from './middleware/authentication'

export const shield = GQLShield(
  {
    Query: {
      me: isAuthenticated,
    },
    Mutation: {
      login: allow,
      register: allow,
    },
  },
  { allowExternalErrors: true },
)
