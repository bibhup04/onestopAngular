export class PlanDTO {
    planId?: number;
    billingCycle?: number;
    memberCount?: number;
    planDescription?: string;
    ottCount?: number;
    streams?: number;
    price?: number;
    discount?: number;
    finalPrice?: number;
    otts?: OttDTO[];
  }
  
  export class OttDTO {
    ottId?: number;
    ottName: string = 'abc';
    planTitle?: string;
  }
  