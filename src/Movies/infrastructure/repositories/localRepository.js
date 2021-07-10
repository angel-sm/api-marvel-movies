import { MoviesRepository } from '../../domain/repository'
import { Movie } from '../../domain/movie'

export class LocalRepository extends MoviesRepository {
  constructor () {
    super()
    this.data = []
    this.mockMovies()
  }

  mockMovies () {
    const newMovie = new Movie(
      14,
      'Doctor Strange',
      '2016-11-04',
      115,
      'From Marvel Studios comes "Doctor Strange", the story of world-famous neurosurgeon Dr. Stephen Strange whose life changes forever after a horrific car accident robs him of the use of his hands. When traditional medicine fails him, he is forced to look for healing, and hope, in an unlikely place - mysterious enclave known as Kamar-Taj. He quickly learns that this is not just a center for healing but also the front line of a battle against unseen dark forces bent on destroying our reality. Before long StrangeÔÇöarmed with newly acquired magical powers - is forced to choose whether to return to his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.',
      'https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/doctor-strange.jpg',
      'https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790930123001',
      'Scott Derrickson',
      3,
      'Infinity Saga',
      18,
      2
    )
    this.create(newMovie)
  }

  create (movie) {
    this.data.push(movie)
  }

  getAll () {
    return this.data
  }

  getById (movieId) {
    const [movie] = this.data.filter(movie => movie.id === movieId)
    return movie
  }
}
