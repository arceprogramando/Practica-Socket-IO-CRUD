import express from 'express';
import { __dirname } from './utils.js';

// Initializations
const app = express();

app.use(express.static(__dirname + '/public'))


// Settings
app.set('port', 8000);


app.listen(app.get('port'), () => {
    console.log(`Server on post: \n http://localhost:${app.get('port')}`)
})