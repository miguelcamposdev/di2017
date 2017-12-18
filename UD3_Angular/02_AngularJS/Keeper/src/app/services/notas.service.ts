import { Injectable } from '@angular/core';
import {Nota} from '../models/Nota';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthService} from './auth.service';



@Injectable()
export class NotasService {
  notasUrl = 'http://www.miguelcamposrivera.com/keeper/api/nota';
  public requestOptions: HttpHeaders;

  constructor(private http: HttpClient, private authService: AuthService) {
    const apikey = this.authService.getKey();
    this.requestOptions = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-API-KEY': apikey
    });
  }

  getNotas(): Observable<Nota[]> {
    return this.http.get<Nota[]>(`${this.notasUrl}/lista`, {headers: this.requestOptions});
  }

  addNota (titulo: string, descripcion: string, idcategoria: number): Observable<Nota> {
    return this.http.post<Nota>(`${this.notasUrl}/nueva`,
      `titulo=${titulo}&descripcion=${descripcion}&idcategoria=${idcategoria}`, {headers: this.requestOptions});
  }

  deleteNota (id: number): Observable<any> {
    return this.http.delete(`${this.notasUrl}/eliminar`, {
      params: new HttpParams().set('id', `${id}`),
      headers: this.requestOptions
    });
  }

}
