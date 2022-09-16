import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivateChild {
  constructor(public auth: AuthService, public router: Router) { }
  canActivateChild(route: ActivatedRouteSnapshot): boolean {
    let authenticated = false;
    if (this.auth.currentUser) {
      let roles = this.auth.getRoles();
      if (roles?.indexOf(route.data.role) > 0) { 
        authenticated = true;
        // return true;
      } else {
        authenticated=false
        // return false;
      }
    }
    return authenticated;
  }
}
