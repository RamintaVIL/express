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

apiRouter.get('/my-marks', (req, res) => {
    const marks = [];
    return res.json(marks);
});

apiRouter.get('/my-marks', (req, res) => {
    const marks = [10, 2, 8, 4, 6];
    return res.json(marks);
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



