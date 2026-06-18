import { AppError } from "../models/classes/error.class.ts";
import { Produto } from "../models/entities/produto.entity.ts";
import { APP_ERRORS } from "../utils/errors/index.error.ts";
import { validateRequiredFields } from "./requiredFields.validator.ts";

const messages = APP_ERRORS.PRODUCT;

export function validateInsertProduct(produto: Produto) {
  validateRequiredFields(produto, [
    "nome",
    "tipo",
    "valor_unitario",
  ]);
}

export function validateUpdateProduct(produto: Partial<Produto>, req: Produto) {
  validateRequiredFields(produto, ["produto_id"]);

  if (req.produto_id) {
    throw new AppError(messages.UPDATE.CANT_CHANGE_ID);
  }
}
