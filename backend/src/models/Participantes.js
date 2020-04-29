const mongoose = require('mongoose');

const ParticipantesSchema = new mongoose.Schema({
    nome: String,
});

module.exports = mongoose.model('Participantes', ParticipantesSchema);
