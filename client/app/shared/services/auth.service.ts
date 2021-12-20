import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';

import { CookieService } from "ngx-cookie-service";

import { AppConfig } from '../../app.config.service';
import { AuthModel } from '../../models/auth.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = AppConfig.settings.env.api;
  private authDataSubject: BehaviorSubject<AuthModel>;
  public authData: Observable<AuthModel>;

  constructor(private _http: HttpClient, private cookieService: CookieService) {
    // get token from cookie and initialize the bahaviour subject
    // const storedAuthData = new AuthModel({ token: localStorage.getItem('token')});
    const storedAuthData = new AuthModel({ token: cookieService.get('token') });
    this.authDataSubject = new BehaviorSubject<AuthModel>(storedAuthData);
    this.authData = this.authDataSubject.asObservable();
  }

  // method to get authentication token and store it into cookies
  authenticate() {
    // return this._http.get(`${this.baseUrl}auth`);
    return this._http.get(`${this.baseUrl}auth`)
      .pipe(map((respData: AuthModel) => {

        // store auth data details and jwt token in local storage to keep auth between page refreshes
        // localStorage.setItem('token', JSON.stringify(respData));
        // localStorage.setItem('token', respData.token);
        // delete token
        if (this.cookieService.check('token')) {
          this.cookieService.delete('token', '/');
        }
        // set token in cookies
        this.cookieService.set('token', respData.token);
        this.authDataSubject.next(respData);

        return respData;
      }));
  }

  // property to get last authentication value
  public get currentAuthValue(): AuthModel {
    return this.authDataSubject.value;
  }
}
