const express = require('express')
const mentors = require('../usecases/mentors')

const router = express.Router()

// GET -> /mentors/
router.get('/', async (req, res) => {
  try {
    const allMentors = await mentors.getAll()
    res.json({
      messagge: 'All mentors...',
      data: allMentors
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

// POST -> /mentors/
router.post('/', async (req, res) => {
  try {
    const createMentor = await mentors.create(req.body)
    res.json({
      messagge: 'Mentor created...',
      data: createMentor
    })
  } catch (error) {
    res.json({
      success: false,
      error: error.messagge
    })
  }
})

// DELETE -> /mentors/:id
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const mentorDeleted = await mentors.deleteById(id)
    response.json({
      success: true,
      message: `mentor whith id ${id} deleted`,
      data: {
        mentor: mentorDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

// PATCH -> /mentors/:id
router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const mentorUpdated = await mentors.updateById(id, request.body)
    response.json({
      success: true,
      message: `Mentor with id: ${id} updated`,
      data: {
        mentorUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
