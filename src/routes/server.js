const express = require('express')
// const koders = require('../usecases/koders') -> al implementar los routes, estos ya no deben ir aqui
const kodersRouter = require('../routes/koders')
const mentorsRouter = require('../routes/mentors')

const app = express()

app.use(express.json())

// montamos el router de koders
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)

// al implementar los routes, estos ya no deben ir aqui
// todos los recursos se escriben en plural
// app.get('/koders', async (request, response) => {
//   const allKoders = await koders.getAll()
//   response.json({
//     message: 'All koders',
//     data: {
//       koders: allKoders
//     }
//   })
// })

// mismo reurso -> router koders
// GET /koders
// POST /koder
// PATCH /koders/:id
// DELETE /koders/:id

// router se puede montar en la ruta que se desee
// router se monta /koders  o  /mentors
// GET / -> GET /koders
// POST / -> POST /koders

module.exports = app
