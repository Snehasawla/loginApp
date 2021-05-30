const express = require('express');
const mongoose = require('mongoose');
const {Schema} = require('express')
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect('mongodb+srv://code123:code123@cluster0.uicvz.mongodb.net/practice1', { useNewUrlParser: true, useUnifiedTopology: true});

const userschema = {
    name: String,
    email: String,
    contact: Number,
    password: String
}

const User = mongoose.model("User", userschema);

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/index.html')
});

app.post('/',(req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: req.body.password
    });
    user.save();
    res.redirect('/');
});


app.listen(3000, ()=> {
    console.log("App Listening to 3000")
})
