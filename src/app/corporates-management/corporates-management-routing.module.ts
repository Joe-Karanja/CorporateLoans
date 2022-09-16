import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCorporatesComponent } from './manage-corporates/create-corporates/create-corporates.component';
import { ManageCorporatesComponent } from './manage-corporates/manage-corporates.component';
import { ViewCorporateComponent } from './manage-corporates/view-corporate/view-corporate.component';

const routes: Routes = [
  {
    path:'manage',
    component: ManageCorporatesComponent

  },
  {
    path:'manage/create',
    component: CreateCorporatesComponent
  },
  {
    path:'manage/view/:id',
    component: ViewCorporateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporatesManagementRoutingModule { }
