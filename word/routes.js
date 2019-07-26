const { Router } = require('express')
const Word = require('./model')

const router = new Router()

// router.get('/advertisements', (req, res, next) => {
//   Advertisement
//     .findAll()
//     .then(advertisement => {
//       res.send({ advertisement })
//     })
//     .catch(error => next(error))
// })

// router.get('/advertisements/:id', (req, res, next) => {
//   Advertisement
//     .findByPk(req.params.id)
//     .then(advertisement => {
//       if (!advertisement) {
//         return res.status(404).send({
//           message: `Advertisement does not exist`
//         })
//       }
//       return res.send(advertisement)
//     })
//     .catch(error => next(error))
// })

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