'use strict'

const {Profile,Member} = require('../models/index')

class Controller{
    static Home(req,res){
        res.render('home')
    }

    static SignUp(req,res){
        res.render('signup')
    }

    static SignUpPost(req,res){
        const {email,password,role} = req.body
        const option = {
            email,
            password,
            role
        }
        // res.render('home')
    }
}

module.exports = Controller