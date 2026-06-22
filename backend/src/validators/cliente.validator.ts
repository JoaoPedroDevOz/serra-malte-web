import { AppError } from "../models/classes/error.class.ts";
import { Cliente } from "../models/entities/cliente.entity.ts";

export function validateRequiredFields<T extends object>(
  obj: T,
  requiredFields?: (keyof T)[],
): void {
  const fields = requiredFields ?? (Object.keys(obj) as (keyof T)[]);

  for (const field of fields) {
    const value = obj[field];

    if (
      value === null ||
      value === undefined ||
      (typeof value === "string" && value.trim() === "")
    ) {
      throw new AppError({
        message: `O campo ${String(field)} é obrigatório.`,
        status: 400,
      });
    }
  }
}

export function validateInsertCliente(cliente: Cliente) {
  validateRequiredFields(cliente, [
    "tipo_pessoa_id",
    "registro_nacional",
    "nome",
  ]);
}
