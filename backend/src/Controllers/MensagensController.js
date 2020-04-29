const Mensagens = require('../models/Mensagens');
const { sendMessage, usuariosOnline } = require('../websocket');

module.exports = {
    async store(req, res) {
        const { mensagem, nome, cor } = req.body;

        const data = await Mensagens.create({
            nome,
            mensagem,
            cor,
        });

        sendMessage(usuariosOnline(), 'mensagensSocket', data);

        return res.status(200).json(data);
    },

    async index(req, res) {
        const mensagens = await Mensagens.find().limit(100);
        return res.json(mensagens);
    },

    async destroy(req, res) {
        const { _id } = req.params;

        await Mensagens.findOneAndDelete({ _id });

        const data = await Mensagens.find();

        return res.status(200).json(data);
    },
};
