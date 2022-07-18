const express = require('express');
const bodyParser = require('body-parser');
const cats = require('./cats');
const { getAllCats, getCatsByOrigin, saveNewCats} = require('./controller/cats');
const app = express();

app.get('/', getAllCats);


app.get('/:origin', getCatsByOrigin );




app.post('/', bodyParser.json(), saveNewCats);



app.listen(1338, () => {
    console.log('Listening on port 1338...'); // eslint-diasble-line-no-console
})