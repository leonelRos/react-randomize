//import express, axios, cors, path
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

//we call the app
const app = express();

//calling express middleware cors
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public")));
//we create the route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/user", (req, res) => {
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Content-Type", "Application/JSON");
  var origin = req.get("Origin");
  var allowedOrigins = ["http://localhost:3000", "http://localhost:8080"];
  if (allowedOrigins.indexOf(origin) > -1) {
    res.set("Access-Control-Allow-Headers", origin);
    //we are getting the API url
    axios
      .get("https://randomuser.me/api/?page=1&results=10")
      .then((response) => {
        //data is what we want from the url
        res.send(response.data);
      });
  }
});

//where we want our applciation to listen port
app.listen(3000, () => {
  console.log("server started on port 3000");
});
