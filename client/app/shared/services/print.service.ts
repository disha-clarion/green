// core imports
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// third party imports
import * as jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import { NgxSpinnerService } from "ngx-spinner";
// (window as any).html2canvas = html2canvas;

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor(@Inject(DOCUMENT) private document: Document,
    private spinner: NgxSpinnerService) { }

  // generate pdf
  generatePdf(fileName: String) {
    // show spinner
    this.spinner.show();
    const div = this.document.getElementsByTagName("body")[0]; //document.getElementsByTagName("body")[0];
    const options = { background: "white", height: div.clientHeight, width: div.clientWidth };

    // hide controls
    let elements: HTMLCollectionOf<Element> = this.document.getElementsByClassName('ignorePdf');
    Array.from(elements).forEach(element => {
      element.classList.add("hide");
    });

    html2canvas(div, options).then((canvas) => {
      const imgWidth = 214;
      // const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      // const heightLeft = imgHeight;
      // const contentDataURL = canvas.toDataURL('image/png');
      const position = 0;

      //Initialize JSPDF
      let doc = new jsPDF("p", "mm", "a4", 1);
      //Converting canvas to Image
      let imgData = canvas.toDataURL("image/PNG");
      //Add image Canvas to PDF
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
      let pdfOutput = doc.output();
      // using ArrayBuffer will allow you to put image inside PDF
      let buffer = new ArrayBuffer(pdfOutput.length);
      let array = new Uint8Array(buffer);
      for (let i = 0; i < pdfOutput.length; i++) {
        array[i] = pdfOutput.charCodeAt(i);
      }

      //Name of pdf
      const fileNameFullName = `${fileName}.pdf`;

      // Make file
      doc.save(fileNameFullName);

      // show controls
      Array.from(elements).forEach(element => {
        element.classList.remove("hide");
        // element.classList.add("show");
      });
      // show spinner
      this.spinner.hide();
    });
  }
}
