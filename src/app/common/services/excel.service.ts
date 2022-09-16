import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import 'jspdf-autotable';
import { Workbook } from 'exceljs';
import { DatePipe } from '@angular/common';
import * as fs from 'file-saver';

// import { logoBase64 } from 'src/assets/logo-file/logoFile';
import * as moment from 'moment';
import jsPDF from 'jspdf';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor(
    private datePipe: DatePipe
  ) { }
  /** Generates Excel exports */
  public exportAsExcelFile(json: any, excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + moment(new Date().getTime(), "").format('DD/MM/YY, HH:mm:ss') + EXCEL_EXTENSION);
  }
  /** Generates pdf exports */
  generatePdfFile(headers: any, data: any, title: string) {
    //console.log(data);
    let img = 'data:image/png;base64,' // + logoBase64;
    console.log(img)
    let doc = new jsPDF('landscape')//.then((canvas) => { })
    // doc.setFont("helvetica");
    // doc.setFontSize(4);
    doc.text(title, 14, 30);
    doc.setFontSize(4);
    doc.setTextColor(40);
    // doc.addImage(img, 'png', 50, 50, 50, 50 );
    (doc as any).autoTable({
      head: headers,
      // styles: { fillColor: [235, 0, 0] },
      columnStyles: { 4: { halign: 'left'} }, // Cells in first column centered and green
      margin: { top: 10 },
      body: data,
      showFoot: 'everyPage',//|'lastPage'|'never' = 'everyPage''
      theme: 'striped', //'striped'|'grid'|'plain'|'css' = 'striped'
      didDrawCell: (data:any) => {
        // console.log(data.column.index)
      }
    })
   
    doc.setProperties({

    })
    // doc.addImage(img, 'JPEG', 0, 0, canvas.width, canvas.height);
    // Open PDF document in new tab
    // doc.output('dataurlnewwindow')
    // Download PDF document  
    doc.save(title + '_report_' + moment(new Date().getTime(), '').format('DD/MM/YY, HH:mm') + '.pdf');
  }


  generateExcel(transaction_data: any, headers: [], titles: string) {
    const title = titles;
    const header = headers;
    const data = transaction_data
    // console.log("data", data);

    // Create workbook and worksheet
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet(title);

    // Add Row and formatting
    const titleRow = worksheet.addRow([title]);
    titleRow.font = { name: 'helvetica', family: 4, size: 14, underline: false, bold: true };
    worksheet.addRow([]);
    worksheet.addRow(['Date : ' + moment(new Date(), '').format('DD/MM/YY, HH:mm')]);
    // Add Image
    const logo = workbook.addImage({
      base64: 'logoBase64', // add image url link
      extension: 'png',
    });
    worksheet.addImage(logo, 'F1:F3');
    worksheet.mergeCells('A1:D2');
    // Blank Row
    worksheet.addRow([]);
    // Add Header Row
    const headerRow = worksheet.addRow(header);
    // Cell Style : Fill and Border
    headerRow.eachCell((cell: any, number: number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '0074Eb' },
        bgColor: { argb: 'FF0000FF' }
      };
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    });
    // worksheet.addRows(data);
    // Add Data and Conditional Formatting
    data ? data.forEach((element: any) => {
      const row = worksheet.addRow(element);
      const qty: any = row.getCell(5);
      let color = 'FF99FF99';
      if (+qty.value < 500) {
        color = 'FFFFFF';
      }
      qty.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: color }
      };
    }
    ) : '';
    worksheet.getColumn(1).width = 23;
    worksheet.getColumn(2).width = 23;
    worksheet.getColumn(3).width = 23;
    worksheet.getColumn(4).width = 24;
    worksheet.getColumn(5).width = 22;
    worksheet.getColumn(6).width = 24;
    worksheet.getColumn(7).width = 23;
    worksheet.getColumn(8).width = 23;
    worksheet.getColumn(9).width = 23;
    worksheet.getColumn(10).width = 23;
    worksheet.getColumn(11).width = 23;
    worksheet.getColumn(12).width = 20;
    worksheet.getColumn(13).width = 20;
    worksheet.getColumn(14).width = 20;
    worksheet.getColumn(15).width = 20;
    worksheet.getColumn(16).width = 23;
    worksheet.getColumn(17).width = 23;
    worksheet.getColumn(18).width = 23;
    worksheet.getColumn(18).width = 23;
    worksheet.addRow([]);
    // Footer Row
    // const footerRow = worksheet.addRow(['Standard chatered bank agency banking reports 2021']);
    // footerRow.getCell(1).fill = {
    //   type: 'pattern',
    //   pattern: 'solid',
    //   fgColor: { argb: 'FFCCFFE5' }
    // };
    // footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    // Merge Cells
    // worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`);
    // Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data: any) => {
      const date = new Date();
      moment(date, '').format('YYYY-dd-MM, HH:mm')
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, title + '_' + moment(date, '').format('DD/MM/YY, HH:mm') + '.xlsx');
    });

  }
}


