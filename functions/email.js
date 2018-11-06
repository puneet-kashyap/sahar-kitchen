const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: functions.config().email.id,
    pass: functions.config().email.pass
  }
});

const extractOrder = order => {
  let result = '';
  order.forEach(x => {
    result =
      result +
      `
    Item name: ${x.name} <br/>
    Item price: $ ${x.price} <br/>
    Item quantity: ${x.quantity} <br/>
    Total item price: $ ${x.totalPrice} <br/> <br/>
    `;
  });
  return result;
};

const sendReservationEmail = (email, form) => {
  const mailOptions = {
    from: `Koh-i-Noor Restaurant<noreply@kohinoor-restaurant.ca>`,
    to: email,
    bcc: functions.config().email.id
  };

  mailOptions.subject = `New request from Koh-i-Noor Restaurant`;
  mailOptions.text = `
      Hey Koh-i-Noor!

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
};

const sendOrderEmail = (email, form) => {
  const mailOptions = {
    from: `Koh-i-Noor Restaurant<noreply@kohinoor-restaurant.ca>`,
    to: email,
    bcc: functions.config().email.id
  };
  mailOptions.subject = `New Order requested from Koh-i-Noor Restaurant`;
  mailOptions.html = `
      <h1>Hey Koh-i-Noor !</h1>

      <p>A user has placed an order on your website.
      Please check the details below to follow up:</p>

      <h4>
        Name:       ${form.name || ''}<br>
        Phone:      ${form.phone || ''}<br>
        Email:      ${form.email || ''}<br>
        Date:       ${new Date(form.date.toDate()).toDateString() || ''}<br>
        Time:       ${form.time || ''}<br>
        Total Price: $ ${form.grandTotalPrice || ''}<br>
        Comments:   ${form.comment || ''}<br><br>
        ${extractOrder(form.order)}
      </h4>

      <h5>Enjoy,</h5>
      <h2>Koh-i-Noor Restaurant.</h2>`;
  return mailTransport
    .sendMail(mailOptions)
    .then(() => {
      console.log('New booking email sent to:', email);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = {
  sendReservationEmail,
  sendOrderEmail
};
