import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent implements OnInit {
  tilesData: any = {
    title1: 'Onboarded Employees',
    data1: '432',

    title2: 'Loans Applied',
    data2: '120',

    title3: "Loans Disbursed",
    data3: '89',

    title4: 'Loans Repayed',
    data4: '60',


  }

  multi = [{
    "name": "Loans Value",
    "series": [
      {
        "name": "March",
        "value": 20000
      },
      {
        "name": "April",
        "value": 340000
      },
      {
        "name": "May",
        "value": 203427
      },
      {
        "name": "June",
        "value": 493400
      },
      {
        "name": "July",
        "value": 579020
      },
      {
        "name": "August",
        "value": 1834000
      },
      {
        "name": "September",
        "value": 1290250
      },
      {
        "name": "October",
        "value": 1134002
      },
      {
        "name": "November",
        "value": 983100
      },
      {
        "name": "December",
        "value": 2000500
      },

    ]
  }
  ]
  loanCounts = [{
    "name": "LOANS COUNT",
    "series": [
      {
        "name": "March",
        "value": 20
      },
      {
        "name": "April",
        "value": 39
      },
      {
        "name": "May",
        "value": 22
      },
      {
        "name": "June",
        "value": 14
      },
      {
        "name": "July",
        "value": 18
      },
      {
        "name": "August",
        "value": 10
      },
      {
        "name": "September",
        "value": 10
      },
      {
        "name": "October",
        "value": 34
      },
      {
        "name": "November",
        "value": 91
      },
      {
        "name": "December",
        "value": 21
      },

    ]
  }
  ]
  chartDetailsCount = {
    title:"Company loan count Trend",
    xContAxisLabel: 'Transactions Date',
    yContAxisLabel: 'Loan Transactions Count',
    yAxisLabel: 'MONEY'
  }
  chartDetailsValue = {
    title:"Company loan Value Trend",
    xContAxisLabel: 'Transactions Date',
    yContAxisLabel: 'Loan Transactions Count',
    yAxisLabel: 'MONEY'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
