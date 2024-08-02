const { registerUser } = require('../controller/user.controller');

const router  = require('express').Router();

router.post('/registerUser',registerUser);

module.exports=router;