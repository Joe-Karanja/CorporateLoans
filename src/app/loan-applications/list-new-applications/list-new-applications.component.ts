import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewEmpLoansComponent } from 'src/app/employee-management/employees-list/view-emp-loans/view-emp-loans.component';
import { ViewApplicationsComponent } from 'src/app/view-applications/view-applications.component';
import { ViewApplicationComponent } from './view-application/view-application.component';

@Component({
  selector: 'app-list-new-applications',
  templateUrl: './list-new-applications.component.html',
  styleUrls: ['./list-new-applications.component.scss']
})
export class ListNewApplicationsComponent implements OnInit {

  cardTitle = "Loan Applications"
  loading: boolean;
  total: number = 23;
  pageSize: number = 23;
  page: number = 0;
  workflows: any = [
    {
      id:2,
      customer_name: "Benjamin jamin",
      status:'0',
      createdOn: '22nd',
      duration: '60',
      amount: '60000',
      fee:"1200",
      interest:'15',
      purpose:"test purpose written"
    },
    {
      id:3,
      customer_name: "Benjamin jamin",
      status:'0',
      createdOn: '22nd',
      duration: '60',
      amount: '60000',
      fee:"1200",
      interest:'15',
      purpose:"test purpose written"
    },
    {
      id:4,
      customer_name: "Benjamin jamin",
      status:'0',
      createdOn: '22nd',
      duration: '60',
      amount: '60000',
      fee:"1200",
      interest:'15',
      purpose:"test purpose written"
    },
    {
      id:6,
      customer_name: "Benjamin jamin",
      status:'0',
      createdOn: '22nd',
      duration: '60',
      amount: '60000',
      fee:"1200",
      interest:'15',
      purpose:"test purpose written"
    },
    {
      id:5,
      customer_name: "Benjamin jamin",
      status:'0',
      createdOn: '22nd',
      duration: '60',
      amount: '60000',
      fee:"1200",
      interest:'15',
      purpose:"test purpose written"
    }
  ]
  constructor( 
    private modal: NgbModal,   
    private router: Router) { }
  ngOnInit(): void {
    
  }
  onQueryParamsChange(test: any) {
    test;
    
  }
  exportWorkflowXLSX(){
    
  }
  exportWorkflowPDF(){

  }
  viewMore(data: any){
    this.modal.open(ViewApplicationComponent)
    .componentInstance.data = data
  //  this.router.navigate(['loan-applications/view', data.id])
  }

}
