export interface Ingredient {
  ingredientId: number;
  name: string;
  type: IngredientType;
  unitValue: number;
}

interface IngredientType {
  id: number;
  text: string;
}
