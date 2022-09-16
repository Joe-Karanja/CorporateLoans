import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ng-zorro-antd
import { NzTableModule } from 'ng-zorro-antd/table';
// import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule} from 'ng-zorro-antd/card';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
// import { SuccessLabelComponent } from './components/success-label/success-label.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";

import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LabelActiveComponent } from './components/labels/label-active/label-active.component';
import { LabelApprovedComponent } from './components/labels/label-approved/label-approved.component';
import { LabelBlockUnblockComponent } from './components/labels/label-blocks/label-block-unblock.component';
import { LabelBooleanComponent } from './components/labels/label-boolean/label-boolean.component';
import { LabelCompletedComponent } from './components/labels/label-completed/label-completed.component';
import { LabelRecordStatusComponent } from './components/labels/label-record-status/label-record-status.component';
import { LabelSuperAdminComponent } from './components/labels/label-super-admin/label-super-admin.component';


@NgModule({
  declarations: [
    LabelActiveComponent,
    LabelApprovedComponent,
    LabelBlockUnblockComponent,
    LabelBooleanComponent,
    LabelCompletedComponent,
    LabelRecordStatusComponent,
    LabelSuperAdminComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzTransferModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzCardModule,
    NzMessageModule,
    NzModalModule,
    NzMenuModule,
    NzCheckboxModule,
    NzDropDownModule,
    NzIconModule,
    NzPaginationModule,
    NzDatePickerModule,
    NzListModule,
    NzGridModule,
    NzDividerModule,
    NzTagModule,
    NzLayoutModule,
    NzSpaceModule,
    ReactiveFormsModule,
    FormsModule,
    //MATERIAL

    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,

    //swimlane

    NgxChartsModule
  ],
  exports: [
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    LabelActiveComponent,
    LabelApprovedComponent,
    LabelBlockUnblockComponent,
    LabelBooleanComponent,
    LabelCompletedComponent,
    LabelRecordStatusComponent,
    LabelSuperAdminComponent,
     //MATERIAL
     MatButtonModule,
     MatButtonToggleModule,
     MatMenuModule,
     MatIconModule,
     MatCardModule,
     MatStepperModule,
     MatFormFieldModule,
     MatInputModule,

    NzTableModule,
    NzTransferModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzCardModule,
    NzMessageModule,
    NzModalModule,
    NzMenuModule,
    NzCheckboxModule,
    NzDropDownModule,
    NzIconModule,
    NzPaginationModule,
    NzDatePickerModule,
    NzListModule,
    NzGridModule,
    NzDividerModule,
    NzTagModule,
    NzLayoutModule,
    NzSpaceModule
  ],
  entryComponents:[
    LabelActiveComponent,
    LabelApprovedComponent,
    LabelBlockUnblockComponent,
    LabelBooleanComponent,
    LabelCompletedComponent,
    LabelRecordStatusComponent,
    LabelSuperAdminComponent
  ]
})
export class SharedModule { }
