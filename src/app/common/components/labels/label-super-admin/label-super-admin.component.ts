import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label-super-admin',
  templateUrl: './label-super-admin.component.html',
  styleUrls: ['./label-super-admin.component.scss']
})
export class LabelSuperAdminComponent implements OnInit {

  label: any;
  labelClass: string;
  @Input() labelValue: any;

  constructor() { }

  ngOnInit(): void {
    if (this.labelValue === 1 || this.labelValue === '1') {
      this.label = 'super admin';
      this.labelClass = 'badge badge-info mr-1';
    } else {
      this.label = 'normal user';
      this.labelClass = 'badge badge-secondary mr-1';
    }
  }

}
