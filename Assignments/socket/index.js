const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


http.listen(3000, () => {
    console.log('listening on *:3000');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log(msg);
        //io.emit('chat message', msg);
        socket.broadcast.emit('chat message', msg);
    });
    socket.on("createGame", (msg) => {
        socket.join(msg.gameId);
        socket.emit("createGame", "Game Created");
    });
    socket.on("joinGame", (msg) => {
        socket.join(msg.gameId);
        io.emit("joinGame", "Game Joined");
    });
    socket.on("updateGame", (gameStatus) => {
        socket.broadcast.emit("updateGame", gameStatus);
    });
});