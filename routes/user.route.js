const { registerUser, loginUser } = require('../controller/user.controller');

const router  = require('express').Router();

router.post('/registerUser',registerUser);
router.post('/loginUser',loginUser)

module.exports=router;