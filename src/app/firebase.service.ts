import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
  config = {
    apiKey: "AIzaSyCbFzEgQzl4cKq-8pKK8oO8iQg5J0mQR9U",
    projectId: "sahar-kitchen",
    databaseURL: "https://sahar-kitchen.firebaseio.com",
  };
  app = firebase.initializeApp(this.config);
  db = firebase.firestore();

  writeToDatabase(collection, dataObj) {
    this.db.collection(collection).add(dataObj)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      }).catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
}
