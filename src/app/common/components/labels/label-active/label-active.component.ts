import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label-active',
  templateUrl: './label-active.component.html',
  styleUrls: ['./label-active.component.scss']
})
export class LabelActiveComponent implements  OnInit {
  label: any;
  labelClass: string;
  @Input() labelValue: any;

  constructor() {}
ngOnInit(): void {
    if ( this.labelValue === 1 || this.labelValue === '1' || this.labelValue === true || this.labelValue === 'true' || this.labelValue === 'TRUE') {
      this.label = 'Active';
      this.labelClass = 'badge badge-success mr-1';
    } else if (this.labelValue === '0' || this.labelValue !== '1' || this.labelValue === false || this.labelValue === 'false' || this.labelValue === 'FALSE') {
      this.label = 'Inactive';
      this.labelClass = 'badge badge-secondary mr-1';
    } else {
      this.label = 'Inactive';
      this.labelClass = 'badge badge-default mr-1';
    }
  
  }
}
