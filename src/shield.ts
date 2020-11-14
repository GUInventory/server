import { shield as GQLShield, allow } from 'graphql-shield'
import { isAuthenticated, isGlobalAdmin } from './middleware/authentication'

export const shield = GQLShield(
  {
    Query: {
      warehouses: isGlobalAdmin,
    },
    Mutation: {
      login: allow,
      register: allow,
    },
  },
  {
    allowExternalErrors: true,
    fallbackRule: isAuthenticated,
  },
)
