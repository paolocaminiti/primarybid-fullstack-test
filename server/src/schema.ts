import { buildSchema } from 'graphql'

export default buildSchema(`
  type UrlRecord {
    id: String!
    alias: String!
    url: String!
    createdAt: String
  }

  input UrlRecordInput {
    url: String!
  }

  type Query {
    getUrls: [UrlRecord]
  }

  type Mutation {
    putUrl(input: UrlRecordInput!): UrlRecord
  }

  type Subscription {
    newUrl: UrlRecord!
  }
`)