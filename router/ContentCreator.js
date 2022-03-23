const express = require('express')
const router = express.Router()
const Controller = require('../controller/controller')



router.get('/', Controller.Home)

router.get('/signup', Controller.SignUp)    
router.post('/signup', Controller.SignUpPost)

module.exports = router