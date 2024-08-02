const express = require('express');
const scheduleEmail = require('./scheduler');

const router = express.Router();

router.post('/schedule-email', (req, res) => {
  const emailData = req.body;

  try {
    scheduleEmail(emailData);
    res.status(200).send('Email scheduled successfully');
  } catch (error) {
    res.status(500).send('Error scheduling email');
  }
});

module.exports = router;
