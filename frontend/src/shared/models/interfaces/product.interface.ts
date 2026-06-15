export interface Product {
  productId: number;
  type: {
    id: number;
    text: string;
  }
  name: string;
  unitValue: number;
  ibu?: number;
  abv?: number;
}
