const express = require('express')
const Controller = require('../controllers/controller')
const authentication = require('../middlewares/authentication')
const router = express.Router()


router.get('/', Controller.root)

// register
router.post('/register', Controller.register)

// login
router.post('/login', Controller.login)

// authentication 
router.use(authentication)

// get news
router.get('/news', Controller.news)

// get news by id
router.get('/news/:id', Controller.newsById)

// change status
router.patch('/statusUser/:id', Controller.changeStatus)

module.exports = router