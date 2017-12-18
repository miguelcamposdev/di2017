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
        return equiposCollection.get();
    };
    EquiposService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], EquiposService);
    return EquiposService;
}());
exports.EquiposService = EquiposService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBvcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXF1aXBvcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLGdGQUFzRTtBQUN0RSw2RUFBdUQ7QUFJdkQ7SUFFRTtRQUNJLDBCQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1YsT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxJQUFNLGlCQUFpQixHQUFHLHdDQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBWFUsY0FBYztRQUQxQixpQkFBVSxFQUFFOztPQUNBLGNBQWMsQ0FlMUI7SUFBRCxxQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtmaXJlYmFzZX0gZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9maXJlYmFzZS1jb21tb24nO1xuaW1wb3J0IHtmaXJlc3RvcmV9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xuaW1wb3J0IFF1ZXJ5U25hcHNob3QgPSBmaXJlc3RvcmUuUXVlcnlTbmFwc2hvdDtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVxdWlwb3NTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgICAgIHBlcnNpc3Q6IGZhbHNlXG4gICAgICB9KTtcbiAgfVxuXG4gIGdldEVxdWlwb3MoKTogUHJvbWlzZTxRdWVyeVNuYXBzaG90PiB7XG4gICAgICBjb25zdCBlcXVpcG9zQ29sbGVjdGlvbiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwiZXF1aXBvc1wiKTtcbiAgICAgIHJldHVybiBlcXVpcG9zQ29sbGVjdGlvbi5nZXQoKTtcbiAgfVxuXG5cblxufVxuIl19