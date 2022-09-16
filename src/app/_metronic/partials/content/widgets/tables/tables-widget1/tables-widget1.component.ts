import { Component } from '@angular/core';

@Component({
  selector: 'app-tables-widget1',
  templateUrl: './tables-widget1.component.html',
})
export class TablesWidget1Component {
  cardTitle = "Test table"
  loading: boolean;
  total: number = 23;
  pageSize: number = 23;
  page: number = 0;
  workflows: any = [
    {
      name: "workflow1",
      isActive:'active',
      createdOn: '22nd',
      remarks:"workflow 1tests"
    }
  ]
  constructor() { }
  onQueryParamsChange(test: any) {
    test;
    
  }
}
