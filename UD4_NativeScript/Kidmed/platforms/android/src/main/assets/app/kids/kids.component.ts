import { Component, OnInit, ViewContainerRef } from "@angular/core";
import {fromObject as observableFromObject, Observable } from "data/observable";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { firestore } from "nativescript-plugin-firebase";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DialogkidComponent } from "../dialogkid/dialogkid.component";
import { Kid } from "../models/Kid";
import { KidsService } from "../services/kids.service";

@Component({
  moduleId: module.id,
  selector: "app-kids",
  templateUrl: "kids.component.html",
  styleUrls: ["kids.component.scss"]
})
export class KidsComponent implements OnInit {
    kids: ObservableArray<Observable> = new ObservableArray([]);
    // kids: Array<Kid> = new Array();

    constructor(private kidsService: KidsService,
                private modalService: ModalDialogService,
                private viewContainerRef: ViewContainerRef) { }

    ngOnInit() {
      this.kidsService.getKids().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              console.log(doc.id, " => ", doc.data().nombre);
              const newKid = new Kid(doc.id, doc.data().nombre, doc.data().nacimiento);
              const index = this.kids.push(observableFromObject(newKid));

              const sanFranciscoDocument = firestore.collection("kids").doc(doc.id);

              const nosuscribe = sanFranciscoDocument.onSnapshot((docChange) => {
                  if (docChange.exists) {
                      console.log("Document data:", JSON.stringify(docChange.data()) + `${index}`);
                      const changeKid = new Kid(docChange.id, docChange.data().nombre, docChange.data().nacimiento);
                      this.kids.splice(index - 1, 1, observableFromObject(changeKid));
                  } else {
                      console.log("No such document!");
                  }
          });
      });
  });

      const kidsDocument = firestore.collection("kids").doc("/");

      const unsubscribe = kidsDocument.onSnapshot((docChange) => {
            const newKid = new Kid(docChange.id, docChange.data().nombre, docChange.data().nacimiento);
            const index = this.kids.push(observableFromObject(newKid));
      });
}

    showNewKidDialog() {
        console.log('open modal');
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef
        };

        this.modalService.showModal(DialogkidComponent, options).then(
        (...result) => console.log("Resultado: " + result[0] + result[1])
        );
    }
}
