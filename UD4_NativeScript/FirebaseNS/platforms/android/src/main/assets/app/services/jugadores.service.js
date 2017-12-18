"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase_common_1 = require("nativescript-plugin-firebase/firebase-common");
var nativescript_plugin_firebase_1 = require("nativescript-plugin-firebase");
var JugadoresService = (function () {
    function JugadoresService() {
        firebase_common_1.firebase.init({
            persist: false
        }).then(function () {
            console.log("Firebase initialized");
        });
    }
    JugadoresService.prototype.getJugadores = function () {
        var citiesCollection = nativescript_plugin_firebase_1.firestore.collection("jugadores");
        return citiesCollection.get();
    };
    JugadoresService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], JugadoresService);
    return JugadoresService;
}());
exports.JugadoresService = JugadoresService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVnYWRvcmVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqdWdhZG9yZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxnRkFBcUY7QUFDckYsNkVBQXVEO0FBR3ZEO0lBRUU7UUFDSSwwQkFBUSxDQUFDLElBQUksQ0FBQztZQUNWLE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVksR0FBWjtRQUNJLElBQU0sZ0JBQWdCLEdBQUcsd0NBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFiVSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTs7T0FDQSxnQkFBZ0IsQ0FlNUI7SUFBRCx1QkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ZmlyZWJhc2UsIFF1ZXJ5U25hcHNob3R9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvZmlyZWJhc2UtY29tbW9uJztcbmltcG9ydCB7ZmlyZXN0b3JlfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEp1Z2Fkb3Jlc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgZmlyZWJhc2UuaW5pdCh7XG4gICAgICAgICAgcGVyc2lzdDogZmFsc2VcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgaW5pdGlhbGl6ZWRcIik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldEp1Z2Fkb3JlcygpOiBQcm9taXNlPFF1ZXJ5U25hcHNob3Q+IHtcbiAgICAgIGNvbnN0IGNpdGllc0NvbGxlY3Rpb24gPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcImp1Z2Fkb3Jlc1wiKTtcbiAgICAgIHJldHVybiBjaXRpZXNDb2xsZWN0aW9uLmdldCgpO1xuICB9XG5cbn1cbiJdfQ==