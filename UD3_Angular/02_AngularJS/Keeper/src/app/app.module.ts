import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticuloComponent } from './admin/nota/nota.component';
import { NotaListadoComponent } from './admin/nota-listado/nota-listado.component';
import { CategoriaListadoComponent } from './admin/categoria-listado/categoria-listado.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NotasService} from './admin/servicios/notas.service';
import {CategoriasService} from './admin/servicios/categorias.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: '', component: NotaListadoComponent},
  {path: 'categorias', component: CategoriaListadoComponent},
  {path: '**', component: NotaListadoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    NotaListadoComponent,
    CategoriaListadoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [NotasService, CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
