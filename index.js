const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world!')
})

// declare a current timestamp in variable
const currentDateTime = new Date();

app.post('/date-time', (req, res) => {
    // console.log(req.body);
    let reqData = req.body;

    // To create a txt file
    fs.writeFile(`${reqData.filename}`, `${currentDateTime}`, (err) => {
        if (err) throw err;
    })
    res.json('File created!')
})


app.listen(3333);