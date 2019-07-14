import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';

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



  constructor(private loginservice: AuthenticationService) { }

  ngOnInit() {
  }



  register() {
  	this.loginservice.register(this.username, this.password, this.name, this.email, [this.role]);
  }

}
