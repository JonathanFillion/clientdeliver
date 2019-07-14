import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from '../authentication-service/authentication.service';
import { TokenStorageService} from '../../services/token-storage/token-store.service';

@Injectable({
  providedIn: 'root'
})
const TOKEN_HEADER_KEY = 'Authorization';

export class BasicAuthHttpInterceptorService implements HttpInterceptor {

  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    }
  }
}