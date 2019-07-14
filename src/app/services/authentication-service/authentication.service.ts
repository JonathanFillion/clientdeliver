import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtResponse } from '../../classes/jwt-response'


export class User {
	constructor(public status:string) {}
}

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
  baseUrl : String = ""
  constructor(private http : HttpClient) { }

  authenticate(username: String, password: String) {
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

   /*  testAuth(username: String, password: String) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    console.log("Request sent")
    const form = {username : "relarehjasdashjsdjhlaeee", password: "testtesttest"}
    

    this.http.post<JwtResponse>(this.url+"/api/auth/signin", form, {responseType: "json"}).subscribe(
      (data: JwtResponse) => {
        console.log(data)
      });

    }*/

    let body = {username: username, password: password}
    this.http.post<JwtResponse>(this.baseUrl + "/api/auth/signin", body, {responseType: "json"}).subscribe(
      (data: JwtResponse) => {
        console.log(data)
      });
  }


  register(username: String, password: String, name: String, email: String, role: String[]) {
    let body = {username: username, password: password, name: name, email: email, role: role}
    this.http.post<any>(this.baseUrl + "/api/auth/signup", body ,{responseType: "json"}).subscribe(
      (data: String ) => {
        console.log(data)
      }
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}