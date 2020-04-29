const { usuariosOnline } = require('../websocket');

module.exports = {
    async index(req, res) {
        return res.json(usuariosOnline());
    },
};
