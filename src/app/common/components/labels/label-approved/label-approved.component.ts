import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label-approved',
  templateUrl: './label-approved.component.html',
  styleUrls: ['./label-approved.component.scss']
})
export class LabelApprovedComponent implements  OnInit {
  label: any;
  labelClass: string;
  @Input() labelValue: any;

  constructor() {}
ngOnInit(): void {
    if ( this.labelValue === 1 || this.labelValue === '1' || this.labelValue === true || this.labelValue === 'true' || this.labelValue === 'TRUE') {
      this.label = 'approved';
      this.labelClass = 'badge badge-success mr-1';
    } else if (this.labelValue === 0 || this.labelValue === '0' || this.labelValue === false || this.labelValue === 'false' || this.labelValue === 'FALSE') {
      this.label = 'pending';
      this.labelClass = 'badge badge-warning mr-1';
    } else {
      this.label = 'Not set';
      this.labelClass = 'badge badge-default mr-1';
    }
  
  }
}
