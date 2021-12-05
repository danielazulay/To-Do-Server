const router = require('express').Router()
const projectModel = require('../model/projectModel')
const isAuth = require('../auth/isAuth')
const userAttached = require('../auth/userAttached')

router.post('/newProject',isAuth,userAttached,async(req,res)=>{

    try{


        const resposta =await  projectModel.create({...req.body,ownerProject:req.logado})

        return res.status(201).json(resposta)



    }catch(err){
        console.log(err)
    }
})
router.get('/allproject',isAuth,userAttached,async(req,res)=>{

    try{


        const resposta =await  projectModel.find({ownerProject:req.logado}).populate('tasks')

        return res.status(201).json(resposta)



    }catch(err){
        console.log(err)
    }
})

router.put('/editproject/:id',isAuth,userAttached,async(req,res)=>{

    try{


        const resposta =await  projectModel.findOneAndUpdate({_id:req.params.id},{...req.body},{new:true})
        
        return res.status(201).json(resposta)



    }catch(err){
        console.log(err)
    }
})

router.delete('/deleteproject/:id',isAuth,userAttached,async(req,res)=>{

    try{


        const resposta =await  projectModel.deleteOne({_id:req.params.id})

        return res.status(201).json({})



    }catch(err){
        console.log(err)
    }
})



module.exports = router