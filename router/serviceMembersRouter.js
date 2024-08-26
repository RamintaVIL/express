import express from 'express';
import { servicesData } from '../data/servicesData.js';
import { members } from '../data/members.js';

export const serviceMembersRouter = express.Router({ mergeParams: true })

// darome is uzrasu praktiskai
serviceMembersRouter.get('/', (req, res) => {
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

serviceMembersRouter.get('/memberName', (req, res) => {
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