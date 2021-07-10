/* eslint-disable no-undef */
const { LocalRepository } = require('../../Movies/infrastructure/repositories/localRepository')
const { getMovie } = require('../../Movies/application/useCases/getMovie')

describe('getMovie test', () => {
  test('should resolve with one movie', async () => {
    const movie = await getMovie(14, LocalRepository)

    expect(movie).toEqual({
      id: 14,
      title: 'Doctor Strange',
      release_date: '2016-11-04',
      duration: 115,
      overview: 'From Marvel Studios comes "Doctor Strange", the story of world-famous neurosurgeon Dr. Stephen Strange whose life changes forever after a horrific car accident robs him of the use of his hands. When traditional medicine fails him, he is forced to look for healing, and hope, in an unlikely place - mysterious enclave known as Kamar-Taj. He quickly learns that this is not just a center for healing but also the front line of a battle against unseen dark forces bent on destroying our reality. Before long StrangeÔÇöarmed with newly acquired magical powers - is forced to choose whether to return to his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.',
      cover_url: 'https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/doctor-strange.jpg',
      trailer_url: 'https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790930123001',
      directed_by: 'Scott Derrickson',
      phase: 3,
      saga: 'Infinity Saga',
      chronology: 18,
      post_credit_scenes: 2
    })
  })
})
