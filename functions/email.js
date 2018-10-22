const functions = require("firebase-functions");
const nodemailer = require('nodemailer');

var mailTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: functions.config().email.id,
      pass: functions.config().email.pass
    }
  });

  const sendEmail = (email, form) => {
    const mailOptions = {
      from: `Koh-i-Noor Restaurant<noreply@kohinoor-restaurant.ca>`,
      to: email,
      bcc: functions.config().email.id
    };
  
    mailOptions.subject = `New request from Koh-i-Noor Restaurant`;
    mailOptions.text = `
      Hey Kohinoor!

      A user has requested a reservation on your website.
      Please check the details below to follow up:

      Name:       ${form.name || ''}
      Phone:      ${form.phone || ''}
      Email:      ${form.email || ''}
      Date:       ${form.date.toDate() || ''}
      Time:       ${form.time || ''}
      Size:       ${form.partySize || ''}
      Comments:   ${form.comments || ''}

      Enjoy,
      Koh-i-Noor Restaurant.`;
    return mailTransport.sendMail(mailOptions).then(() => {
      console.log('New booking email sent to:', email);
    });
  }

  module.exports = sendEmail;