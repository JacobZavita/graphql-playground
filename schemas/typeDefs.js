const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Movie {
    _id: ID!
    title: String!
  }
  type Query {
    items: [Movie!]!
    item(_id: ID!): Movie!
  }
`

module.exports = typeDefs
