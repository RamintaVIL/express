// require - senasis node. atsinaujiname su import
import express from 'express';
import { students } from './data/students.js';
import { servicesRouter } from './router/servicesRouter.js';

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

app.use('/services', servicesRouter);
app.use('/team', teamRouter);
app.use('/students', studentsRouter);
app.use('/books', booksRouter);
app.use('/phones', phonesRouter);




app.get('/students', (req, res) => {
    // const names = [];
    // for (const key in students) {
    //     names.push(students[key].name)
    // }
    // const names = Object.keys(students).map(s => s.toLowerCase());

    // is objektio i masyva konvertuojasi info
    // console.log(Object.values(students));

    // const names = Object.keys(students).map(key => students[key].name)

    const names = Object.values(students).map(student => student.name);
    // const str = names.join(', ');
    if (names.length === 0) {
        return res.send(`Mokosi ${names.length} studentai: niekas.`)
    }

    if (names.length === 1) {
        return res.send(`Mokosi ${names.length} studentai: ${names[0]}.`)
    }
    const str = names.slice(0, -1).join(', ') + ' ir ' + names.at(-1)
    return res.send(`Mokosi ${names.length} studentai: ${str}.`)
});

app.get('/students/:name', (req, res) => {
    const name = req.params.name.toLowerCase()
    let student = null;

    for (const key in students) {
        if (key.toLowerCase() === name) {
            student = students[key];
            break;
        }
    }
    if (student) {
        return res.send(`Studentas, vardu ${student.name} yra ${student.age} metu amziaus ir ${student.IsMaried ? 'yra' : 'nera'} vedes`)
    } else {
        return res.send(`Studento, vardu ${req.params.name} nera...`)
    }
})

app.get('/books', (req, res) => {
    return res.send('GET: books')
})

app.post('/books', (req, res) => {
    return res.send('POST: books')
})
app.put('/books', (req, res) => {
    return res.send('PUT: books')
})
app.delete('/books', (req, res) => {
    return res.send('DELETE: books')
})

app.route('/phones')
    .get((req, res) => {
        return res.send('GET: phones');
    })
    .post((req, res) => {
        return res.send('POST: phones');
    })
    .put((req, res) => {
        return res.send('PUT: phones');
    })
    .delete((req, res) => {
        return res.send('DELETE: phones');
    })


// app.get('/sal/*-sale', (req, res) => {
//     return res.send('Midseason Sales page');
// })

// * turi buti paskutinis, nes  kitu etveju jis butu pirmas, ir grazintas tik jorezultatas esantis puslapyje
app.get('*', (req, res) => {
    return res.send('Ups... 404 page 🦟');
})

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
});

// students:
// Mokosi 4 studentai: Jonas, Maryte, Petras ir Ona.Jonas

// students/jonas
// students / jonas
// students / JoNas
// students / JONAS
// Studentas, vardu Jonas yra 99 metu amziaus ir yra vedes.

// sprendimas:
