import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Categoria} from '../models/Categoria';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CategoriasService {
  categoriasUrl = 'http://www.miguelcamposrivera.com/keeper/api/categoria/lista';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.categoriasUrl);
  }
}
