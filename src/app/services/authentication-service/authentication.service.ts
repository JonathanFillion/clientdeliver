import { Injectable } from '@angular/core';
import { HttpService } from '../../http.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';


export class User {
	constructor(public status:string) {}
}

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	constructor(private httpClient : HttpClient, private httpService : HttpService) { }

	authenticate(username, password) {
/*	const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User>('http://localhost:8080/validateLogin', {headers}).pipe(
     map(userData => {
    		sessionStorage.setItem('username',username);
    		let authString = 'Basic ' + btoa(username + ':' + password);
        sessionStorage.setItem('basicauth', authString);
        return userData;
       }
     )
   );
   */
   this.httpService.testAuth(username, password);
 }

 isUserLoggedIn() {
 	let user = sessionStorage.getItem('username')
 	return !(user === null)
 }

 logOut() {
 	sessionStorage.removeItem('username')
 }
}