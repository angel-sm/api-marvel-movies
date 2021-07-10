export const getMovies = (MovieRepository) => {
  return new MovieRepository().getAll()
}
