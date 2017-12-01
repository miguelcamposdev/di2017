import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticuloComponent } from './components/nota/nota.component';
import { NotaListadoComponent } from './components/nota-listado/nota-listado.component';
import { CategoriaListadoComponent } from './components/categoria-listado/categoria-listado.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NotasService} from './services/notas.service';
import {CategoriasService} from './services/categorias.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { TopmenuComponent } from './shared/topmenu/topmenu.component';
import {AuthService} from './services/auth.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'notas', component: NotaListadoComponent},
  {path: 'categorias', component: CategoriaListadoComponent},
  {path: '**', component: NotaListadoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    NotaListadoComponent,
    CategoriaListadoComponent,
    LoginComponent,
    TopmenuComponent
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
  providers: [NotasService, CategoriasService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
