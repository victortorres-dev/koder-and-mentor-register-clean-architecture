const Koder = require('../models/koders')

// los casos de uso son las acciones que puede ejercer un usuario en el sistema

// function getAll () {
//   // Esto no deberia de hacer: (no debe hacerse por el asincronismo)
//   // let todos = null
//   // return todos
// //   Koder.find()
// //     .then(koders => {
// //       return koders
// //     })
// //     .catch()
// }

async function getAll () {
  const allKoders = await Koder.find()
  return allKoders
}

async function create (koderData) {
  const koderCreated = await Koder.create(koderData)
  return koderCreated
}

// Una funcion asincrona regresa una promesa
// getAll()
//   .then((koders) => {
//     console.log('koders: ', koders)
//   }).catch((err) => {
//     console.log(err)
//   })

module.exports = {
  getAll,
  create
}
