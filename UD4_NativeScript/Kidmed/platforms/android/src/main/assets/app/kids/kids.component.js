"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_1 = require("data/observable");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_plugin_firebase_1 = require("nativescript-plugin-firebase");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var dialogkid_component_1 = require("../dialogkid/dialogkid.component");
var Kid_1 = require("../models/Kid");
var kids_service_1 = require("../services/kids.service");
var KidsComponent = (function () {
    // kids: Array<Kid> = new Array();
    function KidsComponent(kidsService, modalService, viewContainerRef) {
        this.kidsService = kidsService;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.kids = new observable_array_1.ObservableArray([]);
    }
    KidsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kidsService.getKids().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id, " => ", doc.data().nombre);
                var newKid = new Kid_1.Kid(doc.id, doc.data().nombre, doc.data().nacimiento);
                var index = _this.kids.push(observable_1.fromObject(newKid));
                var sanFranciscoDocument = nativescript_plugin_firebase_1.firestore.collection("kids").doc(doc.id);
                var nosuscribe = sanFranciscoDocument.onSnapshot(function (docChange) {
                    if (docChange.exists) {
                        console.log("Document data:", JSON.stringify(docChange.data()) + ("" + index));
                        var changeKid = new Kid_1.Kid(docChange.id, docChange.data().nombre, docChange.data().nacimiento);
                        _this.kids.splice(index - 1, 1, observable_1.fromObject(changeKid));
                    }
                    else {
                        console.log("No such document!");
                    }
                });
            });
        });
        var kidsDocument = nativescript_plugin_firebase_1.firestore.collection("kids").doc("/");
        var unsubscribe = kidsDocument.onSnapshot(function (docChange) {
            var newKid = new Kid_1.Kid(docChange.id, docChange.data().nombre, docChange.data().nacimiento);
            var index = _this.kids.push(observable_1.fromObject(newKid));
        });
    };
    KidsComponent.prototype.showNewKidDialog = function () {
        // console.log('open modal');
        var options = {
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(dialogkid_component_1.DialogkidComponent, options).then(function () {
            var result = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                result[_i] = arguments[_i];
            }
            console.log("Resultado: " + result[0] + result[1]);
            // this.kids.push(observableFromObject(new Kid("1", result[0], result[1])));
        });
    };
    KidsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-kids",
            templateUrl: "kids.component.html",
            styleUrls: ["kids.component.scss"]
        }),
        __metadata("design:paramtypes", [kids_service_1.KidsService,
            nativescript_angular_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], KidsComponent);
    return KidsComponent;
}());
exports.KidsComponent = KidsComponent;
