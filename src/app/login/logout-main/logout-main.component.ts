import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-logout-main',
	templateUrl: './logout-main.component.html',
	styleUrls: ['./logout-main.component.css']
})
export class LogoutMainComponent implements OnInit {

	constructor(
		private authentocationService: AuthenticationService,
		private router: Router) {

	}

	ngOnInit() {
		this.authentocationService.logOut();
		this.router.navigate(['login']);
	}

}