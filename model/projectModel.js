const mongoose = require('mongoose')

const projectModel = new mongoose.Schema({

    title:{type:String},
    created:{type:Date,default:new Date()},
    ownerProject:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    tasks:[{type:mongoose.Schema.Types.ObjectId,ref:'task'}]
})

module.exports= mongoose.model('project',projectModel)