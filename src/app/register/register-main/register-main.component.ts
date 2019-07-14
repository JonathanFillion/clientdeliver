import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';
import { SignUpForm } from '../../classes/sign-up-form';


@Component({
  selector: 'app-register-main',
  templateUrl: './register-main.component.html',
  styleUrls: ['./register-main.component.css']
})
export class RegisterMainComponent implements OnInit {

	username = ''
  password = ''
  name = ''
  email = ''
  role= ''
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  signupInfo: SignUpForm;

  constructor(private loginservice: AuthenticationService) { }

  ngOnInit() {
  }



  register() {

    let signInfo : SignUpForm = new SignUpForm(this.username, this.password, this.name, this.email, [this.role])
    this.loginservice.register(signInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
      );
  }

}
