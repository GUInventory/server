import { shield as GQLShield, allow, rule } from 'graphql-shield'
import { isAuthenticated, isGlobalAdmin } from './middleware/authentication'

const shieldFallback = async (parent, args, ctx, info) => {
  switch (info.parentType.name) {
    case 'Query':
      return isAuthenticated(parent, args, ctx, info)
    case 'Mutation':
      return isAuthenticated(parent, args, ctx, info)
    case 'Subscription':
      return isAuthenticated(parent, args, ctx, info)
    default:
      return true
  }
}
const fallbackRule = rule({ cache: false })(shieldFallback)

export const shield = GQLShield(
  {
    Query: {
      warehouses: isGlobalAdmin,
      logs: isGlobalAdmin,
    },
    Mutation: {
      login: allow,
      register: allow,
    },
  },
  {
    allowExternalErrors: true,
    fallbackRule: fallbackRule,
  },
)
