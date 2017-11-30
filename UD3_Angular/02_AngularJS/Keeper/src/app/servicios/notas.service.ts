import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Nota} from '../models/Nota';

@Injectable()
export class NotasService {
  url = 'http://www.miguelcamposrivera.com/keeper/api/notas';

  constructor(private http: HttpClient) { }

  getNotas(): Observable<Nota[]> {
    return this.http.get<Nota[]>(`${this.url}/lista?X-API-KEY=8o4w0w0k8o8go48gcocw0kwwwwkoocokkoco8s4w`);
  }

}
