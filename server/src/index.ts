import 'dotenv/config'
import express, { Application } from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema'
import rootValue from './resolvers'
import UrlRegistryService from './urls-registry-service'

const port = process.env.PORT
const shouldExposeGraphiQL = process.env.EXPOSE_GRAPHIQL === 'true'
const app: Application = express()

app.use(cors())

app.use(graphqlHTTP({
  schema,
  rootValue,
  graphiql: shouldExposeGraphiQL
}))

async function init () {
  try {
    await UrlRegistryService.init()
  } catch (e) {
    console.error('init', e)
    process.exit(1)
  }
}

init()

export const server = app.listen(port, () => console.log(`Listening on port: ${port}`))
