import { MoviesRepository } from '../../domain/repository'
import { movieModel } from '../schemas/movie'

export class MongoRepository extends MoviesRepository {
  async getAll () {
    return movieModel.find({})
      .then(movies => movies)
  }

  async getById (movieId) {
    return movieModel.findById(movieId)
      .then(movie => movie)
  }
}
