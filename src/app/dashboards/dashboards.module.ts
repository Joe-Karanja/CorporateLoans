import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../common/shared.module';
import { LineChartLoansCountComponent } from './line-chart-loans-count/line-chart-loans-count.component';
import { LineChartLoansValueComponent } from './line-chart-loans-value/line-chart-loans-value.component';
import { DashboardTilesComponent } from './dashboard-tiles/dashboard-tiles.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LineChartLoansCountComponent,
    LineChartLoansValueComponent,
    DashboardTilesComponent,
    HrDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
