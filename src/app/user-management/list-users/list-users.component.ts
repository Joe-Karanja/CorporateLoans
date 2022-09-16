import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {


  cardTitle = "USERS List"
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
  constructor( private router: Router) { }
  ngOnInit(): void {
    
  }
  uploadEmployee(){

  }
 
  onQueryParamsChange(test: any) {
    test;
    
  }
  exportWorkflowXLSX(){
    
  }
  exportWorkflowPDF(){

  }
  viewMore(data: any){
   this.router.navigate(['employees/manage/view/', data.id])
  }
  createUser(){
   this.router.navigate(['users/create']);
  }

}
