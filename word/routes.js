const { Router } = require('express')
const Word = require('./model')

const router = new Router()

router.get('/word', (req, res, next) => {
  Word
    .findAll({
      where: {
        date: new Date().toJSON().slice(0,10)
      }
    })
    .then(word => {
      res.send({ word })
    })
    .catch(error => next(error))
})

router.get('/words', (req, res, next) => {
  Word
    .findAll()
    .then(word => {
      res.send({ word })
    })
    .catch(error => next(error))
})

router.post('/word', (req, res) => {
  Word
    .create({
      word: req.body.word,
      date: new Date().toJSON().slice(0,10),
      description: req.body.description
    })
    .then(word => {
      if (!word) {
        return res.status(404).send({
          message: 'Word not created'
        })
      }
    })
})

module.exports = router