import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalService } from './global.service';
import { AuthService } from './auth.service';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class HttpService {
    url: string | null = this._globalService.apiHost;
    // url = environment.baseUrl;
    churchid = 'churchid';
    branchid = 'branchid';
    serviceid = 'serviceid';
    userid = 'userid';
    requesttypeid = 'requesttypeid';
    categoryid = 'categoryid';
    eventtypeid = 'eventtypeid';
    id = 'id';
    page = 'page';
    size = 'size';
    startdate = 'startdate';
    enddate = 'enddate';
    period = 'period'
    tabIndex = 0;
    empObjArr: [] = [];
    currentStartEndDate: any = {};

    dateInfo$: Observable<any>;
    private dateSubject: ReplaySubject<any>;

    transTypeInfo$: Observable<any>;
    private transTypeSubject: ReplaySubject<any>;

    agentInfo$: Observable<any>;
    private agentSubject: ReplaySubject<any>;

    periodInfo$: Observable<any>;
    private periodSubject: ReplaySubject<any>;

    dataGroupInfo$: Observable<any>;
    private dataGroupSubject: ReplaySubject<any>;
    currentUser: any;
    getConfirmation: any;
    commissionNoValidator: string;
    setDateInfo(param: any) {
        this.dateSubject.next(param);
    }
    setDataGroupInfo(param: any) {
        this.dataGroupSubject.next(param);
    }
    setPeriodInfo(param: any) {
        this.periodSubject.next(param);
    }
    setAgentIdInfo(param: any) {
        this.agentSubject.next(param);
    }
    setTransTypeInfo(param: any) {
        this.transTypeSubject.next(param);
    }
 
    constructor(
        private http: HttpClient,
        private _globalService: GlobalService,
        private authService: AuthService,
        // private toastrService: ToastrService
    ) {

        this.dateSubject = new ReplaySubject<any>(1);
        this.dateInfo$ = this.dateSubject.asObservable();

        this.periodSubject = new ReplaySubject<any>(1);
        this.periodInfo$ = this.periodSubject.asObservable();

        this.dataGroupSubject = new ReplaySubject<any>(1);
        this.dataGroupInfo$ = this.periodSubject.asObservable();

        this.transTypeSubject = new ReplaySubject<any>(1);
        this.transTypeInfo$ = this.periodSubject.asObservable();

        this.agentSubject = new ReplaySubject<any>(1);
        this.agentInfo$ = this.periodSubject.asObservable();

        this.currentUser = this.authService.currentUser;
    }
    private static createCompleteRoute(route: string, envAddress: string): string {
        return `${envAddress}/${route}`;
    }
    get getCountry() {
        return 'country'
        //console.log(localStorage.getItem("country"));
        // return this.countries.filter(res => res.country_code === localStorage.getItem("country"))[0]
    }
    // groupTransactionsByType(array: [] =[], property: any) {
    //     var hash = {};
    //     for (var i = 0; i < array.length; i++) {
    //         if (!hash[array[i][property]]) hash[array[i][property]] = [];
    //         hash[array[i][property]].push(array[i]);
    //     }
    //     return hash;
    // }
    // convertToArray(data: []) {
    //     let jsonToBeUsed = [];
    //     for (let type in data) {
    //         let item = {};
    //         item['key'] = type;
    //         item['value'] = data[type];
    //         jsonToBeUsed.push(item);
    //     }
    //     return jsonToBeUsed;
    // }
    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS, POST, PUT, DELETE"
        });
    }
    private getHeadersWithoutBearer(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*'
        });
    }

    public post(endpoint: string, model: any): any {
        return this.http.post(this._globalService.apiHost + endpoint, model, { headers: this.getHeaders() }
        ).pipe(map(response => {
            //console.log(response);
            response = response;
            return response;
        }));
    }
    public postOperation(model: any): any {
        return this.http.post(this._globalService.apiHost + 'execute-operation', model, { headers: this.getHeadersWithoutBearer() }
        ).pipe(map(response => {
            // console.log(response)
            response = response;
            return response;
        })
        )
    }
    public postProcedure(model: any): any {
        return this.http.post(this._globalService.apiHost + 'execute-stored-procedure', model, { headers: this.getHeaders() }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }
    public getFile(url: string) {
        return 'https://test-api.ekenya.co.ke/echurch/api/files?url=' + url;
    }
    public patch(endpoint: string, model: any): any {
        return this.http.patch(this._globalService.apiHost + endpoint, model, { headers: this.getHeaders() }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }
    public put(endpoint: string, model: any): any {
        return this.http.put(this._globalService.apiHost + endpoint, model, { headers: this.getHeaders() }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }
    public getResource(route: string, httpParams?: any): any {
        return this.http.get<any>(HttpService.createCompleteRoute(route, 'this.url'),
            { headers: this.getHeaders(), params: httpParams })
    }
    public get(endpoint: string, respType?: any): any {
        respType;
        let params = new HttpParams();
        return this.http.get(this._globalService.apiHost + endpoint,
            {
                headers: this.getHeaders(), params: params
            }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }
    public delete(endpoint: string): any {
        return this.http.delete(this._globalService.apiHost + endpoint, { headers: this.getHeaders() }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }
    getFromJson(endpoint: string): any {
        return this.http.get(endpoint);
    }
    private handleError(error: Response | any) {
        let errorMessage: any = {};
        if (error.status === 0) {
            errorMessage = {
                success: false,
                status: 0,
                data: 'Sorry, there was a connection error occurred. Please try again.',
            };
        } else {
            errorMessage = error.json();
        }
        return Observable.throw(errorMessage);
    }
    format(date: NgbDateStruct, format: string): string {
        if (!date) { return ''; }
        const mdt = moment([date.year, date.month - 1, date.day]);
        if (!mdt.isValid()) { return ''; }
        return mdt.format(format);
    }
    deleteResource(data: any, refreshList: any, delResponse?: string) {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            text: 'You will not be able to recover this record!',
            icon: 'question',
            confirmButtonColor: '#0074eb',
            cancelButtonColor: '#f44336',
            showCancelButton: true,
            input: "textarea",
            inputPlaceholder: "Enter Delete Remarks",
            confirmButtonText: 'Yes, Delete It!',
            cancelButtonText: 'No, keep it',
            width: '400px'
        }).then((result) => {
            if (result.value) {
                let reqBody = data
                reqBody['data']['delete_remarks']=result.value
               // console.log(reqBody)
                this.postOperation(reqBody)
                    .subscribe((res:any) => {
                        //    this._globalService.handleErrors(res, '', () => {refreshList() }, '')
                        // //console.log(res['data'][0]);
                        if (res['status'] === 200) {
                            if (res['data'][0] === 1) {

                                Swal.fire(
                                    'Successful!',
                                    'Deletion Successful,' + delResponse,
                                    'success'
                                );
                                refreshList();
                            }
                        } else {
                            Swal.fire(
                                'Error!',
                                'Deletion failed',// + res['message'],
                                'error'
                            );
                            refreshList();
                        }
                    });
            } else {
                refreshList();
            }
        });
    }
    rejectRecord(data: any, refreshList: any) {
        Swal.fire({
            title: 'Are you sure you want to reject?',
            text: !data['errorMsg'] ? 'This record will be marked as rejected!' : data['errorMsg'],// <span style="color:#F8BB86"> data['errorMsg']<span>,

            showCancelButton: true,
            confirmButtonColor: '#0074eb',
            cancelButtonColor: '#f44336',
            confirmButtonText: 'Yes, Continue!',
            cancelButtonText: 'Cancel!',
            width: 300,
            padding: 5
            // inputPlaceholder: "Write rejection reason(s) before you continue..."
            // html:true,
        }).then((result) => {
            //console.log(result)
            if (result.value) {
                let requestBody = {
                    data: {
                        "id": data.id,
                        "declined_remarks": data.decline_remarks,
                        "declined_by": this.currentUser?.username,
                    },
                    "query": data.query,
                }
                this.postOperation(requestBody)
                    .subscribe((res:any) => {
                        // //console.log(res['data'][0]);
                        if (res['status'] === 200) {
                            if (res['data'][0] === 1) {
                                Swal.fire(
                                    'Successful!',
                                    'Record decline successful',
                                    'success'
                                );
                                refreshList();
                            }
                        } else {
                            Swal.fire(
                                'Error!',
                                'Decline failed, ',// + res['message'],
                                'error'
                            );
                            refreshList();

                        }
                    });
                // //console.log(model);
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Request Cancelled',
                    'You canceled the request',
                    'error'
                )
            }
            else {
                Swal.fire(
                    'Oohps!',
                    'Request not sent,Please add remarks and try again!',// + res['message'],
                    'error'
                );
                // refreshList();
                data['errorMsg'] = "You have not entered anything in remarks"
                this.rejectRecord(data, refreshList);
            }
        });

    }
    rejectUnApprovedRecord(data: any, refreshList: any) {
        Swal.fire({
            title: 'Are you sure you want to reject?',
            text: !data['errorMsg'] ? 'This record will be marked as rejected!' : data['errorMsg'],// <span style="color:#F8BB86"> data['errorMsg']<span>,
            input: 'textarea',
            showCancelButton: true,
            confirmButtonColor: '#0074eb',
            cancelButtonColor: '#f44336',
            confirmButtonText: 'Yes, Continue!',
            cancelButtonText: 'Cancel!',
            width: 300,
            padding: 5,
            inputPlaceholder: "Write rejection reason(s) before you continue..."
            // html:true,
        }).then((result) => {
            //console.log(result)
            if (result.value) {
                let requestBody = {
                    data: {
                        "id": data.id,
                        "declined_remarks": result.value,
                        "declined_by": this.authService.currentUser.username,
                    },
                    "query": data.query,
                }
                this.postOperation(requestBody)
                    .subscribe((res:any) => {
                        // //console.log(res['data'][0]);
                        if (res['status'] === 200) {
                            if (res['data'][0] === 1) {
                                Swal.fire(
                                    'Successful!',
                                    'Record decline successful',
                                    'success'
                                );
                                refreshList();
                            }
                        } else {
                            Swal.fire(
                                'Error!',
                                'Decline failed, ',// + res['message'],
                                'error'
                            );
                            refreshList();

                        }
                    });
                // //console.log(model);
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Request Cancelled',
                    'You canceled the request',
                    'error'
                )
            }
            else {
                Swal.fire(
                    'Oohps!',
                    'Request not sent,Please add remarks and try again!',// + res['message'],
                    'error'
                );
                // refreshList();
                data['errorMsg'] = "You have not entered anything in remarks"
                this.rejectRecord(data, refreshList);
            }
        });

    }
    rejectDeletedRecord(data: any, refreshList: any) {
        Swal.fire({
            title: 'Are you sure you want to reject?',
            text: !data['errorMsg'] ? 'This record will be marked as rejected!' : data['errorMsg'],// <span style="color:#F8BB86"> data['errorMsg']<span>,
            input: 'textarea',
            showCancelButton: true,
            confirmButtonColor: '#0074eb',
            cancelButtonColor: '#f44336',
            confirmButtonText: 'Yes, Continue!',
            cancelButtonText: 'Cancel!',
            width: 300,
            padding: 5,
            inputPlaceholder: "Write rejection reason(s) before you continue..."
            // html:true,
        }).then((result) => {
            //console.log(result)
            if (result.value) {
                let requestBody = {
                    data: {
                        "id": data.id,
                        "deletion_declined_remarks": result.value,
                        "deletion_declined_by": this.authService.currentUser.username,
                    },
                    "query": data.query,
                }
                this.postOperation(requestBody)
                    .subscribe((res:any) => {
                        // //console.log(res['data'][0]);
                        if (res['status'] === 200) {
                            if (res['data'][0] === 1) {
                                Swal.fire(
                                    'Successful!',
                                    'Record decline successful',
                                    'success'
                                );
                                refreshList();
                            }
                        } else {
                            Swal.fire(
                                'Error!',
                                'Decline failed, ',// + res['message'],
                                'error'
                            );
                            refreshList();

                        }
                    });
                // //console.log(model);
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Request Cancelled',
                    'You canceled the request',
                    'error'
                )
            }
            else {
                Swal.fire(
                    'Oohps!',
                    'Request not sent,Please add remarks and try again!',// + res['message'],
                    'error'
                );
                // refreshList();
                data['errorMsg'] = "You have not entered anything in remarks"
                this.rejectRecord(data, refreshList);
            }
        });

    }
    rejectAgentRecord(data: any, refreshList: any) {
        Swal.fire({
            title: 'Are you sure you want to reject?',
            text: !data['errorMsg'] ? 'This record will be marked as rejected!' : data['errorMsg'],// <span style="color:#F8BB86"> data['errorMsg']<span>,
            input: 'textarea',
            showCancelButton: true,
            confirmButtonColor: '#0074eb',
            cancelButtonColor: '#f44336',
            confirmButtonText: 'Yes, Continue!',
            cancelButtonText: 'Cancel!',
            width: 300,
            padding: 5,
            inputPlaceholder: "Write rejection reason(s) before you continue..."
            // html:true,
        }).then((result) => {
            //console.log(result)
            if (result.value) {
                //console.log(result.value);
                let requestBody = {
                    data: {
                        "agent_id": data.agent_id,
                        "declined_remarks": data.decline_remarks ? data.decline_remarks : result.value,
                        "declined_by": this.authService.currentUser.username,
                    },
                    "query": data.query,
                }
                this.postOperation(requestBody)
                    .subscribe(( res: any) => {
                        // //console.log(res['data'][0]);
                        if (res['status'] === 200) {
                            if (res['data'][0] === 1) {
                                Swal.fire(
                                    'Successful!',
                                    'Record decline successful',
                                    'success'
                                );
                                refreshList();
                            }
                        } else {
                            Swal.fire(
                                'Error!',
                                'Decline failed, ',// + res['message'],
                                'error'
                            );
                            refreshList();

                        }
                    });
                // //console.log(model);
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Request Cancelled',
                    'You canceled the request',
                    'error'
                )
            }
            else {
                Swal.fire(
                    'Oohps!',
                    'Request not sent,Please add remarks and try again!',// + res['message'],
                    'error'
                );
                // refreshList();
                data['errorMsg'] = "You have not entered anything in remarks"
                this.rejectRecord(data, refreshList);
            }
            // function(dismiss){
            //     if (dismiss == 'cancel') {

        });

    }
    deleteUnapprovedResource(data: any, refreshList: any) {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            text: 'You will not be able to recover this record!',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#0074eb',
            cancelButtonColor: '#f44336',
            confirmButtonText: 'Yes, Delete It!',
            cancelButtonText: 'No, keep it',
            width: '400px'

        }).then((result) => {
            if (result.value) {
                let reqBody =
                {
                    "procedure": "sp_delete_operation",
                    "parameters": {
                        "iv_table_name": data.table_name,
                        "iv_table_id_name": data.id_name,
                        "iv_table_id_value": data.id,
                        "iv_deleted_by": this.authService.currentUser?.username,
                        "c_1": "cv_1"
                    }
                }

                this.postProcedure(reqBody)
                    .subscribe((res: any) => {
                        // //console.log(res);
                        if (res['status'] === 200) {
                            if (res['data'][0]['resp_code'] === '00') {
                                // this.toastrService.success('Record Deleted!', 'Success')
                                refreshList();
                            } else {
                                // this.toastrService.error(res['data'][0]['resp_desc'], 'Unsuccesful')
                            }
                        } else {
                            Swal.fire(
                                'Error!',
                                'Deletion    failed, ',// + res['message'],
                                'error'
                            );
                            refreshList();
                        }
                    });
                // //console.log(model);
            } else {
                refreshList();
            }
        });

    }
    confirmRequestEdit(item: any, refreshList: any) {
        item;
        Swal.fire({
            title: 'Are you sure you want to approve this record?',
            text: 'Proceed to approve',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#0074eb',
            cancelButtonColor: '#f44336',
            confirmButtonText: 'Yes, Continue!',
            cancelButtonText: 'No, Cancel'
        }).then((result) => {
            if (result.value) {
                // console.log(item);
                
                let reqBody = {
                    "procedure": "sp_approve_rework_operation",
                    "parameters": {
                        "iv_table_name": item.table_name,
                        "iv_table_id_value": Number(item.id),
                        "iv_table_id_name": item.table_id_name,
                        "iv_checker_remarks": item.checker_remarks,
                        "iv_approved_by": this.authService.currentUser?.username,
                        "c_1": "cv_1"
                    }
                }
                this.postProcedure(reqBody)
                    .subscribe((res:any) => {
                        //console.log(res);
                        let resCode = res['data'][0]['resp_code']
                        if (resCode === '00') {
                            Swal.fire(
                                'Successful!',
                                'Approval successful.',
                                'success'
                            );
                            refreshList();
                        } else if (resCode === '01') {
                            Swal.fire(
                                'Record not found!',
                                'warning'
                            );
                        }

                    })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your Record Wasn\'t Approved :)',
                    'error'
                )
            }
        })
    }
    confirmRequestDelete(item: any, refreshList: any) {
        item;
        Swal.fire({
            title: 'Are you sure you want to approve?',
            text: 'Proceed to approve Deletion',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#0074eb',
            cancelButtonColor: '#f44336',
            confirmButtonText: 'Yes, Continue!',
            cancelButtonText: 'No, Cancel'
        }).then((result) => {
            if (result.value) {
                let reqBody = {
                    "procedure": "sp_approve_deleted_data",
                    "parameters": {
                        "iv_table_name": item.table_name,
                        "iv_table_id_value": parseInt(item.id),
                        "iv_table_id_name": item.table_id_name,
                        "iv_approved_by": this.authService.currentUser?.username,
                        "c_1": "cv_1"
                    }
                }
                //console.log(reqBody);
                this.postProcedure(reqBody)
                    .subscribe((res:any) => {
                        // this._globalService.handleErrors(res, '', () => { refreshList() }, "Approval Done")
                    })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your record wasn\'t Approved :)',
                    'error'
                )
            }
        })
    }

    blockRequest(item: any, refreshList: any, resp_append?: string) {
        Swal.fire({
            title: 'Are you sure you want to block account?',
            text: item['errorMsg'] ? "Type some remarks" : item['errorMsg'],
            input: 'textarea',
            showCancelButton: true,
            confirmButtonColor: '#0074eb',
            cancelButtonColor: '#f44336',
            confirmButtonText: 'Yes, Continue!',
            cancelButtonText: 'No, Cancel'
        }).then((result) => {
            if (result.value) {
                let reqBody = {
                    "data": {
                        "id": item.id,
                        "blocked_by": this.authService.currentUser?.username,
                        "block_remarks": result.value
                    },
                    "query": item.query
                };
                //console.log(reqBody)
                this.postOperation(reqBody)
                    .subscribe((res:any) => {
                        //console.log(res);
                        if (res['status'] === 200) {
                            if (res['data'][0] === 1) {
                                Swal.fire(
                                    'Blocked!',
                                    'Your Record is Blocked. ' + resp_append,
                                    'success'
                                )
                                refreshList();
                            }
                        }
                    })

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your record wasn\'t Blocked',
                    'error'
                )
            } else {
                item['errorMsg'] = "You didn't fill the remarks! Try again.."
                this.blockRequest(item, refreshList, resp_append);
            }
        })
    }
    unBlockRequest(item: any, refreshList: any, resp_append?: string) {
        Swal.fire({
            title: 'Are you sure you want to unblock account?',
            text: "Type some remarks",
            input: 'text',
            showCancelButton: true,
            confirmButtonText: 'Yes, Continue!',
            cancelButtonText: 'No, Cancel',
            width: '400px'
        }).then((result) => {
            if (result.value) {
                let reqBody = {
                    "data": {
                        "id": item.id,
                        "unblocked_by": this.authService.currentUser?.username,
                        "unblocked_remarks": result.value
                    },
                    "query": item.query
                };
                //console.log(reqBody)
                this.postOperation(reqBody)
                    .subscribe((res: any) => {
                        //console.log(res);
                        if (res['status'] === 200) {
                            Swal.fire(
                                'Unblocked!',
                                'Your Record is Unblocked,' + resp_append,
                                'success'
                            )
                            refreshList();
                        }
                    })

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your Record wasn\'t Unblocked :)',
                    'error'
                )
            }
        })
    }
    confirmDeviceOperation(item: any, operation: any, refreshList: any) {
        let operatioName = operation.split('_').join(' ');
        Swal.fire({
            title: `Are you sure you want to ${operatioName}?`,
            showCancelButton: true,
            input: 'textarea',
            confirmButtonText: 'Yes, Continue!',
            cancelButtonText: 'No, Cancel',
            width: '400px',
            inputPlaceholder: "Write some reason(s) before you continue..."
        }).then((result) => {
            if (result.value) {
                let reqBody = {
                    "procedure": "sp_devices_operations",
                    "parameters": {
                        "iv_operation_type": operation,
                        "iv_id": item.id,
                        "iv_remarks":result.value,
                        "iv_operation_done_by": this.authService.currentUser?.username,
                        "c_1": "cv_1"
                    }
                }
                // console.log(reqBody)
                this.postProcedure(reqBody)
                    .subscribe((res: any) => {
                        //console.log(res);
                        if (res['status'] === 200) {
                            Swal.fire(
                                'Confirmed!',
                                'Successful Operation',
                                'success'
                            )
                            refreshList();
                        }
                    })

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Operation wasn\'t Successful',
                    'error'
                )
            }
        })
    }
    confirmCreateResource() {
        // event.stopPropagation()
        return Swal.fire({
            text: 'Sure to Create Record?',
            showCancelButton: true,
            confirmButtonText: 'Continue!',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#0074eb',
            cancelButtonColor: '#f44336',
            width: '400px'
        }).then((result) => {
            if (result.isConfirmed) {
                // //console.log(result.isConfirmed);
                this.getConfirmation.next(true)
                // return true;    
            } else if (result.isDenied) {
                //console.log("/////", result.isDenied);

                this.getConfirmation.next(false)
            }
            //console.log(this.getConfirmation);

        })
    }
    validateAccNo(value: string) {
        if (value.length < 5) {
            this.commissionNoValidator = "Number should have 5 or more digits";
        } else if (value.length > 20) {
            this.commissionNoValidator = "Number should less or 20 digits";
        } else {
            this.commissionNoValidator = ""
        }
        return this.commissionNoValidator;
    }
    validate10No(value: string) {
        let validatorTen;
        if (value.length > 10) {
            validatorTen = "Staff number should less or equal to 10 characters!";
        } else {
            validatorTen = null
        }
        return validatorTen;
    }
    imeiValidator(value: string) {
        let validator;
        if (value.length > 15) {
            validator = "IMEI number should less or equal to 15 characters!";
        } else {
            validator = null
        }
        return validator;
    }

}
