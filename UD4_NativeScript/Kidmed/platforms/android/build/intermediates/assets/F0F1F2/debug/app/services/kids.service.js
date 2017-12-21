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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2lkcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsia2lkcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLGdGQUF3RTtBQUV4RSw2RUFBeUQ7QUFJekQ7SUFFRTtRQUNJLDBCQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1YsT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFDSSxJQUFNLGNBQWMsR0FBRyx3Q0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRCxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBR2hDLENBQUM7SUFkVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7O09BQ0EsV0FBVyxDQWdCdkI7SUFBRCxrQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBmaXJlYmFzZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2ZpcmViYXNlLWNvbW1vblwiO1xuaW1wb3J0IHsgS2lkIH0gZnJvbSBcIi4uL21vZGVscy9LaWRcIjtcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XG5pbXBvcnQgUXVlcnlTbmFwc2hvdCA9IGZpcmVzdG9yZS5RdWVyeVNuYXBzaG90O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS2lkc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgZmlyZWJhc2UuaW5pdCh7XG4gICAgICAgICAgcGVyc2lzdDogZmFsc2VcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0S2lkcygpOiBQcm9taXNlPFF1ZXJ5U25hcHNob3Q+IHtcbiAgICAgIGNvbnN0IGtpZHNDb2xsZWN0aW9uID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJraWRzXCIpO1xuXG4gICAgICByZXR1cm4ga2lkc0NvbGxlY3Rpb24uZ2V0KCk7XG5cblxuICB9XG5cbn1cbiJdfQ==