// require - senasis node. atsinaujiname su import
import express from 'express';
import { servicesData } from './data/servicesData.js';
import { members } from './data/members.js';
import { students } from './data/students.js';

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

// paslaugu sarasas
app.get('/services', (req, res) => {
    return res.send('Services page');
})

// Like 4 routai (uzkomentuoti) nebeveiks, nes parametrizuotas reikalas esantis :serviceName, pagauna visus kitus atvejus.
// Jei norime kazka individualiai daryti su zemiau esanciomis services paslaugomis tai iskelti ji po Servisec page.

app.get('/services/:serviceName', (req, res) => {
    if (servicesData.includes(req.params.serviceName)) {
        return res.send(`About "${req.params.serviceName}" service...`)
    }
    return res.send('Services page: such service is not recognized...');
})

// darome is uzrasu praktiskai
app.get('/services/:serviceName/members', (req, res) => {
    if (servicesData.includes(req.params.serviceName)) {
        return res.send(`Paslaugos "${req.params.serviceName}" nariu saras...`)
    }
    return res.send('Services page: such service is not recognized...');
})

// member name uzrasymo pvz:
// app.get('/services/:serviceName/members/:memberName', (req, res) => {
//     const serviceName = req.params.serviceName;
//     const memberName = req.params.memberName;

//     const response1 = `Paslaugos "${serviceName}" nario "${memberName}" informacija...`;
//     const response2 = `Paslaugoje "${serviceName}" nario "${memberName}" nepavyko rastis...`;
//     const response3 = 'Services page: such service is not recognized...';

//     if (servicesData.includes(serviceName)) {
//         if (members.includes(memberName)) {
//             return res.send(response1)
//         }
//         return res.send(response2)
//     }
//     return res.send(response3);
// })

// kitas pvz, naudojame neigini:

// app.get('/services/:serviceName/members/:memberName', (req, res) => {
//     const serviceName = req.params.serviceName;
//     const memberName = req.params.memberName;

//     const response1 = `Paslaugos "${serviceName}" nario "${memberName}" informacija...`;
//     const response2 = `Paslaugoje "${serviceName}" nario "${memberName}" nepavyko rastis...`;
//     const response3 = 'Services page: such service is not recognized...';

//     if (!servicesData.includes(serviceName)) {
//         return res.send(response3);
//     }
//     if (!members.includes(memberName)) {
//         return res.send(response2)
//     }

//     return res.send(response1)
// });

app.get('/services/:serviceName/members/:memberName', (req, res) => {
    // destrukturizavimas ivyksta
    const { serviceName, memberName } = req.params;

    if (!servicesData.includes(serviceName)) {
        return res.send('Services page: such service is not recognized...');
    }

    if (!members.includes(memberName)) {
        return res.send(`Paslaugoje "${serviceName}" nario "${memberName}" nepavyko rastis...`)
    }

    return res.send(`Paslaugos "${serviceName}" nario "${memberName}" informacija...`)
});


// app.get('/services/design', (req, res) => {
//     return res.send('Services page: design');
// })

// app.get('/services/ux', (req, res) => {
//     return res.send('Services page: UX');
// })

// app.get('/services/coding', (req, res) => {
//     return res.send('Services page: Programming');
// })

// app.get('/services/hacking', (req, res) => {
//     return res.send('Services page: Hacking');
// })

// app.get('/services/*', (req, res) => {
//     return res.send('Services page: such service is not recognized...');
// })

app.get('/team', (req, res) => {
    return res.send('Team page');
})

// app.get('/team/chuck', (req, res) => {
//     return res.send('Team member page: Chuck');
// })

app.get('/team/:name', (req, res) => {
    const members = ['Chuck', 'lolo', 'prime']
    if (members.includes(req.params.name)) {
        return res.send(`Team member "${req.params.name}" all info about members`);
    }
    return res.send(`Team member "${req.params.name}" page not found`);
})

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
