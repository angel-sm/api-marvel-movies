import { Server } from './interface/webserver/server'
import { Mongoose } from './db/connection'
import { seedMovies } from './db/seeds/seedsMovies'

const connection = new Mongoose().connect()

connection.on('connected', () => {
  console.log('MongoDB connected succefully ')
  if (process.env.NODE_ENV === 'production') {
    connection.dropCollection('movies')
    seedMovies()
  }
})

const server = new Server().start()

export {
  connection,
  server
}
