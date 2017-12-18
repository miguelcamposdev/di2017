import { Injectable } from '@angular/core';
import {firebase, QuerySnapshot} from 'nativescript-plugin-firebase/firebase-common';
import {firestore} from 'nativescript-plugin-firebase';

@Injectable()
export class JugadoresService {

  constructor() {
      firebase.init({
          persist: false
      }).then(() => {
          console.log("Firebase initialized");
      });
  }

  getJugadores(): Promise<QuerySnapshot> {
      const citiesCollection = firestore.collection("jugadores");
      return citiesCollection.get();
  }

}
