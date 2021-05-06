const mongoose = require('mongoose');

const usersSchema = {
    "name": String,
    "email": String,
    "phno": String,
    "dateofbirth": Date
}

const Users = mongoose.model('Users', usersSchema);

module.exports= Users