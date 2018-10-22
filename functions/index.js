const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sendEmail = require("./email");

admin.initializeApp(functions.config().firebase);

const recipientEmailIDs = [
    functions.config().email.recipient1,
    functions.config().email.recipient2
]

exports.sendReservationsInfo = functions.firestore
  .document("/Reservations/{order}")
  .onCreate((snap, context) => {
    console.log("New Entry added");
    const original = snap.data();
    console.log("Values", original);
    sendEmail(recipientEmailIDs, original);
  });
