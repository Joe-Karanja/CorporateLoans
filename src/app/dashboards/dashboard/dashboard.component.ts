import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tilesData: any ={
    title1:'All Loan Applications',
    data1:'2432',

    title2:'Disbursed Loans',
    data2:'1120',

    title3: "Pending Disbursement",
    data3: '891',

    title4:'Loans Repayed',
    data4:'1660'

 
  }
  multi = [{
    "name": "Loans Value",
    "series": [
      {
        "name": "March",
        "value": 2601000
      },
      {
        "name": "April",
        "value": 3940000
      },
      {
        "name": "May",
        "value": 2503427
      },
      {
        "name": "June",
        "value": 4293400
      },
      {
        "name": "July",
        "value": 5079020
      },
      {
        "name": "August",
        "value": 10834000
      },
      {
        "name": "September",
        "value": 10290250
      },
      {
        "name": "October",
        "value": 11340020
      },
      {
        "name": "November",
        "value": 9831000
      },
      {
        "name": "December",
        "value": 20005000
      },

    ]
  }
  ]
  loanCounts = [{
    "name": "LOANS COUNT",
    "series": [
      {
        "name": "March",
        "value": 206
      },
      {
        "name": "April",
        "value": 391
      },
      {
        "name": "May",
        "value": 221
      },
      {
        "name": "June",
        "value": 140
      },
      {
        "name": "July",
        "value": 182
      },
      {
        "name": "August",
        "value": 108
      },
      {
        "name": "September",
        "value": 102
      },
      {
        "name": "October",
        "value": 34
      },
      {
        "name": "November",
        "value": 98
      },
      {
        "name": "December",
        "value": 200
      },

    ]
  }
  ]
  chartDetailsCount = {
    title:"Bank loan count Trend",
    xContAxisLabel: 'Transactions Date',
    yContAxisLabel: 'Loan Transactions Count',
    yAxisLabel: 'MONEY'
  }
  chartDetailsValue = {
    title:"Bank loan Value Trend",
    xContAxisLabel: 'Transactions Date',
    yContAxisLabel: 'Loan Transactions Count',
    yAxisLabel: 'MONEY'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
