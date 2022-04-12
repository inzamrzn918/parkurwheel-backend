const express = require("express");
const bycript = require('bcryptjs')
const {comparePassword, hashPassword}  = require('../utils/passwordUtils');
const bcryptjs = require("bcryptjs");
const router = express.Router()

let salt;
bycript.genSalt(10,(err,st)=>{
    salt = st
})

router
.post('/', (req,res)=>{
    let username = req.body.username    
    let password = req.body.password

    res.status(200).send({
        "success":true,
        "message":"Logged In Successful",
        "status":201,
        "data": req.body
    })

})
.post('/create-account', async (req,res)=>{
    let name = req.body.name
    let email  = req.body.email
    let mobile = req.body.mobile
    const salt = await bycript.genSalt(10);
    const passHash = await bycript.hash(req.body.password, salt);
    

    res.status(201).send({
        "success":true,
        "message":"Account created",
        "status":201,
        "data": {
            "name" : name,
            "email":email,
            "mobile":mobile,
            "password": passHash
        }
    })

})


module.exports = router