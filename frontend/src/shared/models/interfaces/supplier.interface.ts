import { Ingredient } from "./ingredient.interface";
import { Product } from "./product.interface";

export interface Supplier {
  supplierId: number;
  email: string;
  contact: string;
  phone: string;
  name: string;
  nationalRegister: string;
}

export interface SupplierProductIngredient {
  supplier: Supplier;
  product?: Product;
  ingredient?: Ingredient;
  supplyTimestamp: Date;
  supplyValue: number;
  quantity: number;
}
