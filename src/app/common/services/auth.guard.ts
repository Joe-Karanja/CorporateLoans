import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private _authService: AuthService, private _router: Router) {
         
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        route
        // const url: string = state.url;
        // return this.checkLogin(route, url);
        // const currentUser = this._authService.currentUser;
        if (this._authService.isAuthenticated()) { return true; }
        else{
             // not logged in so redirect to login page with the return url
             console.log({ returnUrl: state.url });
             
        this._router.navigate(['/session/signin'], { queryParams: { returnUrl: state.url }});
        return false;
        }
       
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
    // checkLogin(route: ActivatedRouteSnapshot, url: string): boolean {
    //     // const userRole = this._authService.getRoles();
    //     console.log(url);
    //     console.log(this._authService.isAuthenticated());

    //     if (this._authService.isAuthenticated()) {
    //         // this._router.navigate(['/'])
    //         return true;
    //     } else {
    //         this._router.navigate(['/session/signin'], { queryParams: { returnUrl: url } });
    //         return false;
    //     }
    //     // Store the attempted URL for redirecting
    //     // this._authService.returnUrl = url;
    //     // Navigate to the login page with extras

    // }

}
