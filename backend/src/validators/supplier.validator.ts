import { Fornecedor } from "../models/entities/fornecedor.entity.ts";

function validateInsertSupplier(fornecedor: Fornecedor) {
  const camposObrigatorios: (keyof Fornecedor)[] = [
    "contato",
    "email",
    "nome",
    "registro_nacional",
    "telefone",
  ];

  for (const campo of camposObrigatorios) {
    if (!fornecedor[campo]) {
      throw new Error(`O campo ${campo} é obrigatório.`);
    }
  }
}

export { validateInsertSupplier };
