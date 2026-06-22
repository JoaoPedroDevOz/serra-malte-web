import { Ingrediente } from "../models/entities/ingrediente.entity.ts";
declare function handlerInsertIngredient(req: Ingrediente): Promise<Ingrediente>;
declare function handlerSelectIngredients(req: Partial<Ingrediente>): Promise<Ingrediente[]>;
declare function handlerUpdateIngredient(req: Partial<Ingrediente>, novoIngrediente: Ingrediente): Promise<Ingrediente>;
declare function handlerDeleteIngredient(req: Partial<Ingrediente>): Promise<Ingrediente>;
export { handlerInsertIngredient, handlerSelectIngredients, handlerUpdateIngredient, handlerDeleteIngredient, };
//# sourceMappingURL=ingredient.controller.d.ts.map