import express from 'express';

// Initializations
const app = express();

// Settings
app.set('port', 8000);

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(app.get('port'), () => {
    console.log(`Server on post: \n http://localhost:${app.get('port')}`)
})