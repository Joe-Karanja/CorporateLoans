import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-corporates',
  templateUrl: './manage-corporates.component.html',
  styleUrls: ['./manage-corporates.component.scss']
})
export class ManageCorporatesComponent implements OnInit {

  cardTitle = "Corporates"
  loading: boolean;
  total: number = 23;
  pageSize: number = 23;
  page: number = 0;
  workflows: any = [
    {
      id:2,
      company_name: "PRINCE LIMITED",
      reg_no:'23628332030--3',
      email: 'info@princelimited.co.ke',
      revenue_authority: '60',
      branch: 'AFRI Nairobi',
      postal_address:"AFRI LIMITED. P.O BOX 12196",
      account_no:'1114537378205',
      postal:'1114537378205',
    },
    {
      id:2,
      company_name: "Afripop Feeds",
      reg_no:'325362734',
      email: 'afripop@cdpsa@com',
      revenue_authority: 'A363483232723Z',
      branch: 'Nyeri branch',
      postal_address:"1NK SACCO LIMITED. P.O BOX 12196,. NYERI 10109",
      account_no:'0001121232339',
    }
  
  ]
  constructor( private router: Router) { }
  ngOnInit(): void {
    
  }
  onQueryParamsChange(test: any) {
    test;
    
  }
  create(){
    this.router.navigate(['corporates/manage/create']);
  }
  uploadCorporates(){

  }
  downloadTemplate(){
    window.open('/assets/employee_upload.xlsx');
  }
  exportWorkflowXLSX(){
    
  }
  exportWorkflowPDF(){

  }
  viewMore(data: any){
   this.router.navigate(['corporates/manage/view', data.id])
  }

}
