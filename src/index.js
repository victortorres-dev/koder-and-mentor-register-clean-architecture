const server = require('./routes/server')
const db = require('./lib/db')

async function main () {
  await db.connect()
  console.log('- DB CONNECTED -')
  server.listen(8082, () => {
    console.log('Server is running')
  })
}

main()
  .then((result) => {
    console.log('SErver ready')
  })
  .catch((err) => {
    console.log('Error', err)
  })
  .finally(() => {
    console.log('Finalizo la promesa')
  })
