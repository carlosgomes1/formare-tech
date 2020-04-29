const Consultor = require('../models/Consultor');

module.exports = {
    async store(req, res) {
        const { nome, senha } = req.body;

        let consultor = await Consultor.findOne({ nome });

        if (consultor && senha !== consultor.senha) {
            return res.status(401).json({ error: 'Senha inválida' });
        }

        if (!consultor) {
            if (senha.length < 4) {
                return res
                    .status(400)
                    .json({ error: 'A senha deve ter no mínimo 5 letras' });
            }

            consultor = await Consultor.create({
                nome,
                senha,
            });

            return res.status(200).json({ message: 'User criado com sucesso' });
        }

        return res.status(200).json({ message: 'Login sucesso!' });
    },

    async index(req, res) {
        const { nome } = req.params;
        const consultor = await Consultor.findOne({ nome });

        if (consultor) {
            return res.status(200).json({ isConsultor: 'OK' });
        }

        return res.status(400).json({ isConsultor: 'No' });
    },
};
