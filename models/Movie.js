const { model, Schema } = require('mongoose')

const Movie = new Schema({
  title: String,
  isDone: Boolean
})

module.exports = model('Movie', Movie)
