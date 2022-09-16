import { GlobalService } from "./global.service";
import { map } from "rxjs/operators";
import { Injectable, NgZone } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

import { Router } from "@angular/router";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import 'rxjs/Observable';
import Swal from "sweetalert2";
import { Observable } from "rxjs";

const MINUTES_UNITL_AUTO_LOGOUT = 20; // in Minutes
const CHECK_INTERVALL = 1000;

@Injectable({
    providedIn: "root"
})

export class AuthService {
    public jwtHelper: JwtHelperService = new JwtHelperService();
    private _currentUser: any;
    public loggedIn = false;
    public returnUrl = "";
    static countryCode: string;
    public createResponse = " Pending Create Approval";
    public editResponse = " Pending Edit Approval";
    public deleteResponse = " Pending Delete Approval";
    public blockResponse = "";
    public unBlockResponse = " Pending Unblock Approval";
    public assignResponse = " Pending Profile Assignment Approval";
    public lastAction: any;

    ipAddress: Object;
    constructor(
        private _router: Router,
        private http: HttpClient,
        private ngZone: NgZone,
        public _globalService: GlobalService
    ) {

        const token = this.getToken;
        if (token) {
            this._currentUser = this.jwtHelper.decodeToken(token);
            console.log("user details? ", this._currentUser);
        }
        //this.lastAction(Date.now());
        // this.check();
        this.initListener();
        this.initInterval();
    }

    public getIPAddress() {
        return this.http.get("http://api.ipify.org/?format=json");
    }
    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS, POST, PUT, DELETE"
        });
    }
    private static generateHeaders(): { headers: HttpHeaders } {
        return {
            headers: new HttpHeaders({
                "Content-Type": "text/plain",
                // "X-country-code": localStorage.getItem('country'),
                "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS, POST, PUT, DELETE"
                // "Access-Control-Allow-Origin": "*"
            })
        };
    }
    private static getCHeaders(): { headers: HttpHeaders } {
        return {
            headers: new HttpHeaders({
                "Content-Type": "application/json"

            })
        };
    }

    getCounty(): any {
        return this.http.get(this._globalService.apiHost + 'countries',
            AuthService.getCHeaders())
            .pipe(map((data) => {
                
                return data
            }));
    }
    public postLogin(model: any) {
        return this.http
            .post(this._globalService.apiHost + 'authorize', model, AuthService.generateHeaders())
            .pipe(map((data) => {

            })
            )
    }

    public login(model: any) {
        return this.http
            .post(this._globalService.apiHost + 'authorize', model, AuthService.generateHeaders())
            .pipe(map((data: any) => {
                let localItem: any | null=  localStorage.getItem("access_token")
                //console.log(data);
                if (data['status'] === 200) {
                    if (data["data"][0]["resp_code"] === '00') {
                        localStorage.setItem("access_token", JSON.stringify(data['access_token']));
                       // console.log(data['access_token'])
                        this._currentUser = this.jwtHelper.decodeToken(
                           
                        );
                        this.loggedIn = true;
                        // return data;
                    } else {
                        localStorage.removeItem("access_token");
                        this.loggedIn = false;
                    }
                    // return data;
                }
                return data;
                //console.log(data);
            }));
    }
    public  logout() {
        if (this._currentUser !== undefined) {
            // console.log("user? ", this._currentUser);
            let model = {
                "procedure": "sp_update_userlogout",
                "parameters": {
                    "iv_email": this._currentUser["email"],
                    "c_1": "cv_1",
                    "created_by":  this._currentUser["email"]
                }
            };
            this.http.post(this._globalService.apiHost + "logout-user", model, AuthService.generateHeaders()).subscribe((res: any) => {
               console.log(res);
                
                if (res['status'] === 200) {
                    localStorage.removeItem("access_token");
                    localStorage.removeItem("roles");
                    localStorage.removeItem("lastAction");
                    // localStorage.removeItem("country");
                    localStorage.removeItem("country");
                    localStorage.removeItem("currentUser");
                    this._currentUser = undefined;
                    this.loggedIn = false;
                    this._router.navigate(['/session/signin'])
                } else {
                    // this.
                    this._router.navigateByUrl(this.returnUrl);                   
                }
            }, (error) => {
                console.log(error)
                localStorage.removeItem("access_token");
                localStorage.removeItem("roles");
                localStorage.removeItem("lastAction");
                // localStorage.removeItem("country");
                localStorage.removeItem("country");
                localStorage.removeItem("currentUser");
                this._currentUser = undefined;
                this.loggedIn = false;
                this._router.navigate(['/session/signin'])
            }
                
            )
        } 
        return  true 
    }
    public getRoles(): any {
        // return JSON.parse(localStorage.getItem('roles'));
    }
    get getToken(): any {
        return localStorage.getItem("access_token");
    }
    get currentUser() {
        if (this.isAuthenticated()) {
            return this._currentUser;
        }
        else {
            return undefined;
        }
    }
    public checkToken(): any {
        return !!localStorage.getItem("access_token");
    }
    public unauthorizedAccess(error: any): void {
        // error;
        // console.log("error:", error);
        // this.logout();
        //this._router.navigate(["/session/signin"]);
    }
    public isLoggedIn(): boolean {
        // return this.jwtHelper.isTokenExpired('access_token');
        return false;
    }
    isAuthenticated(): boolean {
        const token = this.getToken;
        if (token) {
            return true
        } else {
            this.logout();
        }
        return token;
    }
    public getJWTValue(): any {
        const token = this.getToken;
        return this.jwtHelper.decodeToken(token);
    }
    public hasPriviledge(priviledge: string) {
        if (this.getRoles()?.indexOf(priviledge) > 0) {
            return true;
        } else {
            return false;
        }
    }
    private handleError(error: any) {
        let errorMessage: any = {};
        // Connection error
        if (error.status === 0) {
            errorMessage = {
                success: false,
                status: 0,
                data: "Sorry, there was a connection error occurred. Please try again."
            };
        } else {
            errorMessage = error.json();
        }
        return Observable.throw(errorMessage);
    }
    initListener() {
        this.ngZone.runOutsideAngular(() => {
            document.body.addEventListener('click', () => this.reset());
        });
    }
    initInterval() {
        this.ngZone.runOutsideAngular(() => {
            setInterval(() => {
                this.check();
            }, CHECK_INTERVALL);
        })
    }
    reset() {
        this.lastAction = Date.now();
        localStorage.setItem('lastAction', this.lastAction);
    }

    check() {
        let now = Date.now();
        const endTime = Number(this.lastAction) + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
        if (now > Number(endTime)) {
            // Swal.fire({
            //     text: "Your session is about to expire",
            //     showCancelButton: true,
            //     confirmButtonText: "Keep me logged",
            //     cancelButtonText: ""
            // })
            // this.logout();
        }
    }
}
