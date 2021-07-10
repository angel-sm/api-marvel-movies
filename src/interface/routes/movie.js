import { movieController } from '../controllers/movie'

export default (router) => {
  router.get('/movies', movieController.getMovies)
  router.get('/movies/:id', movieController.getMovie)
}
