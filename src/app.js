// Servidor
import express from 'express';
import { __dirname } from './utils.js';
import { Server } from 'socket.io';
import { v4 as uuid } from 'uuid';

// Initializations
const notes = []
const app = express();

// Settings
app.set('port', 8000);

app.use(express.static(__dirname + '/public'));

const server = app.listen(app.get('port'), () => {
    console.log(`Server on post: \n http://localhost:${app.get('port')}`);
})

const io = new Server(server);

io.on('connection', (socket) => {
    console.log('Nueva conexion', socket.id);

    socket.emit('server:loadnotes', notes);
    socket.on('client:newnote', (newNote) => {
        const note = { ...newNote, id: uuid() };
        notes.push(note);
        socket.emit('server:newnote', note)//Referencia a guardar una nueva nota
    })
})


