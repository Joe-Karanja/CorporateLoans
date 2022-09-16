import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label-record-status',
  templateUrl: './label-record-status.component.html',
  styleUrls: ['./label-record-status.component.scss']
})
export class LabelRecordStatusComponent implements OnInit {

  label: any;
  labelClass: string;
  @Input() labelValue: any;

  constructor() { }
  ngOnInit(): void {
    if (this.labelValue === 1 || this.labelValue === '1') {
      this.label = 'approved';
      this.labelClass = 'badge badge-success mr-1';
    } else if (this.labelValue === 0 || this.labelValue === '0') {
      this.label = 'pending-create-approval';
      this.labelClass = 'badge badge-secondary mr-1';
    } else if (this.labelValue === 2 || this.labelValue === '2') {
      this.label = 'declined';
      this.labelClass = 'badge badge-danger mr-1';
    } else if (this.labelValue === 3 || this.labelValue === '3') {
      this.label = 'pending-edit-approval';
      this.labelClass = 'badge badge-info mr-1';
    } else if (this.labelValue === 4 || this.labelValue === '4') {
      this.label = 'approved';
      this.labelClass = 'badge badge-success mr-1';
    } else if (this.labelValue === 5 || this.labelValue === '5') {
      this.label = 'pending-delete-approval';
      this.labelClass = 'badge badge-danger mr-1';
    } else if (this.labelValue === 6 || this.labelValue === '6') {
      this.label = 'blocked';
      this.labelClass = 'badge badge-danger mr-1';
    } else if (this.labelValue === 7 || this.labelValue === '7') {
      this.label = 'pending-unblock-approval';
      this.labelClass = 'badge badge-warning mr-1';
    } else if (this.labelValue === 8 || this.labelValue === '8') {
      this.label = 'approved';
      this.labelClass = 'badge badge-success mr-1';
    } else if (this.labelValue === 9 || this.labelValue === '9') {
      this.label = 'pending-link-approval';
      this.labelClass = 'badge badge-warning mr-1';
    } else if (this.labelValue === 11 || this.labelValue === '11') {
      this.label = 'pending-unlink-approval';
      this.labelClass = 'badge badge-warning mr-1';
    }

  }

}
