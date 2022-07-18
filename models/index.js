const Sequelize = require('sequelize')
const catsModel = require('./cats')

const connection = new Sequelize('cats', 'cats2_users', 'cats2!', {
    host: 'localhost', dialect: 'mysql'
  })
  
  const cats = catsModel(connection, Sequelize)
  
  module.exports = { cats }
  