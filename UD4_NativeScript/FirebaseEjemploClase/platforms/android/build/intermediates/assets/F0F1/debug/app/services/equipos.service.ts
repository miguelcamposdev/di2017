import { Injectable } from '@angular/core';
import {firebase} from 'nativescript-plugin-firebase/firebase-common';
import {firestore} from 'nativescript-plugin-firebase';

@Injectable()
export class EquiposService {

  constructor() {
      firebase.init({
          persist: false
      });
  }

  getEquipos(): any {
      const equiposCollection = firestore.collection("equipos");

      equiposCollection.get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
              console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
          });
      });
  }



}
