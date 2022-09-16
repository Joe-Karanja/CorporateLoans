import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-corporate',
  templateUrl: './view-corporate.component.html',
  styleUrls: ['./view-corporate.component.scss']
})
export class ViewCorporateComponent implements OnInit {
  cardTitle: string = "Company Details"
  constructor() { }

  ngOnInit(): void {
  }

}
