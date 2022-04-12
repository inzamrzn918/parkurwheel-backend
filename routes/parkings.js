const express = require("express");
const router = express.Router()


router
.get('/',(req,res)=>{
    console.log(req.body)
    res.status(200).send({"message":"Request Executed","status":200, "success":true, "data":[]})
})
.post('/', (req,res)=>{
    res.status(200).send({"message":"Request Executed","status":200, "success":true, "data":[{"id":1,"name":"Inzamul"}]})
})


module.exports = router