import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = this.authService.currentAuthValue;
        if (token) {
            // token exist so return true
            return true;
        }

        // TODO: 
        // no token exist in so redirect to a informative page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}