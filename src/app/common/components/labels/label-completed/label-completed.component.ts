import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label-completed',
  templateUrl: './label-completed.component.html',
  styleUrls: ['./label-completed.component.scss']
})
export class LabelCompletedComponent implements OnInit {
  label: any;
  labelClass: string;
  renderValue: string;
  @Input() value: any;
  @Input() rowData: any;
  constructor() { }

ngOnInit() {
    if ( this.value === 0||  this.value ==='0' ) {
      this.label = 'Pending';
      this.labelClass = 'red';
    } else if (this.value === 1 || this.value ==='1' ) {
      this.label = 'Repayed';
      this.labelClass = 'green';
    } else if (this.value === 2 || this.value ==='2' ) {
      this.label = 'Disbursed';
      this.labelClass = 'blue';
    } else {
      this.label = 'Not set';
      this.labelClass = 'lime';
    }
   this.renderValue = this.value.toString().toUpperCase();
  }

}
