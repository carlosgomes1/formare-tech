const Participantes = require('../models/Participantes');

module.exports = {
    async index(req, res) {
        const data = await Participantes.find();

        return res.status(200).json(data);
    },
};
