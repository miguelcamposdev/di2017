"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase_common_1 = require("nativescript-plugin-firebase/firebase-common");
var nativescript_plugin_firebase_1 = require("nativescript-plugin-firebase");
var EquiposService = (function () {
    function EquiposService() {
        firebase_common_1.firebase.init({
            persist: false
        });
    }
    EquiposService.prototype.getEquipos = function () {
        var equiposCollection = nativescript_plugin_firebase_1.firestore.collection("equipos");
        equiposCollection.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id + " => " + JSON.stringify(doc.data()));
            });
        });
    };
    EquiposService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], EquiposService);
    return EquiposService;
}());
exports.EquiposService = EquiposService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBvcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXF1aXBvcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLGdGQUFzRTtBQUN0RSw2RUFBdUQ7QUFHdkQ7SUFFRTtRQUNJLDBCQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1YsT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxJQUFNLGlCQUFpQixHQUFHLHdDQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTFELGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLGFBQWE7WUFDdEMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUksR0FBRyxDQUFDLEVBQUUsWUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBRyxDQUFDLENBQUM7WUFDOUQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFoQlUsY0FBYztRQUQxQixpQkFBVSxFQUFFOztPQUNBLGNBQWMsQ0FvQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ZmlyZWJhc2V9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvZmlyZWJhc2UtY29tbW9uJztcbmltcG9ydCB7ZmlyZXN0b3JlfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVxdWlwb3NTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgICAgIHBlcnNpc3Q6IGZhbHNlXG4gICAgICB9KTtcbiAgfVxuXG4gIGdldEVxdWlwb3MoKTogYW55IHtcbiAgICAgIGNvbnN0IGVxdWlwb3NDb2xsZWN0aW9uID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJlcXVpcG9zXCIpO1xuXG4gICAgICBlcXVpcG9zQ29sbGVjdGlvbi5nZXQoKS50aGVuKHF1ZXJ5U25hcHNob3QgPT4ge1xuICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtkb2MuaWR9ID0+ICR7SlNPTi5zdHJpbmdpZnkoZG9jLmRhdGEoKSl9YCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG5cblxufVxuIl19