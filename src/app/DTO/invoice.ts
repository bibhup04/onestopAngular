export interface InvoiceDTO {
    id: number;
    planId: number;
    planDescription: string;
    finalPrice: number;
    emailId: string;
    userId: number;
    userName: string;
    billId: number;
    path: string;
    createdAt: Date;
  }
  