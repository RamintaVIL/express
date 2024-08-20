// require - sanasis node. atsinaujiname su import
import express from 'express';

//inicijuoja app
const app = express();
const port = 3000;

// req ir res - trumpiniai 
// nepamirsti prisirasyti return 
app.get('/', (request, response) => {
    return response.send('Labas rytas, Lietuva');
})

app.get('/about', (req, res) => {
    return res.send('Nori sužinoti apie šį projektą?');
})

app.get('*', (req, res) => {
    return res.send('nooo');
})

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
});