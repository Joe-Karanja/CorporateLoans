import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { CreateEmployeesComponent } from './employees-list/create-employees/create-employees.component';
import { SharedModule } from '../common/shared.module';
import { ViewEmployeeComponent } from './employees-list/view-employee/view-employee.component';
import { ViewEmpLoansComponent } from './employees-list/view-emp-loans/view-emp-loans.component';
import { ApproveLimitDialogComponent } from './employees-list/approve-limit-dialog/approve-limit-dialog.component';
import { PersonalDetailsComponent } from './employees-list/create-employees/personal-details/personal-details.component';
import { ContactDetailsComponent } from './employees-list/create-employees/contact-details/contact-details.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { AdditionalInfoComponent } from './employees-list/create-employees/additional-info/additional-info.component';
import { FinalStepComponent } from './employees-list/create-employees/final-step/final-step.component';


@NgModule({
  declarations: [
    EmployeesListComponent,
    CreateEmployeesComponent,
    ViewEmployeeComponent,
    ViewEmpLoansComponent,
    ApproveLimitDialogComponent,
    PersonalDetailsComponent,
    ContactDetailsComponent,
    AdditionalInfoComponent,
    FinalStepComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InlineSVGModule,
    EmployeeManagementRoutingModule
  ],
  entryComponents:[
    ApproveLimitDialogComponent
  ]
})
export class EmployeeManagementModule { }
