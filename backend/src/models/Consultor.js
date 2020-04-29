const mongoose = require('mongoose');

const ConsultorSchema = new mongoose.Schema({
    nome: String,
    senha: String,
});

module.exports = mongoose.model('Consultor', ConsultorSchema);
