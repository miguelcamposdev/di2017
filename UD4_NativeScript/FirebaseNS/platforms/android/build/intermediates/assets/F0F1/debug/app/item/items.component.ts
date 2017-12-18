import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import {firestore} from 'nativescript-plugin-firebase';
const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    db: any;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        firebase.init({
            persist: false
        }).then(() => {
            console.log("Firebase initialized");
        });

        const citiesCollection = firestore.collection("jugadores");

        citiesCollection.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
        });
    }

    public getItems(): void {

    }

    leerDatos() {
        this.getItems();
    }
}