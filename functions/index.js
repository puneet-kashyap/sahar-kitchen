const functions = require('firebase-functions');
const admin = require('firebase-admin');
const email = require('./email');

admin.initializeApp(functions.config().firebase);

const recipientEmailIDs = [
  functions.config().email.recipient1,
  functions.config().email.recipient2
];

exports.sendReservationsInfo = functions.firestore
  .document('/Reservations/{order}')
  .onCreate((snap, context) => {
    console.log('Reservation Entry added');
    const original = snap.data();
    console.log('Values', original);
    email.sendReservationEmail(recipientEmailIDs, original);
  });

exports.sendOrderInfo = functions.firestore
  .document('/Orders/{order}')
  .onCreate((snap, context) => {
    console.log('Order Entry added');
    const original = snap.data();
    console.log('Values', original);
    email.sendOrderEmail(functions.config().email.id, original);
  });
