import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig } from '../../app.config.service';
import { AuthService } from '../../shared/services/auth.service';
import { AuthModel } from '../../models/auth.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const authObject: AuthModel = this.authService.currentAuthValue;
        const baseUrl = AppConfig.settings.env.api;
        const isApiUrl = request.url.startsWith(baseUrl);
        // exclude assets config files
        // const isAssetsConfig = request.url.startsWith('assets/config/');

        if (authObject && authObject.token && isApiUrl) {
            // console.log('jwt interceptor');
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${authObject.token}`,
                }
            });
        }
        return next.handle(request);
    }
}