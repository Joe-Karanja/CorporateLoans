import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { SharedModule } from '../common/shared.module';


@NgModule({
  declarations: [
    ListUsersComponent,
    CreateUsersComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
