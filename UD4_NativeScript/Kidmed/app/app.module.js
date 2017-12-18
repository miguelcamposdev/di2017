"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var nativescript_angular_1 = require("nativescript-angular");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var dialogkid_component_1 = require("./dialogkid/dialogkid.component");
var kids_component_1 = require("./kids/kids.component");
var kids_service_1 = require("./services/kids.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                nativescript_angular_1.NativeScriptFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                kids_component_1.KidsComponent,
                dialogkid_component_1.DialogkidComponent
            ],
            entryComponents: [
                dialogkid_component_1.DialogkidComponent
            ],
            providers: [
                { provide: core_1.NgModuleFactoryLoader, useClass: router_1.NSModuleFactoryLoader },
                kids_service_1.KidsService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
