import 'dotenv/config'
import express, { Application } from 'express'
import cors from 'cors'

const port = process.env.PORT
const app: Application = express()

app.use(cors())

export const server = app.listen(port, () => console.log(`Listening on port: ${port}`))
