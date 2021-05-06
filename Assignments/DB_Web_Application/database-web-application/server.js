const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/mydatabase',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const usersSchema = {
    "name": String,
    "email": String,
    "phno": String,
    "dateofbirth": Date
}

const Users = mongoose.model('Users', usersSchema);

app.get('/', (req,res)=> {
    Users.find({}, function(err,users) {
        res.render('index', {
            usersList: users
        })
    })
    });

app.listen(4000, function(){
    console.log('server is running');
})