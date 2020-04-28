const express = require('express')
const koders = require('../usecases/koders')

const router = express.Router()

// GET /koders/
router.get('/', async (req, res) => {
  const allKoders = await koders.getAll()
  res.json({
    message: 'All koders',
    data: {
      koders: allKoders
    }
  })
})

router.post('/', async (req, res) => {
  const createKoder = await koders.create(req.body)
  res.json({
    message: 'Koder created',
    data: {
      koders: createKoder
    }
  })
})
// router.patch('/:id')
module.exports = router
