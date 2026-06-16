import { insertIngredientSupply } from "../../datasource/postgre/sql/rel/supplier-item.sql.ts";
import { AppError } from "../../models/classes/error.class.ts";
import { FornecedorProdutoIngrediente } from "../../models/entities/rel/fornecedor-produto-ingrediente.entity.ts";
import { handlerSelectIngredients } from "../ingredient.controller.ts";
import { handlerSelectSuppliers } from "../supplier.controller.ts";

async function handlerInsertIngredientSupply(
  req: FornecedorProdutoIngrediente,
): Promise<any> {
  const supplyData: FornecedorProdutoIngrediente = req;

  try {
    const supplier = await handlerSelectSuppliers({
      fornecedor_id: supplyData.fornecedor_id,
    });
    if (!supplier || supplier.length === 0) {
      throw new AppError({
        message: "Fornecedor informado não existe.",
        status: 404,
      });
    }

    if (!supplyData.ingrediente_id) {
      throw new AppError({
        message:
          "O ID do ingrediente é obrigatório para registrar o fornecimento.",
        status: 400,
      });
    }

    const ingredient = await handlerSelectIngredients({
      ingrediente_id: supplyData.ingrediente_id,
    });
    if (!ingredient || ingredient.length === 0) {
      throw new AppError({
        message: "Ingrediente informado não existe.",
        status: 404,
      });
    }

    return await insertIngredientSupply(supplyData);
  } catch (err) {
    if (err instanceof AppError) throw err;

    const error = {
      status: 500,
      message: err instanceof Error ? err.message : String(err),
    };

    console.log(
      `controller: supply.controller :: handlerInsertIngredientSupply - [error]: ${error.message}`,
    );

    throw new AppError({ message: error.message, status: error.status });
  }
}

export { handlerInsertIngredientSupply };
