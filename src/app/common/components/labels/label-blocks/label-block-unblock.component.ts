import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label-block-unblock',
  templateUrl: './label-block-unblock.component.html',
  styleUrls: ['./label-block-unblock.component.scss']
})
export class LabelBlockUnblockComponent implements OnInit {

  label: any;
  labelClass: string;
  @Input() labelValue: any;

  constructor() {}
ngOnInit(): void {
    if ( this.labelValue === 1 || this.labelValue === '1') {
      this.label = 'blocked';
      this.labelClass = 'badge badge-danger mr-1';
    } else if (this.labelValue === 2 || this.labelValue === '2') {
      this.label = 'PendingUnblockApproval';
      this.labelClass = 'badge badge-warning mr-1';
    }else if (this.labelValue === 6 || this.labelValue === '6') {
      this.label = 'blocked';
      this.labelClass = 'badge badge-danger mr-1';
    } else {
      this.label = 'Not set';
      this.labelClass = 'badge badge-default mr-1';
    }
  
  }
}
