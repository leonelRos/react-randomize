//import express
const express = require('express');
// importing axios
const axios = require('axios');
//we call the app
const app = express();

//wecreate the route
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/users', (req, res) => {
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