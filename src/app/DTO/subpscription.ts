export interface SubscriptionDTO {
    subscriptionId: number;
    familyId: number;
    userId: number;
    planId: number;
    finalPrice: number;
    createdAt: Date;
    endDate: Date;
    status: string;
    autoRenewal: boolean;
  }
  