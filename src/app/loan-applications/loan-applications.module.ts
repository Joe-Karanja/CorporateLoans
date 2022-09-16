import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanApplicationsRoutingModule } from './loan-applications-routing.module';
import { ListNewApplicationsComponent } from './list-new-applications/list-new-applications.component';
import { VerifyApplicationsComponent } from './verify-applications/verify-applications.component';
import { SharedModule } from '../common/shared.module';
import { DisbursedLoansComponent } from './disbursed-loans/disbursed-loans.component';
import { RepaymentLoansComponent } from './repayment-loans/repayment-loans.component';
import { DisburseLoanComponent } from './disbursed-loans/disburse-loan/disburse-loan.component';
import { ViewApplicationComponent } from './list-new-applications/view-application/view-application.component';


@NgModule({
  declarations: [
    ListNewApplicationsComponent,
    VerifyApplicationsComponent,
    DisbursedLoansComponent,
    RepaymentLoansComponent,
    DisburseLoanComponent,
    ViewApplicationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoanApplicationsRoutingModule
  ]
})
export class LoanApplicationsModule { }
