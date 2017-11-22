import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { NotaComponent } from './nota/nota.component';
import { AlumnoComponent } from './alumno/alumno.component';


@NgModule({
  declarations: [
    AppComponent,
    NotaComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
