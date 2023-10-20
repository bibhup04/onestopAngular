export interface PlanDTO {
    planId: number;
    billingCycle: number;
    memberCount: number;
    planDescription: string;
    ottCount: number;
    streams: number;
    price: number;
    discount: number;
    finalPrice: number;
    otts: OttDTO[];
  }
  
  export interface OttDTO {
    ottId: number;
    ottName: string;
    planTitle: string;
  }

  export interface PlanIdDTO {
    planId: number;
}

  