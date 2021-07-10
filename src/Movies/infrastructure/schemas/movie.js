import mongoose from 'mongoose'
const { Schema } = mongoose

const movieSchema = Schema({
  title: {
    type: String
  },
  release_date: {
    type: String

  },
  duration: {
    type: Number

  },
  overview: {
    type: String

  },
  cover_url: {
    type: String

  },
  trailer_url: {
    type: String

  },
  directed_by: {
    type: String

  },
  phase: {
    type: Number

  },
  saga: {
    type: String

  },
  chronology: {
    type: Number

  },
  post_credit_scenes: {
    type: Number

  }
})

export const movieModel = mongoose.model('Movie', movieSchema)
