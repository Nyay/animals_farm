import express from 'express';
import cors from 'cors';
import Chance from 'chance';

const chance = new Chance();

const app = express();
app.use( cors() );
app.use( express.json() );

const animals = [...Array(200).keys()].map(( key ) => ({
    id: key,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
}));

app.get('/getAnimal', (req, res) => {
    const q = req.query.q?.toLowerCase() || '';
    const result = animals.filter(( value ) => value.type.toLowerCase().includes( q ));

    res.send(result);
})

app.listen(8080, () => console.log('Listening on http://localhost:8080'));
