import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart-loans-value',
  templateUrl: './line-chart-loans-value.component.html',
  styleUrls: ['./line-chart-loans-value.component.scss']
})
export class LineChartLoansValueComponent implements OnInit {

 @Input() public multi: any
 @Input() public chartDetailsV: any
    /**SWIMLANE CONFIGS  */
    view: any = [800, 300]
    public autoScale = true;
    public showXAxis = true;
    public showYAxis = true;
    public gradient = true;
    public showLegend = true;
    // public animations = true;
    public legendPosition: any = 'below';
    public showXAxisLabel = true;
    public xContAxisLabel = 'Transactions Date';
    yContAxisLabel = 'Loan Transactions Count';
    public showYAxisLabel = true;
    public yAxisLabel = 'MONEY';
    public colorScheme: any = {
      domain: ['#093273', '#35d300', '#f1bd12', '#2F3E9E', '#AAAAAA']
    };
  result: any;
  ngOnInit(): void {

  }
  constructor() {
   
  }
  ngOnChanges(){
    this.result = this.multi;
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}
