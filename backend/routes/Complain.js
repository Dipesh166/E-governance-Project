
const express = require('express')
const router = express.Router();

const complainDB = require('../models/Complain')


router.post('/',async (req,res)=>{
    console.log(req.body)
    try{
        await complainDB.create({
            complainName:req.body.complainName,
            complainUrl:req.body.complainUrl

        }).then(()=>{
            res.status(201).send({
                status:true,
                message:"Complain added successfully"
            })
        }).catch((err)=>{
            res.status(400).send({
                status:false,
                message:"Bad Request"
            })
        })

    }catch(e){
        res.status(500).send({
            status:false,
            message:"While adding Complaints"
        })

    }

})

module.exports = router