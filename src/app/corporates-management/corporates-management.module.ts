import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporatesManagementRoutingModule } from './corporates-management-routing.module';
import { ManageCorporatesComponent } from './manage-corporates/manage-corporates.component';
import { CreateCorporatesComponent } from './manage-corporates/create-corporates/create-corporates.component';
import { ViewCorporateComponent } from './manage-corporates/view-corporate/view-corporate.component';
import { SharedModule } from '../common/shared.module';
import { ViewCompanyLoansComponent } from './manage-corporates/view-corporate/view-company-loans/view-company-loans.component';



@NgModule({
  declarations: [
    ManageCorporatesComponent,
    CreateCorporatesComponent,
    ViewCorporateComponent,
    ViewCompanyLoansComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CorporatesManagementRoutingModule
  ]
})
export class CorporatesManagementModule { }
