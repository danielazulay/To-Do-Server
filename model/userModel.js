const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    passwordHash:{type:String}
})

module.exports = mongoose.model('user',userModel)