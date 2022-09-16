import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewApplicationsComponent } from '../view-applications/view-applications.component';
import { DisburseLoanComponent } from './disbursed-loans/disburse-loan/disburse-loan.component';
import { DisbursedLoansComponent } from './disbursed-loans/disbursed-loans.component';
import { ListNewApplicationsComponent } from './list-new-applications/list-new-applications.component';
import { RepaymentLoansComponent } from './repayment-loans/repayment-loans.component';
import { VerifyApplicationsComponent } from './verify-applications/verify-applications.component';

const routes: Routes = [
  {
    path:'list',
    component: ListNewApplicationsComponent
  },
  {
    path:'verify/application/:id',
    component: VerifyApplicationsComponent
  },
  {
    path:'view/:id',
    component: ViewApplicationsComponent
  },
  {
    path:'disbursed/loans',
    component: DisbursedLoansComponent
  },
  {
    path:'disburse/loan',
    component: DisburseLoanComponent
  },
  {
    path:'repayment',
    component: RepaymentLoansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanApplicationsRoutingModule { }
