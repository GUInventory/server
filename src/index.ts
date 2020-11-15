import server from './server'

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}/graphql`)
})
