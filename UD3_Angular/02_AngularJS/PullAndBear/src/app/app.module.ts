import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ListadoArticulosComponent } from './listado-articulos/listado-articulos.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    ListadoArticulosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
