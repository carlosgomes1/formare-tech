const Mensagens = require('../models/Mensagens');

module.exports = {
    async index(req, res) {
        const { nome } = req.query;

        const data = await Mensagens.find({ nome });
        return res.status(200).json(data);
    },
};
