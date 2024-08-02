const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'zoila.corkery@ethereal.email',
    pass: '7UYUEzUgQTyeMx4V5'
  }
});

const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'maharshpatel1803@gmail.com',
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = sendEmail;
