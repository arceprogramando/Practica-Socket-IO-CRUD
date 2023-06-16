import express from 'express';
import { __dirname } from './utils.js';
import { Server } from 'socket.io'


// Initializations
const app = express();

// Settings
app.set('port', 8000);

app.use(express.static(__dirname + '/public'))

const server = app.listen(app.get('port'), () => {
    console.log(`Server on post: \n http://localhost:${app.get('port')}`)
})

const io = new Server(server)

io.on('connection', (socket) => {
    console.log('Nueva conexion', socket.id)

    socket.on('client:newnote', data => {
        console.log(data)
    })

})

