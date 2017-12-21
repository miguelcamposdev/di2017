"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var page_1 = require("tns-core-modules/ui/page");
var DialogkidComponent = (function () {
    function DialogkidComponent(params, page) {
        this.params = params;
        this.page = page;
        this.prompt = params.context.promptMsg;
    }
    DialogkidComponent.prototype.ngOnInit = function () {
        var nacimientoTextfield = this.page.getViewById("nacimientoTextFieldId");
        nacimientoTextfield.focus();
    };
    DialogkidComponent.prototype.close = function (result) {
        this.params.closeCallback(this.nombre, this.nacimiento);
    };
    DialogkidComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-dialogkid",
            templateUrl: "./dialogkid.component.html",
            styleUrls: ["./dialogkid.component.scss"]
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.ModalDialogParams, page_1.Page])
    ], DialogkidComponent);
    return DialogkidComponent;
}());
exports.DialogkidComponent = DialogkidComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9na2lkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpYWxvZ2tpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQXlEO0FBQ3pELGlEQUFnRDtBQVNoRDtJQUtJLDRCQUFvQixNQUF5QixFQUFVLElBQVU7UUFBN0MsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzdELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFNLG1CQUFtQixHQUEwQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2xHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxrQ0FBSyxHQUFMLFVBQU0sTUFBYztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBaEJRLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzt5Q0FNOEIsd0NBQWlCLEVBQWdCLFdBQUk7T0FMeEQsa0JBQWtCLENBa0I5QjtJQUFELHlCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhcHAtZGlhbG9na2lkXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZGlhbG9na2lkLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9kaWFsb2draWQuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9na2lkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm9tcHQ6IHN0cmluZztcbiAgICBub21icmU6IHN0cmluZztcbiAgICBuYWNpbWllbnRvOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgICAgICB0aGlzLnByb21wdCA9IHBhcmFtcy5jb250ZXh0LnByb21wdE1zZztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc3QgbmFjaW1pZW50b1RleHRmaWVsZDogVGV4dEZpZWxkID0gPFRleHRGaWVsZD4gdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwibmFjaW1pZW50b1RleHRGaWVsZElkXCIpO1xuICAgICAgICBuYWNpbWllbnRvVGV4dGZpZWxkLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgY2xvc2UocmVzdWx0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh0aGlzLm5vbWJyZSwgdGhpcy5uYWNpbWllbnRvKTtcbiAgICB9XG5cbn1cbiJdfQ==