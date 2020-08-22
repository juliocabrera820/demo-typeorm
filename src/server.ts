import 'reflect-metadata'
import app from './app'
import dotenv from 'dotenv'
import { createConnection } from 'typeorm'

dotenv.config()
createConnection()

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})
