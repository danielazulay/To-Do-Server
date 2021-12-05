const jwt = require('express-jwt')

function headExtract(req,res){

    if(!req.headers.authorization){

        throw new Error('falha')
    }

    return req.headers.authorization.split(" ")[1]
}

module.exports = jwt({
    userProperty:"user",
    secret:process.env.TOKEN_SIGN_SECRET,
    getToken:headExtract,
    algorithms:["HS256"]
})