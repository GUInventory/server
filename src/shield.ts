import { shield as GQLShield, allow, rule } from 'graphql-shield'
import { isAuthenticated, isGlobalAdmin } from './middleware/authentication'

const shieldFallback = async (parent, args, ctx, info) => {
  switch (info.parentType.name) {
    case 'Query':
      return false
    case 'Mutation':
      return false
    default:
      return true
  }
}
const fallbackRule = rule({ cache: false })(shieldFallback)

export const shield = GQLShield(
  {
    Query: {
      warehouses: isGlobalAdmin,
      roles: isGlobalAdmin,
      logs: isGlobalAdmin,
    },
    Mutation: {
      login: allow,
      register: allow,
      updateUser: isGlobalAdmin,
      createRole: isGlobalAdmin,
      updateRole: isGlobalAdmin,
    },
  },
  {
    allowExternalErrors: true,
    fallbackRule: fallbackRule,
  },
)
