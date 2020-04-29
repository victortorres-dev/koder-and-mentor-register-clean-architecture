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

function deleteById (id) {
  // no es necesario guardar una constante, ni declar async y await deboido a que regresa una operacion asicnrona; es decir regresa una promesa y l podemos esperar hasta que se cumpla y en routes se esper la respuesta con await
  return Koder.findByIdAndRemove(id)
}

function updateById (id, newKoderData) {
  return Koder.findByIdAndUpdate(id, newKoderData)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}
