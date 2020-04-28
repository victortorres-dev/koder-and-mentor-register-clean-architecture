const express = require('express')
const mentors = require('../usecases/mentors')

const router = express.Router()

// GET -> /mentors/
router.get('/', async (req, res) => {
  const allMentors = await mentors.getAll()
  res.json({
    messagge: 'All mentors...',
    data: allMentors
  })
})

// POST -> /mentors/
router.post('/', async (req, res) => {
  const createMentor = await mentors.create(req.body)
  res.json({
    messagge: 'Mentor created...',
    data: createMentor
  })
})

module.exports = router
