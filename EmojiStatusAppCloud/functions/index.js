const functions = require("firebase-functions");

// Firebase Admin SDK to access Cloud Firestore
const admin = require("firebase-admin");
admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("My favourite emoji is \u{1F923}");
});

exports.addUserToFireStore = functions.auth.user().onCreate((user) => {
// This code runs everytime a new user is created
  const usersRef = admin.firestore().collection("users");
  return usersRef.doc(user.uid).set({
    displayName: user.displayName,
    emojis: "\u{1F636}\u{1F99D}",
  });
});
