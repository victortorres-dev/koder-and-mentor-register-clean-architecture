const mongoose = require('mongoose')

const DB_USER = 'victortorres-dev'
const DB_PASSWORD = ''
const DB_HOST = 'kodertavo-9de4q.mongodb.net'
const DB_NAME = 'kodemia'
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect () { // esta funcion regresa una promesa, es necesario ocupar el await en db.connect
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

// no es recomendable exportar a connect de forma directa -> del otro lado
// const db = require(...db.js), se llamaria asi db()
// usar un objeto es mejor:
module.exports = {
  connect
}
