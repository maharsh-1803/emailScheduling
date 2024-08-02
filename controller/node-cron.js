const cron = require('node-cron');
const sendEmail = require('./emailService');

const scheduleEmail = (emailData) => {
  const { to, subject, text, schedule } = emailData;

  cron.schedule(schedule, () => {
    sendEmail(to, subject, text);
  });
};

module.exports = scheduleEmail;
