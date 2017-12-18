"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Equipo_1 = require("../models/Equipo");
var equipos_service_1 = require("../services/equipos.service");
var EquiposComponent = (function () {
    function EquiposComponent(equiposService) {
        this.equiposService = equiposService;
        this.equipos = new Array();
    }
    EquiposComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.equiposService.getEquipos().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                var nuevoEquipo = new Equipo_1.Equipo(doc.id, doc.data().nombre, doc.data().logotipo, doc.data().valoracion);
                _this.equipos.push(nuevoEquipo);
                console.log(doc.id + " => " + JSON.stringify(doc.data()));
            });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBvcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcXVpcG9zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwyQ0FBd0M7QUFDeEMsK0RBQTJEO0FBUTNEO0lBR0UsMEJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsYUFBYTtZQUMvQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQkFDckIsSUFBTSxXQUFXLEdBQUcsSUFBSSxlQUFNLENBQzFCLEdBQUcsQ0FBQyxFQUFFLEVBQ04sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFDakIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFDbkIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FDeEIsQ0FBQztnQkFFRixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBSSxHQUFHLENBQUMsRUFBRSxZQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFHLENBQUMsQ0FBQztZQUM5RCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXRCVSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBSW9DLGdDQUFjO09BSHZDLGdCQUFnQixDQXdCNUI7SUFBRCx1QkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0VxdWlwb30gZnJvbSAnLi4vbW9kZWxzL0VxdWlwbyc7XG5pbXBvcnQge0VxdWlwb3NTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9lcXVpcG9zLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZXF1aXBvcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9lcXVpcG9zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXF1aXBvcy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVxdWlwb3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBlcXVpcG9zOiBBcnJheTxFcXVpcG8+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXF1aXBvc1NlcnZpY2U6IEVxdWlwb3NTZXJ2aWNlKSB7XG4gICAgdGhpcy5lcXVpcG9zID0gbmV3IEFycmF5KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVxdWlwb3NTZXJ2aWNlLmdldEVxdWlwb3MoKS50aGVuKHF1ZXJ5U25hcHNob3QgPT4ge1xuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51ZXZvRXF1aXBvID0gbmV3IEVxdWlwbyhcbiAgICAgICAgICAgICAgICBkb2MuaWQsXG4gICAgICAgICAgICAgICAgZG9jLmRhdGEoKS5ub21icmUsXG4gICAgICAgICAgICAgICAgZG9jLmRhdGEoKS5sb2dvdGlwbyxcbiAgICAgICAgICAgICAgICBkb2MuZGF0YSgpLnZhbG9yYWNpb25cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMuZXF1aXBvcy5wdXNoKG51ZXZvRXF1aXBvKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7ZG9jLmlkfSA9PiAke0pTT04uc3RyaW5naWZ5KGRvYy5kYXRhKCkpfWApO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=