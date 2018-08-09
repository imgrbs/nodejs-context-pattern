import express from 'express'
import Services from '../../ServiceProvider'
import EventContext from '../context/Event.context'

const router = express.Router()
const ctx = new EventContext();

router.get('/', (_, res) => {
  const events = new Services.EventService(ctx);
  res.status(200).send({
    message: events.getAll()
  })
})
router.post('/', (req, res) => {
  const event = req.body
  const events = new Services.EventService(ctx);
    res.status(200).send({
      message: events.create(event)
    })
})

module.exports = router
