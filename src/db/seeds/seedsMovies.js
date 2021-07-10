/* eslint-disable node/handle-callback-err */
/* eslint-disable new-cap */
/* eslint-disable array-callback-return */
const { movieModel } = require('../../Movies/infrastructure/schemas/movie')
const { data } = require('./marvelmcu.json')

export const seedMovies = () => {
  data.map(movie => {
    const newMovie = new movieModel({ ...movie })
    newMovie.save((error, movie) => {
      if (error) console.log(`error: ${error}`)
    })
  })
  console.log('Movies created successfully')
}
