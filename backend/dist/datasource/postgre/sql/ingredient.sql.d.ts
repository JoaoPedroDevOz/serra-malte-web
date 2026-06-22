import { Ingrediente } from "../../../models/entities/ingrediente.entity.ts";
declare function insertIngredient(req: Ingrediente): Promise<Ingrediente>;
declare function selectIngredients(req: Partial<Ingrediente>): Promise<Ingrediente[]>;
declare function updateIngredient(toUpdateReq: Partial<Ingrediente>, req: Ingrediente): Promise<Ingrediente>;
declare function deleteIngredient(req: Partial<Ingrediente>): Promise<Ingrediente>;
export { insertIngredient, selectIngredients, updateIngredient, deleteIngredient, };
//# sourceMappingURL=ingredient.sql.d.ts.map