import express from 'express'
import moviesRoutes from './movie'

const router = express.Router()

moviesRoutes(router)

export default router
