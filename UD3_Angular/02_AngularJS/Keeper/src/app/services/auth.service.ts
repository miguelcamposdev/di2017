import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {User} from '../models/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};



@Injectable()
export class AuthService {
  authUrl = 'http://miguelcamposrivera.com/keeper/api/auth';

  constructor(private http: HttpClient, private router: Router) { }

  doLogin (email: string, pass: string): Observable<User> {
    return this.http.post<User>(`${this.authUrl}/login`,
      `email=${email}&password=${pass}`, requestOptions);
  }

  setLoginData(key: string, nombre: string) {
    localStorage.setItem('key', key);
    localStorage.setItem('nombre', nombre);
  }

  getKey(): string {
    return localStorage.getItem('key');
  }

  checkAuth() {
    const apikey = localStorage.getItem('key');
    if ( apikey == null ) {
      this.router.navigate(['/']);
    }
  }

  checkLoggedIn() {
    const apikey = localStorage.getItem('key');
    if ( apikey != null ) {
      this.router.navigate(['/notas']);
    }
  }

  doLogout() {
    localStorage.removeItem('key');
  }

}
