const sendEmail = require('./emailService');

const scheduleEmail = (emailData) => {
  const { to, subject, text, schedule } = emailData;

  setTimeout(() => {
    sendEmail(to, subject, text);
  }, schedule * 1000); // Convert seconds to milliseconds
};

module.exports = scheduleEmail;

