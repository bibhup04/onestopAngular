import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { InvoiceDTO } from '../DTO/invoice';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  invoiceList: InvoiceDTO [] = [];

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


}
