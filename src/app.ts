import 'reflect-metadata'
import express, { json, Application } from 'express'
import routes from './routes'
import cors from 'cors'
import { errors } from 'celebrate'
import { createConnection } from 'typeorm'

createConnection()
const app: Application = express()

app.use(cors())
app.use(json())
app.use(routes)
app.use(errors())

export default app
