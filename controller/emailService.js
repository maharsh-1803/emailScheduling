const nodemailer = require('nodemailer');


// nodemailer setup
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email', // ethereal 
  port: 587,
  auth: {
    user: 'zoila.corkery@ethereal.email', // when you check you need to go to ethereal nodemail website and generate user for you at that time  and pass
    pass: '7UYUEzUgQTyeMx4V5' // when you check you need to go to ethereal nodemail website and generate pass for you at that time and pass
  }
  // when you check you might get error  Error: Invalid login: 535 Authentication failed but this error is not in my code this error in ethereal , you have to generate new user and pass may be error will solve 
  // you can get mail in ethereal mail box not in original mail id , we can you sendgrid for getting original mail 
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
