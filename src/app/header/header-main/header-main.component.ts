import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';
import { TokenStorageService} from '../../services/token-storage/token-store.service';

  @Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {

	queryString : string;

  constructor( private router: Router, private loginService:AuthenticationService, private token: TokenStorageService) { }

  ngOnInit() {
  }

  searchQueryChange(val) {
    this.queryString = val;
  }

  submitSearch() {
    this.router.navigate(['/search',this.queryString]);
  }


  logout() {
    this.token.signOut();
    window.location.reload();
  }


}
