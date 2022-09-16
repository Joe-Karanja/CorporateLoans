import { Router } from '@angular/router';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/do';
import { GlobalService } from './global.service';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class SystemHttpInterceptor implements HttpInterceptor {
  constructor(
    private _router: Router,
    public toastrService: ToastrService,
    private globalService: GlobalService,
    private authService: AuthService,
  ) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(this._router.routerState.snapshot.url);
    if(request.body?.['procedure'] === 'sp_get_dashboard_stats' || request.body?.['procedure'] === 'sp_get_agent_statistics') {
      request.body.parameters['audit_action'] =  this._router.routerState.snapshot.url + '/' + this.globalService.titleCase(request.body['procedure'].replace('sp_', '').split("_").join(" "))
    }
    // else if (this._router.routerState.snapshot.url === '/dashboard' && request.body?.data) { 
    //   request.body.data['audit_action'] = this._router.routerState.snapshot.url +'/'+ this.globalService.titleCase(request.body['query'].split("_").join(" "))
    // }
      
    else
  if(request.body?.parameters) {
      request.body.parameters['audit_action'] = this._router.routerState.snapshot.url; //this.globalService.titleCase(request.body['procedure'].replace('sp_', '').split("_").join(" "))
      request.body.parameters['audit_user'] = this.authService.currentUser?.username
    } else if (request.body?.data) {
      request.body.data['audit_action'] = this._router.routerState.snapshot.url;//this.globalService.titleCase(request.body['query'].split("_").join(" "))
      request.body.data['audit_user'] = this.authService.currentUser?.username
    }
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.globalService.loginError = "";
        // console.log(event)
        // if (event.body.response.response_status.response_code === 401 || 
        //   event.body.response.response_status.response_description === 'Invalid token') {
        //   this.toastrService.error('logging Out...', 'Your session has expired');
        //   this._router.navigate(['/home']);
        // }
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401 || err.status === 403) { //|| err.status === 403
          if (request.body.procedure === 'sp_user_login') {
            this.globalService.loginError = "Invalid user credentials, Try again !";
          }
          // this.toastrService.error('Logging Out', 'Your session has expired');
          this._router.navigate(['/session/signin']);
        } else if (err.status === 417 && request.body.procedure === 'sp_user_login') {
          this.globalService.loginError = "Country selected is not supported currently!"
        }
        else if (err.status === 500) {
          this.toastrService.error("Database Error occured, Try again or contact support team for help", "Error");
        } 
      }
    })
    )
  }
}

