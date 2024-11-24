// Servidor
import express from 'express';
import { __dirname } from './utils.js';
import { Server } from 'socket.io';
import { v4 as uuid } from 'uuid';

let notes = []
const app = express();

app.set('port', 8000);

app.use(express.static(__dirname + '/public'));

const server = app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}`);
})

const io = new Server(server);

io.on('connection', (socket) => {

    socket.emit('server:loadnotes', notes);

    socket.on('client:newnote', (newNote) => {
        const note = { ...newNote, id: uuid() };
        notes.push(note);
        io.emit('server:newnote', note)
    })

    socket.on('client:deletenote', (noteId) => {
        notes = notes.filter((note) => note.id !== noteId)
        io.emit('server:loadnotes', notes)
    })

    socket.on('client:getnote', noteId => {
        const note = notes.find(note => note.id === noteId);
        socket.emit('server:selectednote', note);
    })
    socket.on('server:selectednote', note => {
        const title = document.getElementById('title')
        const description = document.getElementById('description')

        title.value = note.title;
        description.value = note.description;
    })

    socket.on('client:updatenote', updatedNote => {
        notes = notes.map((note) => {
            if (note.id === updatedNote.id) {
                note.title = updatedNote.title;
                note.description = updatedNote.description;
            }
            return note;
        })
        socket.emit('server:loadnotes', notes);
    })
})


