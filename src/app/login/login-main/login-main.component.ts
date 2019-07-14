import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';
import { LoginForm } from '../../classes/login-form'
import { TokenStorageService } from '';


@Component({
	selector: 'app-login-main',
	templateUrl: './login-main.component.html',
	styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {
  loginForm: LoginForm;
  username = ''
  password = ''
  invalidLogin = false
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private router: Router,
    private loginservice: AuthenticationService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

 checkLogin() {
    this.loginForm = new LoginForm(this.username, this.password)
    this.loginservice.authenticate(this.loginForm).subscribe(data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }


}