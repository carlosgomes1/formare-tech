import socketio from 'socket.io-client';

const socket = socketio('http://localhost:3333', {
    autoConnect: false,
});

function connectSocket(nome) {
    socket.io.opts.query = {
        nome,
    };

    socket.connect();
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

function mensagensSocket(mensagensFunc) {
    socket.on('mensagensSocket', mensagensFunc);
}

function usersOnline(usersOnlineFunc) {
    socket.on('usersOnline', usersOnlineFunc);
}

export { disconnect, connectSocket, usersOnline, mensagensSocket };
