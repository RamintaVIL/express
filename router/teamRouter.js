import express from 'express';

export const teamRouter = express.Router();

teamRouter.get('/', (req, res) => {
    return res.send('Team page');
})

// app.get('/team/chuck', (req, res) => {
//     return res.send('Team member page: Chuck');
// })

teamRouter.get('/:name', (req, res) => {
    const members = ['Chuck', 'lolo', 'prime'];
    if (members.includes(req.params.name)) {
        return res.send(`Team member: "${req.params.name}" all info about this members`);
    }
    return res.send(`Team member "${req.params.name}" page not found`);
})