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
    marks.push(req.body.mark);

    return res.json({
        state: 'success',
        message: 'Pazymys pridedas'
    });
});

apiRouter.delete('/my-marks/:index', (req, res) => {
    const { index } = req.params;
    const position = parseFloat(index);

    if (!Number.isInteger(position) || position < 0) {
        return res.json({
            state: 'error',
            message: 'Pazymys turi buti ne neigiamas sveikasis skaicius'
        });
    };

    if (marks.length === 0) {
        return res.json({
            state: 'error',
            message: 'Pazymiu sarasas jau yra tuscias'
        });
    }

    if (position >= marks.length) {
        return res.json({
            state: 'error',
            message: `Pasilinti pazymio indexas negali virsyti ribos (riba: ${marks.length - 1}).`
        });
    }

    marks.splice(position, 1);

    return res.json({
        state: 'success',
        message: 'Pazymys pasalintas'
    });
});

// /my-marks/:index/:newMark
// /my-marks -> {index: 0, newMark: 10}
// /my-marks/:index -> {newMark: 10}
apiRouter.put('/my-marks/:index', (req, res) => {
    const { index } = req.params;
    const position = parseFloat(index);
    const newMarkValue = req.body.newMark;


    if (!Number.isInteger(position) || position < 0) {
        return res.json({
            state: 'error',
            message: 'Pazymio pozicija (index) turi buti ne neigiamas sveikasis skaicius'
        });
    };

    if (marks.length === 0) {
        return res.json({
            state: 'error',
            message: 'Pazymiu sarasas jau yra tuscias, nera ko redaguoti'
        });
    }
    if (position >= marks.length) {
        return res.json({
            state: 'error',
            message: `redaguoti pazymio indexas negali virsyti ribos (riba: ${marks.length - 1}).`
        });
    }

    marks[position] = newMarkValue;

    return res.json({
        state: 'success',
        message: 'Pazymys paredaguotas',
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



