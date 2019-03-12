const express = require('express');
const registerModel = require('../models/register.model');
const app = express();
// console.log("Register");
const register = function(req , res) {
    console.log("Register");
    
    var myobj = req.body;
    console.log(myobj);
    registerModel.insertMany(myobj , function(err,res) {
      if(err) throw err;
      else {
        console.log("Register sucessfull");
      }
    })
    res
    .status(200)
    .send({
    "sucess" : "register sucessfully"
  });
}

module.exports = {
    register : register
}