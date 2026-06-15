import { AppError } from "../models/classes/error.class.ts";
import { Ingrediente } from "../models/entities/ingrediente.entity.ts";
import { APP_ERRORS } from "../utils/errors/index.error.ts";
import { validateRequiredFields } from "./requiredFields.validator.ts";

const messages = APP_ERRORS.INGREDIENT;

export function validateInsertIngredient(ingrediente: Ingrediente) {
  validateRequiredFields(ingrediente, [
    "nome",
    "tipo",
    "valor_unitario",
  ]);
}

export function validateUpdateIngredient(ingrediente: Partial<Ingrediente>, req: Ingrediente) {
  validateRequiredFields(ingrediente, ["ingrediente_id"]);

  if (req.ingrediente_id) {
    throw new AppError(messages.UPDATE.CANT_CHANGE_ID);
  }
}
