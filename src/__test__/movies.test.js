/* eslint-disable node/handle-callback-err */
/* eslint-disable no-use-before-define */
/* eslint-disable new-cap */
/* eslint-disable no-undef */
const supertest = require('supertest')
const { server, connection } = require('../index')
const { movieModel } = require('../Movies/infrastructure/schemas/movie')
// const { movieModel } = require('../Movies/infrastructure/schemas/movie')

describe('Movies tests', () => {
  test('should return a list of movies', () => {
    const movieMock = {
      id: 13,
      title: 'Captain America: Civil War',
      release_date: '2016-05-06',
      duration: 147,
      overview: "Marvel's 'Captain America: Civil War' finds Steve Rogers leading the newly formed team of Avengers in their continued efforts to safeguard humanity. But after another incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to oversee and direct the team. The new status quo fractures the Avengers, resulting in two campsÔÇöone led by Steve Rogers and his desire for the Avengers to remain free to defend humanity without government interference, and the other following Tony Stark's surprising decision to support government oversight and accountability.",
      cover_url: 'https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/captain-america-civil-war.jpg',
      trailer_url: 'https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790932946001',
      directed_by: 'Anthony Russo, Joe Russo',
      phase: 3,
      saga: 'Infinity Saga',
      chronology: 15,
      post_credit_scenes: 2
    }

    const movie = new movieModel({ ...movieMock })
    movie.save()

    return supertest(server).get('/movies')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        expect(response.body.length).toBe(1)
        expect(response.body[0].title).toBe(movieMock.title)
      })
  })

  afterEach(() => {
    connection.dropCollection('movies').then(() => {
      connection.close()
    })
  })
})
