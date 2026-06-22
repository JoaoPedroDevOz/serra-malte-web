import { AppError } from "../../models/classes/error.class.ts";
import { Produto } from "../../models/entities/produto.entity.ts";
import { APP_ERRORS } from "../../utils/errors/index.error.ts";
import { validateRequiredFields } from "../requiredFields.validator.ts";

const messages = APP_ERRORS.PRODUCT_TYPES;

export function validateInsertProductType(tipoProduto: Partial<Produto>) {
  validateRequiredFields(tipoProduto, ["tipo"]);
}

export function validateUpdateProductType(
  tipoProduto: Partial<Produto>,
  req: Partial<Produto>,
) {
  validateRequiredFields(tipoProduto, ["tipo"]);
  validateRequiredFields(req, ["tipo"]);

  if (req.tipo?.tipo_produto_id) {
    throw new AppError(messages.UPDATE.CANT_CHANGE_ID);
  }
}
