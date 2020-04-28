const mongoose = require('mongoose')
// mongodb+srv://victortorres-dev:victor1026*@kodertavo-9de4q.mongodb.net/test?retryWrites=true&w=majority

const user = 'victortorres-dev'
const password = 'victor1026*'
const host = 'kodertavo-9de4q.mongodb.net'
const bdName = 'kodemia'
const url = `mongodb+srv://${user}:${password}@${host}/${bdName}?retryWrites=true&w=majority`

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 2
  },
  generation: {
    type: Number,
    required: true,
    min: 1
  },
  gender: {
    type: String,
    enum: ['m', 'f', 'n']
  }
//   isActive: {
//     type: Date,
//     required: true,
//     dafault: new Date()
//   },
//   date: {
//     type: Date,
//     required: true,
//     dafault: new Date()
//   },
//   extra: {
//     type: Object
//   }

})

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Se conectó')
    const Koder = mongoose.model('koders', koderSchema)
    // koder.find({ generation: 7 })
    //   .then((koders) => {
    //     console.log(koders)
    //   })
    //   .catch((err) => {
    //     console.log('Error en la consulta: ', err)
    //   })
    //   .finally(() => {
    //     console.log('Finalizó la consulta')
    //   })
    // console.log('data', koder)

    // const newKoder = new Koder({ name: 'nuevo koder 2', generation: 7, gender: 'm' })

    // Otra forma de crear
    Koder.create({ name: 'nuevo koder short cut', generation: 7, gender: 'm' })
    // Validar si existe
    // newKoder.validate()
    // newKoder.save()
      .then((result) => {
        console.log('CREATED New Koder')
      })
      .catch((err) => {
        console.log('CREATED New Koder', err)
      })
      .finally(() => {
        console.log('Finalizó el Created')
      })
  })
  .catch((err) => {
    console.log('No se conectó', err)
  })
  .finally(() => {
    console.log('Finalizó el proceso de conexión')
  })
