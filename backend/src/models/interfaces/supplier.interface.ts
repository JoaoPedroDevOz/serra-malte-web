export interface Supplier {
  // supplierId: number;
  email: string;
  contact: string;
  phone: string;
  name: string;
  nationalRegister: string;
}

export interface SupplierProductIngredient {
  supplierId: number;
  productId?: number;
  ingredientId?: number;
  supplyTimestamp: Date;
  supplyValue: number;
  quantity: number;
}