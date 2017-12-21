import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {KidsComponent} from './kids/kids.component';

const routes: Routes = [
    { path: "", component: KidsComponent, pathMatch: "full" },
    { path: "tabs/:id", loadChildren: "./tabs/tabs.module#TabsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
