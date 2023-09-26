const app = require('../../startup.js')
const Personagens = require('../models/personagemModel.js')
const Atrativos = require('../models/atrativos.js')


app.get("/getAllStudents", (req, res) => {
    
   res.setHeader("Acess-Control-Allow-Origin", "*")

   

    res.json([
        pokemon.pegarInformacoes()
    ])
})

