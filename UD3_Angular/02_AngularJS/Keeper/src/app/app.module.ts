import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NotaListadoComponent } from './nota-listado/nota-listado.component';
import { NotaComponent } from './nota/nota.component';
import { CategoriaListadoComponent } from './categoria-listado/categoria-listado.component';
import {Route, RouterModule} from '@angular/router';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const rutas: Route[] = [
  {path: '', component: NotaListadoComponent},
  {path: 'notas', component: NotaListadoComponent},
  {path: 'categorias', component: CategoriaListadoComponent},
  {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NotaListadoComponent,
    NotaComponent,
    CategoriaListadoComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
