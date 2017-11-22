import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { EdicionComponent } from './usuarios/edicion/edicion.component';


@NgModule({
  declarations: [
    AppComponent,
    EdicionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
