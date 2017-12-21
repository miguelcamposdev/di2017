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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2lkcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJraWRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSw4Q0FBZ0Y7QUFDaEYsNkRBQThFO0FBQzlFLDZFQUF5RDtBQUN6RCwyRUFBeUU7QUFDekUsd0VBQXNFO0FBQ3RFLHFDQUFvQztBQUNwQyx5REFBdUQ7QUFRdkQ7SUFFSSxrQ0FBa0M7SUFFbEMsdUJBQW9CLFdBQXdCLEVBQ3hCLFlBQWdDLEVBQ2hDLGdCQUFrQztRQUZsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUx0RCxTQUFJLEdBQWdDLElBQUksa0NBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUtGLENBQUM7SUFFM0QsZ0NBQVEsR0FBUjtRQUFBLGlCQTJCSDtRQTFCSyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLGFBQWE7WUFDMUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQyxJQUFNLE1BQU0sR0FBRyxJQUFJLFNBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN6RSxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUUzRCxJQUFNLG9CQUFvQixHQUFHLHdDQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRXRFLElBQU0sVUFBVSxHQUFHLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxVQUFDLFNBQVM7b0JBQ3pELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUcsS0FBRyxLQUFPLENBQUEsQ0FBQyxDQUFDO3dCQUM3RSxJQUFNLFNBQVMsR0FBRyxJQUFJLFNBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUM5RixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSx1QkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNwRSxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDckMsQ0FBQztnQkFDVCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFQyxJQUFNLFlBQVksR0FBRyx3Q0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0QsSUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFDLFNBQVM7WUFDaEQsSUFBTSxNQUFNLEdBQUcsSUFBSSxTQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzRixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVHLHdDQUFnQixHQUFoQjtRQUNJLDZCQUE2QjtRQUM3QixJQUFNLE9BQU8sR0FBdUI7WUFDaEMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUMxQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsd0NBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM3RDtZQUFDLGdCQUFTO2lCQUFULFVBQVMsRUFBVCxxQkFBUyxFQUFULElBQVM7Z0JBQVQsMkJBQVM7O1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELDRFQUE0RTtRQUNoRixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFoRFEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDbkMsQ0FBQzt5Q0FLbUMsMEJBQVc7WUFDVix5Q0FBa0I7WUFDZCx1QkFBZ0I7T0FON0MsYUFBYSxDQWlEekI7SUFBRCxvQkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtmcm9tT2JqZWN0IGFzIG9ic2VydmFibGVGcm9tT2JqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERpYWxvZ2tpZENvbXBvbmVudCB9IGZyb20gXCIuLi9kaWFsb2draWQvZGlhbG9na2lkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgS2lkIH0gZnJvbSBcIi4uL21vZGVscy9LaWRcIjtcbmltcG9ydCB7IEtpZHNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2tpZHMuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYXBwLWtpZHNcIixcbiAgdGVtcGxhdGVVcmw6IFwia2lkcy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcImtpZHMuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgS2lkc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAga2lkczogT2JzZXJ2YWJsZUFycmF5PE9ic2VydmFibGU+ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG4gICAgLy8ga2lkczogQXJyYXk8S2lkPiA9IG5ldyBBcnJheSgpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBraWRzU2VydmljZTogS2lkc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLmtpZHNTZXJ2aWNlLmdldEtpZHMoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKS5ub21icmUpO1xuICAgICAgICAgICAgICBjb25zdCBuZXdLaWQgPSBuZXcgS2lkKGRvYy5pZCwgZG9jLmRhdGEoKS5ub21icmUsIGRvYy5kYXRhKCkubmFjaW1pZW50byk7XG4gICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5raWRzLnB1c2gob2JzZXJ2YWJsZUZyb21PYmplY3QobmV3S2lkKSk7XG5cbiAgICAgICAgICAgICAgY29uc3Qgc2FuRnJhbmNpc2NvRG9jdW1lbnQgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcImtpZHNcIikuZG9jKGRvYy5pZCk7XG5cbiAgICAgICAgICAgICAgY29uc3Qgbm9zdXNjcmliZSA9IHNhbkZyYW5jaXNjb0RvY3VtZW50Lm9uU25hcHNob3QoKGRvY0NoYW5nZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGRvY0NoYW5nZS5leGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IGRhdGE6XCIsIEpTT04uc3RyaW5naWZ5KGRvY0NoYW5nZS5kYXRhKCkpICsgYCR7aW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlS2lkID0gbmV3IEtpZChkb2NDaGFuZ2UuaWQsIGRvY0NoYW5nZS5kYXRhKCkubm9tYnJlLCBkb2NDaGFuZ2UuZGF0YSgpLm5hY2ltaWVudG8pO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMua2lkcy5zcGxpY2UoaW5kZXggLSAxLCAxLCBvYnNlcnZhYmxlRnJvbU9iamVjdChjaGFuZ2VLaWQpKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9KTtcblxuICAgICAgY29uc3Qga2lkc0RvY3VtZW50ID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJraWRzXCIpLmRvYyhcIi9cIik7XG5cbiAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0ga2lkc0RvY3VtZW50Lm9uU25hcHNob3QoKGRvY0NoYW5nZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3S2lkID0gbmV3IEtpZChkb2NDaGFuZ2UuaWQsIGRvY0NoYW5nZS5kYXRhKCkubm9tYnJlLCBkb2NDaGFuZ2UuZGF0YSgpLm5hY2ltaWVudG8pO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmtpZHMucHVzaChvYnNlcnZhYmxlRnJvbU9iamVjdChuZXdLaWQpKTtcbiAgICAgIH0pO1xufVxuXG4gICAgc2hvd05ld0tpZERpYWxvZygpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29wZW4gbW9kYWwnKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKERpYWxvZ2tpZENvbXBvbmVudCwgb3B0aW9ucykudGhlbihcbiAgICAgICAgKC4uLnJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHRhZG86IFwiICsgcmVzdWx0WzBdICsgcmVzdWx0WzFdKTtcbiAgICAgICAgICAgIC8vIHRoaXMua2lkcy5wdXNoKG9ic2VydmFibGVGcm9tT2JqZWN0KG5ldyBLaWQoXCIxXCIsIHJlc3VsdFswXSwgcmVzdWx0WzFdKSkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=