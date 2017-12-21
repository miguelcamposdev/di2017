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
        console.log('open modal');
        var options = {
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(dialogkid_component_1.DialogkidComponent, options).then(function () {
            var result = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                result[_i] = arguments[_i];
            }
            return console.log("Resultado: " + result[0] + result[1]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2lkcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJraWRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSw4Q0FBZ0Y7QUFDaEYsNkRBQThFO0FBQzlFLDZFQUF5RDtBQUN6RCwyRUFBeUU7QUFDekUsd0VBQXNFO0FBQ3RFLHFDQUFvQztBQUNwQyx5REFBdUQ7QUFRdkQ7SUFFSSxrQ0FBa0M7SUFFbEMsdUJBQW9CLFdBQXdCLEVBQ3hCLFlBQWdDLEVBQ2hDLGdCQUFrQztRQUZsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUx0RCxTQUFJLEdBQWdDLElBQUksa0NBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUtGLENBQUM7SUFFM0QsZ0NBQVEsR0FBUjtRQUFBLGlCQTJCSDtRQTFCSyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLGFBQWE7WUFDMUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQyxJQUFNLE1BQU0sR0FBRyxJQUFJLFNBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN6RSxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUUzRCxJQUFNLG9CQUFvQixHQUFHLHdDQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRXRFLElBQU0sVUFBVSxHQUFHLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxVQUFDLFNBQVM7b0JBQ3pELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUcsS0FBRyxLQUFPLENBQUEsQ0FBQyxDQUFDO3dCQUM3RSxJQUFNLFNBQVMsR0FBRyxJQUFJLFNBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUM5RixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSx1QkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNwRSxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDckMsQ0FBQztnQkFDVCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFQyxJQUFNLFlBQVksR0FBRyx3Q0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0QsSUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFDLFNBQVM7WUFDaEQsSUFBTSxNQUFNLEdBQUcsSUFBSSxTQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzRixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVHLHdDQUFnQixHQUFoQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsSUFBTSxPQUFPLEdBQXVCO1lBQ2hDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDMUMsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHdDQUFrQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDN0Q7WUFBQyxnQkFBUztpQkFBVCxVQUFTLEVBQVQscUJBQVMsRUFBVCxJQUFTO2dCQUFULDJCQUFTOztZQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFsRCxDQUFrRCxDQUNoRSxDQUFDO0lBQ04sQ0FBQztJQTlDUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNuQyxDQUFDO3lDQUttQywwQkFBVztZQUNWLHlDQUFrQjtZQUNkLHVCQUFnQjtPQU43QyxhQUFhLENBK0N6QjtJQUFELG9CQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge2Zyb21PYmplY3QgYXMgb2JzZXJ2YWJsZUZyb21PYmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ09wdGlvbnMsIE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGlhbG9na2lkQ29tcG9uZW50IH0gZnJvbSBcIi4uL2RpYWxvZ2tpZC9kaWFsb2draWQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBLaWQgfSBmcm9tIFwiLi4vbW9kZWxzL0tpZFwiO1xuaW1wb3J0IHsgS2lkc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMva2lkcy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhcHAta2lkc1wiLFxuICB0ZW1wbGF0ZVVybDogXCJraWRzLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wia2lkcy5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBLaWRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBraWRzOiBPYnNlcnZhYmxlQXJyYXk8T2JzZXJ2YWJsZT4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcbiAgICAvLyBraWRzOiBBcnJheTxLaWQ+ID0gbmV3IEFycmF5KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGtpZHNTZXJ2aWNlOiBLaWRzU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMua2lkc1NlcnZpY2UuZ2V0S2lkcygpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuaWQsIFwiID0+IFwiLCBkb2MuZGF0YSgpLm5vbWJyZSk7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld0tpZCA9IG5ldyBLaWQoZG9jLmlkLCBkb2MuZGF0YSgpLm5vbWJyZSwgZG9jLmRhdGEoKS5uYWNpbWllbnRvKTtcbiAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmtpZHMucHVzaChvYnNlcnZhYmxlRnJvbU9iamVjdChuZXdLaWQpKTtcblxuICAgICAgICAgICAgICBjb25zdCBzYW5GcmFuY2lzY29Eb2N1bWVudCA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwia2lkc1wiKS5kb2MoZG9jLmlkKTtcblxuICAgICAgICAgICAgICBjb25zdCBub3N1c2NyaWJlID0gc2FuRnJhbmNpc2NvRG9jdW1lbnQub25TbmFwc2hvdCgoZG9jQ2hhbmdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoZG9jQ2hhbmdlLmV4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgZGF0YTpcIiwgSlNPTi5zdHJpbmdpZnkoZG9jQ2hhbmdlLmRhdGEoKSkgKyBgJHtpbmRleH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VLaWQgPSBuZXcgS2lkKGRvY0NoYW5nZS5pZCwgZG9jQ2hhbmdlLmRhdGEoKS5ub21icmUsIGRvY0NoYW5nZS5kYXRhKCkubmFjaW1pZW50byk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5raWRzLnNwbGljZShpbmRleCAtIDEsIDEsIG9ic2VydmFibGVGcm9tT2JqZWN0KGNoYW5nZUtpZCkpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggZG9jdW1lbnQhXCIpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH0pO1xuXG4gICAgICBjb25zdCBraWRzRG9jdW1lbnQgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcImtpZHNcIikuZG9jKFwiL1wiKTtcblxuICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBraWRzRG9jdW1lbnQub25TbmFwc2hvdCgoZG9jQ2hhbmdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdLaWQgPSBuZXcgS2lkKGRvY0NoYW5nZS5pZCwgZG9jQ2hhbmdlLmRhdGEoKS5ub21icmUsIGRvY0NoYW5nZS5kYXRhKCkubmFjaW1pZW50byk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMua2lkcy5wdXNoKG9ic2VydmFibGVGcm9tT2JqZWN0KG5ld0tpZCkpO1xuICAgICAgfSk7XG59XG5cbiAgICBzaG93TmV3S2lkRGlhbG9nKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb3BlbiBtb2RhbCcpO1xuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWZcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoRGlhbG9na2lkQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKFxuICAgICAgICAoLi4ucmVzdWx0KSA9PiBjb25zb2xlLmxvZyhcIlJlc3VsdGFkbzogXCIgKyByZXN1bHRbMF0gKyByZXN1bHRbMV0pXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19