const mongoose = require('mongoose')

function conectTODb(){
    return mongoose.connect(process.env.MONGO,{
        UseNewUrlParser:true,
        UseUnifiedTopology:true,
    })
}

module.exports = conectTODb