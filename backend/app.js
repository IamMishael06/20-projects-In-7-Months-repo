const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Tari:xxxxxxx@marsfood.h8q9aen.mongodb.net/?retryWrites=true&w=majority&appName=Marsfood';

const dbName = 'Marsfood'

const client = new MongoClient(uri);

const app = express();

const PORT = 3000


// set my public files
app.use(express.static('public'));


client.connect(async (err) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const usersCollection = db.collection('users');
// Use the registration system
app.post('/Login.html', async (req,res)=>{
    const {name, password, email, address} = req.body
    try{
        const userInfo = await usersCollection.insertOne({
            name,
            password,
            email,
            address
        })
        console.log('User data inserted:', result);
        res.redirect('')
    }catch (error) {
        console.error('Error saving user data to MongoDB:', error);
        res.status(500).send('Internal Server Error');
    }
    
})

})


app.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`)
})