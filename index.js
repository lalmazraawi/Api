const express = require('express');
const bodyParser = require('body-parser');
const cats = require('./cats');
const { getAllCats, getCatsByOrigin, getOriginsById, getCatsByBreed,
getBreedsById, getAllHairs, getHairsById, getAllTemperaments, getTemperamentsById, saveNewCats} = require('./controller/cats');
const app = express();

app.get('/', getAllCats);

app.get('/:origin', getCatsByOrigin );

app.get('/origins/:id', getOriginsById)

app.get('/breeds', getCatsByBreed)

app.get('/breeds/:id', getBreedsById)

app.get('/hairs', getAllHairs)

app.get('/hairs/:id', getHairsById)

app.get('/temperaments', getAllTemperaments)

app.get('/temperaments/:id', getTemperamentsById)


app.post('/', bodyParser.json(), saveNewCats);



app.listen(1338, () => {
    console.log('Listening on port 1338...'); // eslint-diasble-line-no-console
})