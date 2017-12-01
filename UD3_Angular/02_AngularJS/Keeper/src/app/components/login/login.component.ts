import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  pass = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.checkLoggedIn();
  }

  login() {
    this.authService.doLogin(this.email, this.pass).subscribe(
      usuario => {
        this.authService.setLoginData(usuario.key, usuario.nombre);
        this.router.navigate(['/notas']);
      },
      error => {
        alert('Login incorrecto');
      }
    );
  }
}
