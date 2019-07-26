const Sequelize = require('sequelize')
const sequelize = require('../db')

const Word = sequelize.define('word', {
  word: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
}, {
  timestamps: false,
  tableName: 'word'
})

module.exports = Word