//import express, axios, cors
const express = require('express');
const axios = require('axios');
const cors = require('cors')

//we call the app
const app = express();

//calling express middleware cors
app.use(cors())
//we create the route
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/user', (req, res) => {
    //we are getting the API url
    axios.get('https://randomuser.me/api/?page=1&results=10')
        .then(response => {
            //data is what we want from the url
            res.send(response.data);
        });
});

//where we want our applciation to listen port
app.listen(3000, () => {
    console.log('server started on port 3000');
});