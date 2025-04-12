// types/index.ts
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
  }
  
  export interface Order {
    id: string;
    productId: string;
    quantity: number;
    totalAmount: number;
  }
  
  export interface Payment {
    orderId: string;
    status: string;
    amount: number;
  }
  