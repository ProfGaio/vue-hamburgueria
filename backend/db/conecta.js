const mongoose = require('mongoose')

async function main(){
    await 
    mongoose.connect('mongodb://localhost:27017/hamburgueria')
    console.log("Conectado ao MongoDB")
}

main().catch((erro)=>console.log(erro))

module.exports = mongoose
