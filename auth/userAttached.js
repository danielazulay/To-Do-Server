const userModel = require('../model/userModel')

module.exports = async(req,res,next)=>{

    try{

        const logado = req.user

        const user = await userModel.findOne({_id:logado._id},{passwordHash:0,_v:0})
        if(!user){
            return res.status(400).json({error:'erro no token'})
        }

        req.logado = user

        return next()


    }catch(err){
        console.log(err)
    }
}