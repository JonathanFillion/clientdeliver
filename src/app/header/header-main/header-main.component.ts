import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';


@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {

	queryString : string;

  constructor( private router: Router, private loginService:AuthenticationService) { }

  ngOnInit() {
  }

  searchQueryChange(val) {
  	this.queryString = val;
  }

  submitSearch() {
    this.router.navigate(['/search',this.queryString]);
  }


}
