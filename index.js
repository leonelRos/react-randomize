//import express
const express = require('express');
//we call the app
const app = express();

//wecreate the route
app.get('/', (req, res) => {
    res.send("Hello World")
})

//where we want our applciation to listen port
app.listen(3000, () => {
    console.log('server started on port 3000');
});