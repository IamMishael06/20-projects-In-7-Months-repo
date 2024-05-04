const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");


const app = express();

const PORT = 3000

// set my public files
app.use(express.static('public'));

// Use the registration system


app.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`)
})