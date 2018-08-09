const express = require('express')
const router = express.Router()

const eventRoutes = require('./event/controller')

router.get('/', (req, res) => {
  res.status(200).send(new Date())
})

router.use('/events', eventRoutes)

module.exports = router
