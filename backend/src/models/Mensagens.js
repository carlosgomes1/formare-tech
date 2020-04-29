const mongoose = require('mongoose');

const MensagemSchema = new mongoose.Schema(
    {
        nome: String,
        mensagem: String,
        cor: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model('Mensagens', MensagemSchema);
