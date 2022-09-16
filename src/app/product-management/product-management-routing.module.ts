import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from '../employee-management/employees-list/employees-list.component';
import { CreateProductsComponent } from './products/create-products/create-products.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:"manage",
    component:ProductsComponent
  },
  {
    path:"manage/create",
    component:CreateProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
