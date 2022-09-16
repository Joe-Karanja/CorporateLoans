import { Injectable } from '@angular/core';
import * as moment from 'moment';
// import { logo_scb } from 'src/assets/logo-file/logoFile';

@Injectable({
  providedIn: 'root'
})
export class PdfReportsService {
  data: any;
  dataSet: any;
  trx_status: string;

  constructor() {
  }

  onCustomAction(event: any) {
    event
  }
  getDocumentDefinition(data: any, title: string, widths?: any[]) {
    this.dataSet = data;


    return {
      info: {
        title: title.toLowerCase(),
        author: "eclectics",
        subject: "subject of document",
        keywords: "keywords for document"
      },
      footer: {
        columns: [
          '',
          {
            style: "footerStyle",
            alignment: 'right',
            text: 'Footer text'
          }
        ],
        margin: [10, 0]
      },
      content: [
        {
          text: title,
          bold: true,
          fontSize: 10,
          fontFamily: "monospace",
          alignment: "center",
          style: "bodyStyles",
           // margin: [left, top, right, bottom]
          fit: [80, 50]
        },
        {
          columns: [
            {
              image: "logo_scb", //add logo variable
              fit: [80, 50],
              // margin: [left, top, right, bottom]
              margin: [0, 0, 0, 20]
            },
            [

              {
                text: moment().format('DD/MM/YY, HH:mm'),
                style: "time"
              }
            ]
          ],

        },

        {
          columns: [
            {
              name: "tableBody",
              style: "tableBStyles",
              layout: 'lightHorizontalLines',
              table: {
                headerRows: 1,
                widths: widths,
                body: this.dataSet,
              },
            },
          ],
        },
      ],
      styles: {
        Group: {
          fontSize: 10,
          alignment: "right",
          bold: true,
          backgroundColor: "#0074eb",
          fontFamily: "monospace",
          margin:[0, 10, 0, 0]
        },
        time: {
          fontSize: 9,
          bold: true,
          color: "#0074eb",
          alignment: "right",
          margin:[0, 10, 0, 0]

        },
        subGroup: {
          fontSize: 8,
          bold: true,
          backgroundColor: "#0074eb",
          fontFamily: "monospace",
          color: "#0074eb",
          alignment: "right"
        },
        header: {
          alignment: "right"
        },
        bodyStyles: {
          // background:'#d3d3d3'
          // border: "0px",
         
        },
        tableBg: {
          backgroundColor: "#0074eb",
          border: "noBorders"
        },
        tableBStyles: {
          fontSize: 3,
          bold: false
        },
        tableHeader: {
          fontSize: 4,
          bold: true,
          margin: [0, 0, 0, 0],
          color: "#FFFFFF",
          fillColor: "#0074eb"
          // background:'#d3d3d3'
        },
        footerStyle: {
          fontSize: 9,
          bold: true,
          color: "#FFFFFF",
          fillColor: "#0074eb"
          // background:'#d3d3d3'
        },
      },
    };
  }
}

