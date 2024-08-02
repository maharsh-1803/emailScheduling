const { scheduleMail, getAllMailByUser, getMailDetailById, deleteScheduleMail } = require('../controller/mailSchedule.controller');
const authToken = require('../middleware/authUser');

const router = require('express').Router();

router.post('/scheduleMail',authToken,scheduleMail)
router.get('/AllMail',authToken,getAllMailByUser);
router.get('/mailDetail/:id',authToken,getMailDetailById)
router.delete('/deleteMail/:id',authToken,deleteScheduleMail);

module.exports=router;