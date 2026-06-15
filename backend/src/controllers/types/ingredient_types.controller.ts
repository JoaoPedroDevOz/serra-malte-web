import { selectIngredientTypes } from "../../datasource/postgre/sql/types/ingredient_type.sql.ts";
import { AppError } from "../../models/classes/error.class.ts";
import { Ingrediente } from "../../models/entities/ingrediente.entity.ts";

async function handlerSelectIngredientsTypes(
  req: Partial<Ingrediente>,
): Promise<any[]> {
  try {
    return await selectIngredientTypes(req);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: ingredient_type.controller :: handlerSelectIngredientsTypes - [error]: ${error.message}`,
    );
    throw new AppError(error);
  }
}

export { handlerSelectIngredientsTypes };
