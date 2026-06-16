import { Supplier } from "./supplier.interface";

export interface Ingredient {
  ingredientId: number;
  name: string;
  type: IngredientType;
  unitValue: number;
  quantity: number;
}

interface IngredientType {
  id: number;
  text: string;
}

export interface IngredientSupply {
  supplier: Partial<Supplier>;
  ingredient: Ingredient;
  quantity: number;
  supplyValue: number;
  supplyDate?: Date;
}
