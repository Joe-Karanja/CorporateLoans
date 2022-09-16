import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart-loans-count',
  templateUrl: './line-chart-loans-count.component.html',
  styleUrls: ['./line-chart-loans-count.component.scss']
})
export class LineChartLoansCountComponent implements OnInit {
  @Input() public multi: any
  @Input() public chartDetailsC: any
  @Input() public loanCounts: any
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
  public yAxisLabel = 'MONEY';
  public showYAxisLabel = true;
 
  public colorScheme: any = {
    domain: ['#093273', '#35d300', '#f1bd12', '#2F3E9E', '#AAAAAA']
  };
  results: any;
  countResults: any;
  ngOnInit(): void {

  }
  constructor() {
  //  this.xContAxisLabel = 'Transactions Date';
  //   this.yContAxisLabel = 'Loan Transactions Count';
  //   this.yAxisLabel = 'MONEY';
  }
  ngOnChanges() {
    // this.results = this.multi
    this.countResults = this.loanCounts
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
