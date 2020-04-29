const express = require('express')
const koders = require('../usecases/koders')

const router = express.Router()

// GET /koders/
router.get('/', async (req, res) => {
  try {
    const allKoders = await koders.getAll()
    res.json({
      message: 'All koders',
      data: {
        koders: allKoders
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', async (req, res) => {
  // const errorObject = {}
  try {
    // formas de acceder al error
    // let { name, generation, email, password } = req.body
    // if (!name) {
    //   errorObject.name = 'non xxx'
    // }
    // // si el objeto ya no tiene ninguna key, significa que ya no hay errores
    // if (Object.entries(errorObject).length !== 0) {
    //   throw new Error('REquest malformed')
    // }

    const createKoder = await koders.create(req.body)
    res.json({
      message: 'Koder created',
      data: {
        koders: createKoder
      }
    })
  } catch (error) {
    res.status(400)
    const errorsArray = Object.entries(error.errors)
      .map((entry) => {
        const [key, value] = entry
        return { [key]: value.message }
      })
    res.json({
      success: false,
      error: error.message,
      errors: errorsArray
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderDeleted = await koders.deleteById(id)
    response.json({
      success: true,
      message: `koder whith id ${id} deleted`,
      data: {
        koder: koderDeleted
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

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    // Implementar el caso de uso
    const koderUpdate = await koders.updateById(id, request.body)
    response.json({
      success: true,
      message: `koder with id: ${id} updated`,
      data: {
        koderUpdate
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
