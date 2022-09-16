import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductsComponent } from './products/products.component';
import { CreateProductsComponent } from './products/create-products/create-products.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductsComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule
  ]
})
export class ProductManagementModule { }
