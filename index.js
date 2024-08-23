// require - senasis node. atsinaujiname su import
import express from 'express';
import { servicesData } from './data/servicesData';

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

app.get('/services/:serviceName/members/:memberName', (req, res) => {
    if (servicesData.includes(req.params.serviceName)) {
        return res.send(`Paslaugos "${req.params.serviceName}" nariu saras...`)
    }
    return res.send('Services page: such service is not recognized...');
})

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

app.get('/services/team', (req, res) => {
    return res.send('Team page: Team page');
})

app.get('/sale', (req, res) => {
    return res.send('Sales page');
})

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