import { Injectable } from '@angular/core';
import {Nota} from '../models/Nota';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable()
export class NotasService {
  notasUrl = 'http://www.miguelcamposrivera.com/keeper/api/nota';
  apiKey = '8o4w0w0k8o8go48gcocw0kwwwwkoocokkoco8s4w';

  constructor(private http: HttpClient) {
  }

  getNotas(): Observable<Nota[]> {
    // let headers = new HttpHeaders();
    // headers = headers.set('X-API-KEY', '8o4w0w0k8o8go48gcocw0kwwwwkoocokkoco8s4w');
    // return this.http.get<Nota[]>(`${this.notasUrl}/lista`, { headers: headers});
    return this.http.get<Nota[]>(`${this.notasUrl}/lista?X-API-KEY=8o4w0w0k8o8go48gcocw0kwwwwkoocokkoco8s4w`);
  }

  addNota (titulo: string, descripcion: string, idcategoria: number): Observable<Nota> {
    return this.http.post<Nota>(`${this.notasUrl}/nueva`,
      `titulo=${titulo}&descripcion=${descripcion}&idcategoria=${idcategoria}&X-API-KEY=${this.apiKey}`, requestOptions);
  }

}
