import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSigninComponent } from './login-signin/login-signin.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [LoginSigninComponent],
  bootstrap: [LoginSigninComponent]
})
export class LoginModule { }
