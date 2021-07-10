/* eslint-disable camelcase */
export class Movie {
  constructor (id = null, title, release_date, duration, overview, cover_url, trailer_url, directed_by, phase, saga, chronology, post_credit_scenes) {
    this.id = id
    this.title = title
    this.release_date = release_date
    this.duration = duration
    this.overview = overview
    this.cover_url = cover_url
    this.trailer_url = trailer_url
    this.directed_by = directed_by
    this.phase = phase
    this.saga = saga
    this.chronology = chronology
    this.post_credit_scenes = post_credit_scenes
  }
}
