import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeesComponent } from './employees-list/create-employees/create-employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { ViewEmployeeComponent } from './employees-list/view-employee/view-employee.component';

const routes: Routes = [
  {
    path:'manage',
    component: EmployeesListComponent
  },
  {
    path:'manage/view/:id',
    component: ViewEmployeeComponent
  },
  {
    path:'manage/create',
    component: CreateEmployeesComponent
  },
  {
    path:'manage/edit/:id',
    component: CreateEmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeManagementRoutingModule { }
