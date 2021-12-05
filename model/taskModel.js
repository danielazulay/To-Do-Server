const mongoose = require('mongoose')

const taskModel = new mongoose.Schema({
name:{type:String},
createion:{type:Date,default:new Date()},
description:{type:String},
ownerTask:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
projectId:{type:mongoose.Schema.Types.ObjectId,ref:'project'}
})

module.exports = mongoose.model('task',taskModel)