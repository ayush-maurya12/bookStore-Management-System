import express from 'express'
import {Student} from '../models/student.js'
import bcrypt from 'bcrypt';
import { verifyAdmin } from './auth.js';
const router=express.Router();

router.post('/register',verifyAdmin,async(req,res)=>{
    try{
        const{username,password,rollno,grade}=req.body;
        const student=await Student.findOne({username})
        if(student){
            return res.json({messege:"stdudent is registered"})
        }
        const hashpassword=await bcrypt.hash(password,10)
        const newstudent=new Student({
            username,
            password:hashpassword,
            rollno:rollno,
            grade
        })
        await newstudent.save()
        return res.json({registred:true})
    }catch(err){
        return res.json({messege:"Error in registring student"})

    }
})

router.get('/students',async(req,res)=>{
    try{
        const student= await Student.find()
        return res.json(student)
    }catch(err){
        return res.json(err)
    }
})

router.delete('/student/:id',async(req,res)=>{
    const id=req.params.id;
    try{
        const students=await Student.findByIdAndDelete({_id:id})
        return res.json({deleted:true,students})
    }catch(err){
        return res.json(err)
    }   
})
router.get('/student/:id',async(req,res)=>{
    const id=req.params.id;
    try{
        const student=await Student.findById({_id:id})
        return res.json(student)
    }catch(err){
        return res.json(err)
    }
}
)

router.put('/student/:id',async(req,res)=>{
    const id=req.params.id;
    try{
        const updatestudent=await Student.findByIdAndUpdate({_id:id},req.body)
        return res.json({updated:true,updatestudent})
    }catch(err){
        return res.json(err)
    }
}
)

export {router as studentRouter}