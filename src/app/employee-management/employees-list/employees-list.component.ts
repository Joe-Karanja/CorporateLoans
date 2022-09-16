import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApproveLimitDialogComponent } from './approve-limit-dialog/approve-limit-dialog.component';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  cardTitle = "Employees"
  loading: boolean;
  total: number = 23;
  pageSize: number = 23;
  page: number = 0;
  workflows: any = [
    {
      id:2,
      name: "Carlmas er3672",
      email:'b3njamin@rewy.eyeu',
      phone: '745373839',
      national_id: '523467389',
      staff_no: 'E0932',
      date:"april 2020",
      kra:'A0047453747H'
    },
    {
      id:3,
      name: "Caleb mutiso",
      email:'b3njamin@rewy.eyeu',
      phone: '745373839',
      national_id: '523467389',
      staff_no: 'E0032',
      date:"feb 2021",
      kra:'A000987453747H'
    },
    {
      id:4,
      name: "Benjamin jamin",
      email:'b3njamin@rewy.eyeu',
      phone: '745373839',
      national_id: '523467389',
      staff_no: 'E8732',
      date:"may 2016",
      kra:'A0047453747H'
    },
    {
      id:6,
      name: "Denniss Dama",
      email:'b3njamin@rewy.eyeu',
      phone: '745373839',
      national_id: '523467389',
      staff_no: 'E0932',
      date:"march 2012",
      kra:'A00474683947H'
    },
    {
      id:5,
      name: "Denniss Dama",
      email:'b3njamin@rewy.eyeu',
      phone: '745373839',
      national_id: '523467389',
      staff_no: 'E0932',
      date:"march 2012",
      kra:'A00474683947H'
    }
  ]
  constructor(
     private dialog: NgbModal,
     private router: Router) { }
  ngOnInit(): void {
    
  }
  uploadEmployee(){

  }
  downloadTemplate(){
    window.open('/assets/employee_upload.xlsx');
  }
  
 
  onQueryParamsChange(test: any) {
    test;
    
  }
  exportWorkflowXLSX(){
    
  }
  exportWorkflowPDF(){

  }
  approveLimit(data: any){
    this.dialog.open(ApproveLimitDialogComponent)
    .componentInstance.data = data
  }
  viewMore(data: any){
   this.router.navigate(['employees/manage/view/', data.id])
  }
  createEmployee(){
   this.router.navigate(['employees/manage/create']);
  }
  allChecked = false;
  indeterminate = true;
  checkOptionsOne = [
    { label: '', value: '', checked: false }
  ];

  updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this.checkOptionsOne = this.checkOptionsOne.map(item => ({
        ...item,
        checked: true
      }));
    } else {
      this.checkOptionsOne = this.checkOptionsOne.map(item => ({
        ...item,
        checked: false
      }));
    }
  }

  updateSingleChecked(i: any): void {
    if (this.checkOptionsOne.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.checkOptionsOne.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }
}
