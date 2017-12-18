import { Injectable } from '@angular/core';
import {firebase} from 'nativescript-plugin-firebase/firebase-common';
import {firestore} from 'nativescript-plugin-firebase';
import QuerySnapshot = firestore.QuerySnapshot;

@Injectable()
export class EquiposService {

  constructor() {
      firebase.init({
          persist: false
      });
  }

  getEquipos(): Promise<QuerySnapshot> {
      const equiposCollection = firestore.collection("equipos");
      return equiposCollection.get();
  }



}
