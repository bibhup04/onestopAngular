import { Component } from '@angular/core';
import { BillingDTO, CollectionDTO } from '../DTO/bill';
import { BillService } from '../service/bill.service';
import { catchError } from 'rxjs';
import { CollectionService } from '../service/collection.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {

  bill: Partial<BillingDTO> = {}
  collectionDTO: Partial<CollectionDTO> = {}
  showPaymentOptions: boolean = false;

  showNetBankingForm: boolean = false;
  showCardForm: boolean = false;
  showUpiForm: boolean = false;

  cardNumber: string = '';
  validThru: string = '';
  cvv: string = '';
  upiId:string = '';

  constructor (private billingService: BillService, private collectionService: CollectionService) {}

  ngOnInit(){
    this.getBill();
  }

  getBill(){
    this.billingService.getLastBill().pipe(
      catchError((error) => {
        console.error('Error from the server', error);
        throw error;
      })
    ).subscribe((data) => {
          this.bill = data;
          console.log('Data from the server', this.bill);
        });
  }

  showCardFormMethod() {
    this.showCardForm = true;
    this.showNetBankingForm = false;
    this.showUpiForm = false;
  }

  showNetBankingFormMethod() {
    this.showNetBankingForm = true;
    this.showUpiForm = false;
    this.showCardForm = false;
  }

  showUpiFormMethod() {
    this.showUpiForm = true;
    this.showNetBankingForm = false;
    this.showCardForm = false;
  }

  makePayment(paymentType: string) {

    if (paymentType === 'CARD') {
      if (this.cardNumber == '' || this.validThru == '' || this.cvv == '' ) {
        alert('Please fill out all card details.');
        return;
      }
      else{
        this.pay();
      }
 
    } else if (paymentType === 'UPI') {
      if (this.upiId == '' ) {
        alert('Please fill out UPI ID.');
        return;
      }
      else{
        this.pay();
      }
    
    }
  
  }
  
  pay(){
    this.collectionDTO.userId = this.bill.userId;
    this.collectionDTO.billId = this.bill.billingId;
    this.collectionDTO.subscriptionId = this.bill.subscriptionId;
    this.collectionDTO.amountCollected = this.bill.amount;

    this.collectionService.payment(this.collectionDTO).pipe(
      catchError((error) => {
        console.error('Error from the server', error);
        throw error;
      })
    ).subscribe((data) => {
          console.log('payment successful', data);
          this.ngOnInit();
    });

  }

}
