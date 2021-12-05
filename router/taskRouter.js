const router = require('express').Router()
const projectModel = require('../model/projectModel')
const taskModel = require('../model/taskModel')
const isAuth = require('../auth/isAuth')
const userAttached = require('../auth/userAttached')

router.post('/newTask/:id',isAuth,userAttached,async(req,res)=>{

    try{


        const resposta =await  taskModel.create({...req.body,ownerTask:req.logado,projectId:req.params.id})
        await projectModel.findByIdAndUpdate({_id:req.params.id},{$push:{tasks:resposta._id}},{new:true})
        return res.status(201).json(resposta)



    }catch(err){
        console.log(err)
    }
})


router.get('/gettask/:id',isAuth,userAttached,async(req,res)=>{

    try{


        const resposta =await  taskModel.findOne({_id:req.params.id})
        
        return res.status(201).json(resposta)



    }catch(err){
        console.log(err)
    }
})

router.put('/edittask/:id',isAuth,userAttached,async(req,res)=>{

    try{


        const resposta =await  taskModel.findOneAndUpdate({_id:req.params.id},{...req.body},{new:true})
        
        return res.status(201).json(resposta)



    }catch(err){
        console.log(err)
    }
})

router.get('/alltask',isAuth,userAttached,async(req,res)=>{

    try{


        const resposta =await  taskModel.find({ownerTask:req.logado})

        return res.status(201).json(resposta)



    }catch(err){
        console.log(err)
    }
})

router.delete('/deletetask/:id',isAuth,userAttached,async(req,res)=>{

    try{
const{id} =req.params

        const resposta =await  taskModel.deleteOne({_id:id})


        return res.status(201).json({})



    }catch(err){
        console.log(err)
    }
})


module.exports = router