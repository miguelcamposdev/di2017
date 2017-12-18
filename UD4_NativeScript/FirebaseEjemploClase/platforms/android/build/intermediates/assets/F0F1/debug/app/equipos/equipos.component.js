"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var equipos_service_1 = require("../services/equipos.service");
var EquiposComponent = (function () {
    function EquiposComponent(equiposService) {
        this.equiposService = equiposService;
    }
    EquiposComponent.prototype.ngOnInit = function () {
        this.equiposService.getEquipos();
    };
    EquiposComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-equipos',
            templateUrl: './equipos.component.html',
            styleUrls: ['./equipos.component.scss']
        }),
        __metadata("design:paramtypes", [equipos_service_1.EquiposService])
    ], EquiposComponent);
    return EquiposComponent;
}());
exports.EquiposComponent = EquiposComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBvcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcXVpcG9zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwrREFBMkQ7QUFRM0Q7SUFHRSwwQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBRWxELENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBVFUsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDO3lDQUlvQyxnQ0FBYztPQUh2QyxnQkFBZ0IsQ0FXNUI7SUFBRCx1QkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0VxdWlwb30gZnJvbSAnLi4vbW9kZWxzL0VxdWlwbyc7XG5pbXBvcnQge0VxdWlwb3NTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9lcXVpcG9zLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZXF1aXBvcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9lcXVpcG9zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXF1aXBvcy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVxdWlwb3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBlcXVpcG9zOiBBcnJheTxFcXVpcG8+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXF1aXBvc1NlcnZpY2U6IEVxdWlwb3NTZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXF1aXBvc1NlcnZpY2UuZ2V0RXF1aXBvcygpO1xuICB9XG5cbn1cbiJdfQ==