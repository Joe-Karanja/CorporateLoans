import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-tiles',
  templateUrl: './dashboard-tiles.component.html',
  styleUrls: ['./dashboard-tiles.component.scss']
})
export class DashboardTilesComponent implements OnInit {
  @Input() public tilesData: any;
  tilesInfo: any;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.tilesInfo = this.tilesData
  }

}
