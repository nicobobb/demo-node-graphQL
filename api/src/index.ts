import { ApolloServer } from "apollo-server";

// 1 - query

const typeDefs = `
type Query {
    info: String!
}
`

// 2 - resolvers

const resolvers = {
    Query: {
        info: () => `API con Node y GraphQL`
    }
}

// 3 - iniciar servidor
const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => console.log(`El servidor está corriendo en ${url}`))