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
