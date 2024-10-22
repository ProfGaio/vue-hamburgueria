const mongoose = require('../db/conecta')
const {Schema} = mongoose

const Queijo = mongoose.model( 'Queijo',
new Schema({
    sku: {type: String, required: true},
    descricao: {type: String, required: true}},
    {timestamps:true}
))

module.exports = Queijo