/* eslint-disable no-new */
import express from 'express'
import morgan from 'morgan'
import routes from '../routes'
import { environment } from '../../config/environment'
import cors from 'cors'

export class Server {
  constructor () {
    this.app = express()
    this.setMiddleWares()
    this.setRoutes()
  }

  setRoutes () {
    this.app.use(routes)
  }

  setMiddleWares () {
    this.app.use(express.json())
    this.app.use(morgan('dev'))
    this.app.use(cors())
  }

  start () {
    this.app.listen(environment.server.port, () => {
      console.log(`Listen on port ${environment.server.port}`)
    })

    return this.app
  }
}
