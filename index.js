// require - senasis node. atsinaujiname su import
import express from 'express';
import { servicesRouter } from './router/servicesRouter.js';
import { teamRouter } from './router/teamRouter.js'
import { studentsRouter } from './router/studentsRouter.js';
import { booksRouter } from './router/booksRouter.js';
import { phonesRouter } from './router/phonesRouter.js';
import { apiRouter } from './router/apiRouter.js';

//inicijuoja app
const app = express();
const port = 3000;

// for parsing aplication/json
app.use(express.json({
    type: 'aplication/json',
}));
// for parsing aplication/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// req ir res - trumpiniai 
// nepamirsti prisirasyti return 
// '/' - nurodome kelia
app.get('/', (request, response) => {
    return response.send('Home page');
});

app.get('/about', (req, res) => {
    return res.send('About page');
});

app.get('/img', (req, res) => {
    return res.send('Images...');
});

app.get('/img/logo.png', (req, res) => {
    ; return res.send('Images: logo.png turinys...');
})

app.use('/api', apiRouter);
app.use('/services', servicesRouter);
app.use('/team', teamRouter);
app.use('/students', studentsRouter);
app.use('/books', booksRouter);
app.use('/phones', phonesRouter);


// * turi buti paskutinis, nes  kitu etveju jis butu pirmas, ir grazintas tik jorezultatas esantis puslapyje
app.get('*', (req, res) => {
    return res.send('Ups... 404 page 🦟');
});

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
});














