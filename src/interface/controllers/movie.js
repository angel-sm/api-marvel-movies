import { getMovie } from '../../Movies/application/useCases/getMovie'
import { getMovies } from '../../Movies/application/useCases/getMovies'
import { MongoRepository } from '../../Movies/infrastructure/repositories/mongoRepository'

export const movieController = {
  getMovies (req, res) {
    getMovies(MongoRepository).then(movies => {
      res.status(200).json(movies)
    })
  },

  getMovie (req, res) {
    const { id } = req.params

    getMovie(id, MongoRepository).then(movie => {
      res.status(200).json({ ...movie })
    })
  }
}
