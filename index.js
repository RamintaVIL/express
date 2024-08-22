// require - sanasis node. atsinaujiname su import
import express from 'express';

//inicijuoja app
const app = express();
const port = 3000;

// req ir res - trumpiniai 
// nepamirsti prisirasyti return 
// '/' - nurodome kelia
app.get('/', (request, response) => {
    return response.send('Home page');
})

app.get('/about', (req, res) => {
    return res.send('About page');
})

app.get('/services', (req, res) => {
    return res.send('Services page');
})

app.get('/services/design', (req, res) => {
    return res.send('Services page: design');
})

app.get('/services/ux', (req, res) => {
    return res.send('Services page: UX');
})

app.get('/services/coding', (req, res) => {
    return res.send('Services page: Programming');
})

app.get('/services/hacking', (req, res) => {
    return res.send('Services page: Hacking');
})

app.get('/services/*', (req, res) => {
    return res.send('Services page: such service is not recognized...');
})

app.get('/services/team', (req, res) => {
    return res.send('Team page: Team page');
})

app.get('/sale', (req, res) => {
    return res.send('Sales page');
})

app.get('/team', (req, res) => {
    return res.send('Team page');
})

app.get('/team/chuck', (req, res) => {
    return res.send('Team member page: Chuck');
})

app.get('/team/:name', (req, res) => {
    return res.send(`Team member "${req.params.name}" page not found`);
})


// app.get('/sal/*-sale', (req, res) => {
//     return res.send('Midseason Sales page');
// })

// * turi buti paskutine, nes  kitu etveju jis butu pirmas, ir grazintas tik jorezultatas esantis puslapyje
app.get('*', (req, res) => {
    return res.send('Ups... 404 page 🦟');
})

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
});