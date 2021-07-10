import mongoose from 'mongoose'
import { environment } from '../config/environment'

export class Mongoose {
  connect () {
    mongoose.connect(environment.database.url, { useUnifiedTopology: true, useNewUrlParser: true })
      .catch((error) => console.log(error))

    mongoose.connection.on('connected', () => {
      console.info('Connected to Mongo!')
    })

    mongoose.connection.on('error', (error) => {
      console.error(`Error in Mongo connection: ${error}`)
      mongoose.disconnect()
    })

    return mongoose.connection
  }
}
