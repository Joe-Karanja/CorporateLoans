import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disbursed-loans',
  templateUrl: './disbursed-loans.component.html',
  styleUrls: ['./disbursed-loans.component.scss']
})
export class DisbursedLoansComponent implements OnInit {


  cardTitle = "Disbursed Loans"
  loading: boolean;
  total: number = 23;
  pageSize: number = 23;
  page: number = 0;
  workflows: any = [
    {
      id:2,
      customer_name: "Benjamin jamin",
      status:'2',
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
      status:'2',
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
      status:'2',
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
      status:'2',
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
      status:'2',
      createdOn: '22nd',
      duration: '60',
      amount: '60000',
      fee:"1200",
      interest:'15',
      purpose:"test purpose written"
    }
  ]
  constructor( private router: Router) { }
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
   this.router.navigate(['loan-applications/view', data.id])
  }

}
