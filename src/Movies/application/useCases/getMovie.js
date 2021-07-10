export const getMovie = (id, MovieRepository) => {
  return new MovieRepository().getById(id)
}
