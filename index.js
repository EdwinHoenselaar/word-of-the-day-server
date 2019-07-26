const express = require('express')
const bodyParser = require('body-parser')
const wordRouter = require('./word/routes')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app
  .use(bodyParser.json())
  .use(cors())
  .use(wordRouter)
  .listen(port, () => console.log(`Listening on port ${port}`))