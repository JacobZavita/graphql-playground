const { Movie } = require('../models')

const resolvers = {
  Query: {
    movies: async () => await Movie.find({}),
    movie: async (parent, { _id }) => await Movie.findById(_id)
  }
}

module.exports = resolvers
