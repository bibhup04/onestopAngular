import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { InvoiceDTO, InvoiceIdDTO } from '../DTO/invoice';
import { InvoiceService } from '../service/invoice.service';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  invoiceList: InvoiceDTO [] = [];
  invoiceIdDTO: InvoiceIdDTO = { invoiceId: 0 }; 

  constructor (private invoiceService: InvoiceService){}

  ngOnInit(){
    this.getInvoiceList();

  }

  
  getInvoiceList(){
   
    this.invoiceService.getData().pipe(
      catchError((error) => {
        console.error('Error from the server', error);
        throw error;
      })
    ).subscribe((data) => {
          this.invoiceList = data;
          console.log('Data from the server', this.invoiceList);
          this.invoiceList.forEach((invoice) => {
            console.log('Plan Id:', invoice.planDescription);
          });
        });

  }

  // viewInvoice(invoiceId: number) {

  //   console.log('View invoice with ID:', invoiceId);
  //   this.invoiceIdDTO.invoiceId = invoiceId;
  //   this.invoiceService.displayPdf(this.invoiceIdDTO).pipe(
  //     catchError((error) => {
  //       console.error('Error from the server', error);
  //       throw error;
  //     })
  //   ).subscribe((data) => {
  //         console.log('Invoice recieved');
  //       });
  
  // }


  viewInvoice(invoiceId: number) {
    console.log('View invoice with ID:', invoiceId);
    this.invoiceIdDTO.invoiceId = invoiceId;
    this.invoiceService.displayPdf(this.invoiceIdDTO).subscribe(
      (data) => {
        console.log('Invoice received');
        if (data.body) {
          const file = new Blob([data.body], { type: 'application/pdf' });
          const fileURL = URL.createObjectURL(file);
          const newWindow = window.open(fileURL, '_blank');
          if (!newWindow) {
            alert('Please allow pop-ups for this website');
          }
        } else {
          console.error('Response body is null');
        }
      },
      (error) => {
        console.error('Error from the server', error);
        // Additional error handling logic if required
      }
    );
  }
  
  


}
