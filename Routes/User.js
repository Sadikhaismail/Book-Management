const express = require ('express')
const useController = require ('../Controllers/userController')
const router = express.Router()




router.post('/adduser',useController.first)


module.exports = router