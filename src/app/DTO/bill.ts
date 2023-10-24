export interface BillingDTO {
    billingId: number;
    subscriptionId: number;
    userId: number;
    createdAt: Date;
    amount: number;
    paymentStatus: string;
  }

  export interface CollectionDTO {
    subscriptionId?: number;
    userId?: number;
    amountCollected?: number;
    billId?: number;
}


  