import { Client } from "./client.interface";

export interface Order {
  orderId: number;
  status: StatusOrder;
  client: Client;
  timeStampOrder: Date;
  productList: OrderProduct[];
}

export interface OrderProduct {
  productId: number;
  name: string;
  quantity: number;
  unitValue: number;
}

interface StatusOrder {
  statusId: number;
  statusText: string;
}
