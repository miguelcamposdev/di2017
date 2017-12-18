import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular";
import { Page } from "tns-core-modules/ui/page";
import {TextField} from 'tns-core-modules/ui/text-field';

@Component({
  moduleId: module.id,
  selector: "app-dialogkid",
  templateUrl: "./dialogkid.component.html",
  styleUrls: ["./dialogkid.component.scss"]
})
export class DialogkidComponent implements OnInit {
    prompt: string;
    nombre: string;
    nacimiento: string;

    constructor(private params: ModalDialogParams, private page: Page) {
        this.prompt = params.context.promptMsg;
    }

    ngOnInit() {
        const nacimientoTextfield: TextField = <TextField> this.page.getViewById("nacimientoTextFieldId");
        nacimientoTextfield.focus();
    }

    close(result: string) {
        this.params.closeCallback(this.nombre, this.nacimiento);
    }

}
