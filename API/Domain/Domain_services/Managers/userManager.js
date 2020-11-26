const express = require('express');
const User = require('../Models/userModel');
const Post = require('../Models/postModel');
const CryptPass = require('../Schemas_Services/userSchemaService');


module.exports = {
    getOne(req) {
        User.find().then(result => {
            console.log(result)
        })
    }
}

