"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase_common_1 = require("nativescript-plugin-firebase/firebase-common");
var nativescript_plugin_firebase_1 = require("nativescript-plugin-firebase");
var KidsService = (function () {
    function KidsService() {
        firebase_common_1.firebase.init({
            persist: false
        });
    }
    KidsService.prototype.getKids = function () {
        var kidsCollection = nativescript_plugin_firebase_1.firestore.collection("kids");
        return kidsCollection.get();
    };
    KidsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], KidsService);
    return KidsService;
}());
exports.KidsService = KidsService;
