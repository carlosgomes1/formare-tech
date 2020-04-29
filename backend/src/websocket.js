/* eslint-disable no-shadow */
const socketio = require('socket.io');

let io;

const connections = [];

exports.setupWebSocket = (server) => {
    io = socketio(server);

    io.on('connection', (socket) => {
        const { nome } = socket.handshake.query;

        connections.push({
            id: socket.id,
            nome,
        });

        this.sendMessage(
            this.usuariosOnline(),
            'usersOnline',
            this.usuariosOnline()
        );

        socket.on('disconnect', () => {
            const index = connections.findIndex(
                (index) => index.id === socket.id
            );
            connections.splice(index, 1);
            this.sendMessage(
                this.usuariosOnline(),
                'usersOnline',
                this.usuariosOnline()
            );
        });
    });
};

exports.sendMessage = (to, message, data) => {
    to.forEach((connection) => {
        io.to(connection.id).emit(message, data);
    });
};

exports.usuariosOnline = () => {
    return connections;
};
