import {
  insertOrder,
  selectOrders,
} from "../datasource/postgre/sql/order.sql.ts";
import { AppError } from "../models/classes/error.class.ts";
import {
  IRegisterPedidoInput,
  IFiltrarPedidosInput,
} from "../models/entities/pedido.entity.ts";

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
      // CORREÇÃO: Chamando AppError passando o objeto configurado
      throw new AppError({
        message: `O campo ${String(field)} é obrigatório.`,
        status: 400,
      });
    }
  }
}

export function validateInsertPedido(pedido: IRegisterPedidoInput) {
  validateRequiredFields(pedido, [
    "cliente_id",
    "status_pedido_id",
    "data_hora_pedido",
    "itens",
  ]);

  if (!Array.isArray(pedido.itens) || pedido.itens.length === 0) {
    // CORREÇÃO: Chamando AppError passando o objeto configurado
    throw new AppError({
      message: "O pedido deve conter pelo menos um item.",
      status: 400,
    });
  }

  for (const item of pedido.itens) {
    validateRequiredFields(item, [
      "produto_id",
      "valor_unitario",
      "quantidade",
    ]);

    if (item.quantidade <= 0) {
      // CORREÇÃO: Chamando AppError passando o objeto configurado
      throw new AppError({
        message: "A quantidade de cada item deve ser maior que zero.",
        status: 400,
      });
    }
  }
}

/* ========================================================================== */

export async function handlerInsertOrder(req: IRegisterPedidoInput) {
  try {
    validateInsertPedido(req);
    return await insertOrder(req);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof Error ? err.message : String(err),
    };

    console.log(
      `controller: pedido.controller :: handlerInsertOrder - [error]: ${error.message}`,
    );

    // Repassa o AppError com a estrutura correta de objeto
    throw new AppError({ message: error.message, status: error.status });
  }
}

export async function handlerSelectOrders(req: IFiltrarPedidosInput) {
  try {
    return await selectOrders(req);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof Error ? err.message : String(err),
    };

    console.log(
      `controller: pedido.controller :: handlerSelectOrders - [error]: ${error.message}`,
    );

    // Repassa o AppError com a estrutura correta de objeto
    throw new AppError({ message: error.message, status: error.status });
  }
}
