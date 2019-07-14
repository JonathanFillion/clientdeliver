import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtResponse } from '../../classes/jwt-response'
import { SignUpForm } from '../../classes/sign-up-form'
import { LoginForm } from '../../classes/login-form'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';

  constructor(private http : HttpClient) { }

  authenticate(loginForm: LoginForm) {
    return this.http.post<JwtResponse>(this.loginUrl, loginForm, httpOptions)
  }


  register(signInfo : SignUpForm) {
    return this.http.post<any>(this.signupUrl, signInfo, httpOptions);
  }
}