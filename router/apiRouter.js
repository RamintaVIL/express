import express from 'express';

export const apiRouter = express.Router();

// GET: /api/
apiRouter.get('/', (req, res) => {
    const data = {
        state: 'error',
        message: 'Nurodyk konkretu API endpoint\'a',
    };
    // return res.json(data);
    return res.send(JSON.stringify(data));
});

const marks = [];

apiRouter.get('/my-marks', (req, res) => {
    return res.json(marks);
});

apiRouter.post('/my-marks', (req, res) => {
    marks.push(10)
    return res.json({
        state: 'success',
        message: 'Pazymys pridedas'
    });
});

// API - aplication programming interface
// RestAPI
// statefull API
// stateless API

// GET: /api//marks
// error: nes nenurodei studento vardo?

// GET: /api/marks/:studentName
// GET: /api/marks/Jonas
// []
// [10, 2]

// POST: /api/marks -> 10
// error, kurima studentui?

// POST: /api/marks -> {mark: 10, name: 'Jonas'}
// ok



