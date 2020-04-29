const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const routes = require('./routes');

const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(
    'mongodb+srv://admin:admin@caco-v4vjh.mongodb.net/formare?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333, () => {
    console.log('listening on port 3333');
});
