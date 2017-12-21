import { Injectable } from "@angular/core";
import { firebase } from "nativescript-plugin-firebase/firebase-common";
import { Kid } from "../models/Kid";
import { firestore } from "nativescript-plugin-firebase";
import QuerySnapshot = firestore.QuerySnapshot;

@Injectable()
export class KidsService {

  constructor() {
      firebase.init({
          persist: false
      });
  }

  getKids(): Promise<QuerySnapshot> {
      const kidsCollection = firestore.collection("kids");

      return kidsCollection.get();


  }

}
