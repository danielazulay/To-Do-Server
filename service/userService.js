const bcrypt = require('bcryptjs')
const userModel = require('../model/userModel')
const jwt = require('jsonwebtoken')

class userService{

    constructor(user){

        this.name=user.name
        this.email=user.email
        this.password=user.password
    }


    async getUserModel(email){

        try{
            const user = await userModel.findOne({email:email})
            return user

        }catch(err){
console.log(err)

        }

    }


    hashPassword(text){

        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds)
        const passwordHashed = bcrypt.hashSync(text,salt)
        return passwordHashed
    }

    async create(){

        return userModel.create({
            name:this.name,
        email:this.email,
        passwordHash:this.hashPassword(this.password)
        }).then((rsp)=>rsp)
    }


    async login(){

const user = await this.getUserModel(this.email)

if(!user){
    throw new Error('erro ao logar')
}

if( bcrypt.compare(this.password,user.passwordHash)){

    const token = this.genToken(user)

    return {token:token,user:user}

}


    }


    genToken(user){

        const secret = process.env.TOKEN_SIGN_SECRET
        delete user.passwordHash

        const token = jwt.sign(user.toJSON(),secret,{expiresIn:'6h'})
        return token
    }
}

module.exports = userService