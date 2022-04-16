const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//controller import

const todoApi = require('./src/routes/todo.route');
//controller import


const PORT = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use('', todoApi);


app.listen(PORT, () => {
    console.log("port 5000 is listening!");
})