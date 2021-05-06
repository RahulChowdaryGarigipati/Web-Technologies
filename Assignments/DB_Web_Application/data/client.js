const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const Users=require('./models/schema');

app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydatabase',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post('/Users', function(req,res){
    console.log("Name:" + JSON.stringify(new Date(req.body.name)));

    Users.find({"name":  req.body.name}, function(err, Users){console.log(Users)
        res.render('display',{
            usersList:Users
        })
    });
});

app.get('/form', function(req,res){
    res.render('form.ejs');
})

app.listen(5000, function(){
    console.log('Server Is Running');
});