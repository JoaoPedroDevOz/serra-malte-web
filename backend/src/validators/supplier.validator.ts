import { Fornecedor } from "../models/entities/fornecedor.entity.ts";
import { validateRequiredFields } from "./requiredFields.validator.ts";

export function validateInsertSupplier(fornecedor: Fornecedor) {
  validateRequiredFields(fornecedor, [
    "nome",
    "registro_nacional",
    "email",
    "telefone",
    "contato",
  ]);
}
