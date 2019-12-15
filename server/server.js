require('./config/config');


const express = require('express')
const mongoose = require('mongoose');
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'))



mongoose.connect(process.env.URLBD, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(`DB Connection Error: ${ err.message }`);
    });


app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto', 3000);
})