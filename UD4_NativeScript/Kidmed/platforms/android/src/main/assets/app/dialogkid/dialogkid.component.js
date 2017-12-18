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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9na2lkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpYWxvZ2tpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQXlEO0FBQ3pELGlEQUFnRDtBQVNoRDtJQUtJLDRCQUFvQixNQUF5QixFQUFVLElBQVU7UUFBN0MsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzdELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFNLG1CQUFtQixHQUEwQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2xHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxrQ0FBSyxHQUFMLFVBQU0sTUFBYztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBaEJRLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzt5Q0FNOEIsd0NBQWlCLEVBQWdCLFdBQUk7T0FMeEQsa0JBQWtCLENBa0I5QjtJQUFELHlCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQge1RleHRGaWVsZH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFwcC1kaWFsb2draWRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9kaWFsb2draWQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2RpYWxvZ2tpZC5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2draWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb21wdDogc3RyaW5nO1xuICAgIG5vbWJyZTogc3RyaW5nO1xuICAgIG5hY2ltaWVudG86IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgICAgIHRoaXMucHJvbXB0ID0gcGFyYW1zLmNvbnRleHQucHJvbXB0TXNnO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdCBuYWNpbWllbnRvVGV4dGZpZWxkOiBUZXh0RmllbGQgPSA8VGV4dEZpZWxkPiB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJuYWNpbWllbnRvVGV4dEZpZWxkSWRcIik7XG4gICAgICAgIG5hY2ltaWVudG9UZXh0ZmllbGQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBjbG9zZShyZXN1bHQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHRoaXMubm9tYnJlLCB0aGlzLm5hY2ltaWVudG8pO1xuICAgIH1cblxufVxuIl19