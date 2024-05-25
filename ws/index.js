const WebSocketServer = require('ws');
const http = require('http');
const express = require('express');
const axios = require('axios');

const TRANSPORT_ADDRESS = 'https://95ed-195-19-60-234.ngrok-free.app';
const PORT = 9000;

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

const server = http.createServer(app);
const wsServer = new WebSocketServer.Server({ server });

wsServer.on('connection', client => {
    client.on('message', m => {
        const message = JSON.parse(m);
        const address = TRANSPORT_ADDRESS + '/api/v1/message'
        axios.post(address, message).then(() => client.send(JSON.stringify(message))).catch(() => {
            console.log('Транспортный уровень не найден')
          });
    });
    client.on('close', () => {
        wsServer.clients.delete(client);
    });
});

app.post('/receive', (req, res) => {
    wsServer.clients.forEach((client) => client.send(JSON.stringify(req.body)));
    res.sendStatus(200)
});

server.listen(PORT, () => {
    console.log(`ws-server has been started on ${PORT} port`);
});
