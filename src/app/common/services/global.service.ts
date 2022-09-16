import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
// import { ChannelDetails } from '../models/interface-model';
import { DeviceDetectorService } from 'ngx-device-detector';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class GlobalService {
  public apiHost: string | null;
  public setting: any = {};

  emailRegex = "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w{2,}([-.]\\w+)*$";
  mobileRegex = "^((\\+91-?)|0)?[0-9]{9}$";
  phoneFormat = '/(\d{3})(\d{3})(\d{3})(\d{3})/, "(+$1) $2-$3-$4"';
  numberRegex = "/^-?(0|[1-9]\d*)?$/";
  numberWithDecimal = /^[1-9][\.\d]*(,\d+)?$/;
  channel_details: { useragentversion: any; useragent: string; ipAddress: string };
  confirmDialogOptions = {
    width: '400px',
    data: {}
  }
  serverResponse: any;
  loginError: string;
  ipAddress: any;
  constructor(private datePipe: DatePipe,
    // private toastrService: ToastrService,
    private router: Router,
    private http: HttpClient,
    private deviceService: DeviceDetectorService
    ) {
    this.apiHost = `${environment.apiUrl}`;
    this.channel_details = {
      useragentversion: this.deviceService.getDeviceInfo(),
      useragent: this.deviceService.getDeviceInfo().userAgent,
      ipAddress: this.ipAddress
    };
  }

  public getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/xml',
      // 'Accept': 'application/xml',       //<- To ask for XML
      // 'Response-Type': 'text',
      // "Cookie": "DT=DI0JnNdFFZoS9K7GjUGmz3Ygw; JSESSIONID=88AC40A0FCBC46D0E1C388D7DD1823D5; t=default",
      // "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS, POST, PUT, DELETE"
      // "Access-Control-Allow-Origin": "https://dev-48905666.okta.com/app/dev-48905666_springsaml_1/exk1ho9o3kuJ4POZ75d7/sso/saml"
    });
  }
  public getSaml(endpoint: string): any {
    let params = new HttpParams();
    return this.http.get(this.apiHost + endpoint,
        {
            headers: this.getHeaders(),
            params: params,
            responseType: 'text',
            observe: 'response' as 'body'
        }
    ).pipe(map(response => {
        response = response;
        return response;
    }));
}

  momentFomat(date:Date) {
    return moment(date, '').format('DD MMM YY')
  }

  loadGlobalSettingsFromLocalStorage(): void {
    let localItem : any| null =localStorage.getItem('backend-setting')
    if (localStorage.getItem('backend-setting') != null) {
      this.setting = JSON.parse(localItem);
    }

  }
//   removeDuplicates(originalArray: [], prop: any) {
//     var newArray = [];
//     var lookupObject  = {};

//     for(var i in originalArray) {
//        lookupObject[originalArray[i][prop]] = originalArray[i];
//     }

//     for(i in lookupObject) {
//         // newArray.push(lookupObject[i]);
//     }
//      return newArray;
// }

  public titleCase(str: any) {
    return str.split(' ').map(function(val: any){ 
      return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
    }).join(' ');
  }
  
  public validateOnClientSide(validateForm: any): boolean {
    let hasClientValidationError = false;
    for (const i in validateForm.controls) {
      if (validateForm.controls) {
        validateForm.controls[i].markAsDirty();
        validateForm.controls[i].updateValueAndValidity();
        if (validateForm.controls[i].errors !== null) {
          hasClientValidationError = true;
        }
      }
    }
    return hasClientValidationError;
  }


  // public handleErrors(response: any, redirectPath: any, close?: any, message?: string) {
  //   if (response.status === 200) {
  //     let resp = response['data'][0];
  //     if (resp['resp_code'] === '00' || resp >= 0) {
  //       // this.serverResponse = "Request Successful!"
  //       this.serverResponse = "";
  //       this.toastrService.success('Request Successful,' + message, "Success")
  //       setTimeout(() => {
  //         if (redirectPath === "") {
  //           close();
  //         } else {
  //           this.router.navigate([redirectPath])
  //         }
  //       }, 2000);
  //     } else if (resp['resp_code'] === '23503'){ 
  //       this.serverResponse = "";
  //       this.toastrService.warning('Request Unsuccessful, Please Remove Assigned Items and Try Again', "Unsuccessful")
  //     } else {
  //       this.serverResponse = resp['resp_desc'];
  //       this.toastrService.warning(resp['resp_desc'], "Unsuccessful");
  //     }
  //   }
  //   else if (response.status === 401) {
  //     let resp = response['data'][0];
  //     if (resp['resp_code'] !== '00') {
  //       this.serverResponse = resp['resp_desc'];
  //     }
  //   }
  //   else if (response.status === 500) {
  //     this.toastrService.error("Database Error occured, Try Again later or contact System Admin", "Error");
  //     if (response.message.includes('duplicate'))
  //       this.serverResponse = response.message //"Database Error occured, Try Again later!"
  //   } else {
  //     this.toastrService.error("Server Error occured, Try Again later or contact System Admin", "Error");
  //   }
  //   return this.serverResponse
  // }
  // Returns an array of dates between the two dates
  enumerateDaysBetweenDates(startDate: any, endDate: any): any {
    startDate = moment(startDate);
    endDate = moment(endDate);
    const now = startDate;
    const dates = [];
    while (now.isBefore(endDate) || now.isSame(endDate)) {
      dates.push(now.format('YYYY-MM-DD'));
      now.add(1, 'days');
    }
    return dates;
  }
  transformDate(date: NgbDateStruct) {
    const picked_date = new Date(date.year, date.month - 1, date.day);
    return this.datePipe.transform(picked_date, 'yyyy-MM-dd');
  }

  transformDateRange(dateRange: any) {
    const newDate = dateRange.toString().split(' ');
    const month = newDate[1];
    const day = newDate[2];
    const year = newDate[3];
    return this.stringToDate(month + ' ' + day + ', ' + year);
  }

  stringToDate(dateString: string) {
    return { year: new Date(dateString).getFullYear(), month: new Date(dateString).getMonth() + 1, day: new Date(dateString).getDate() };
  }
  transformDateObject(dateString: any) {
    return String(dateString.year) + "-" + String(dateString.month) + "-" + String(dateString.day)
  }

  stringToTime(timeString: string) {
    const newTime = timeString.split(':');
    return { hour: +newTime[0], minute: +newTime[1], second: +newTime[2] };
  }

  transformTime(time: any, seconds?: boolean): any {
    if (seconds) {
      return time.hour + ':' + time.minute + ':' + time.second;
    } else {
      return time.hour + ':' + time.minute;
    }
  }

  backDate(date: any) {
    const newDate = new Date(date.year, date.month, date.day);
    return new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 365);
  }

  /**
   * Shuffles array in place. ES6 version
   */
  public shuffle(a: any): any {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  public getUserInfo(): any {
    const user: any = localStorage.getItem('user');
    return JSON.parse(user);
  }
  public getUserPermissions(): any {
    const permissions: any = localStorage.getItem('permissions');
    return JSON.parse(permissions);
  }
  public getToken(): any {
    //console.log(localStorage.getItem('auth_token'));

    return localStorage.getItem('auth_token');
  }
}
