const router = require('express').Router()
const userService = require('../service/userService')

router.post('/new',async(req,res)=>{

    try{

        const UserService = new userService(req.body)

        const resposta = await UserService.create()
  
        return res.status(201).json(resposta)

    }catch(err){

        console.log(err)
    }
})


router.post('/login',async(req,res)=>{

    try{

        const UserService = new userService(req.body)

        const resposta = await UserService.login()
console.log(resposta)
        return res.status(200).json(resposta)

    }catch(err){

        console.log(err)
    }
})
router.post('/user/:id',async(req,res)=>{

    try{

        const resposta =await  taskModel.findOne({_id:req.params._id})
        return res.status(200).json(resposta)

    }catch(err){

        console.log(err)
    }
})



module.exports = router