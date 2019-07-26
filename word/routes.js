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

router.get('/words/:date', (req, res, next) => {
  Word
  findAll({
    where: {
        date: req.params.date
    },
    attributes: ['id', 'word', 'date'], //object
})    .then(word => {
      if (!word) {
        return res.status(404).send({
          message: `Word does not exist`
        })
      }
      return res.send(word)
    })
    .catch(error => next(error))
})

router.post('/words', (req, res) => {
  Word
    .create(req.body)
    .then(word => {
      if (!word) {
        return res.status(404).send({
          message: 'Word does not exist'
        })
      }
    })
})

// router.post('/advertisements', (req, res, next) => {
//   Advertisement
//     .create(req.body)
//     .then(advertisement => {
//       if (!advertisement) {
//         return res.status(404).send({
//           message: `Advertisement does not exist`
//         })
//       }
//       return res.status(201).send(advertisement)
//     })
//     .catch(error => next(error))
// })

// router.delete('/advertisements/:id', (req, res, next) => {
//   Advertisement
//     .findByPk(req.params.id)
//     .then(advertisement => {
//       if (!advertisement) {
//         return res.status(404).send({
//           message: `Advertisement does not exist`
//         })
//       }
//       return advertisement.destroy()
//         .then(() => res.send({
//           message: `Advertisement was deleted`
//         }))
//     })
//     .catch(error => next(error))
// })

module.exports = router