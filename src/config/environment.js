import dotenv from 'dotenv'

dotenv.config()

export const environment = {
  database: {
    url: process.env.NODE_ENV === 'test' ? process.env.MONGO_URI_TEST : process.env.MONGO_URI_PROD
  },
  server: {
    port: process.env.NODE_ENV === 'test' ? 5005 : process.env.PORT || 4000
  }
}
