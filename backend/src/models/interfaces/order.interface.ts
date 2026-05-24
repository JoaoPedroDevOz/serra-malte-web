interface Order {
  // orderId: number;
  statusId: number;
  clientId: number;
  timeStampOrder: Date;
  productList: OrderProduct[];
}

export interface OrderProduct {
  productId: number;
  quantity: number;
  unitValue: number;
}
