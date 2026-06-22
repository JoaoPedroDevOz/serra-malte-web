import {
  insertOrder,
  selectOrders,
} from "../datasource/postgre/sql/order.sql.ts";
import { AppError } from "../models/classes/error.class.ts";
import {
  IRegisterPedidoInput,
  IFiltrarPedidosInput,
} from "../models/entities/pedido.entity.ts";
import { APP_ERRORS } from "../utils/errors/index.error.ts";

const messagesPedido = APP_ERRORS.PEDIDO;

/**
 * Sua função utilitária de validação de campos obrigatórios
 */
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

/**
 * Validador específico para a criação de pedidos usando o seu padrão
 */
export function validateInsertPedido(pedido: IRegisterPedidoInput) {
  // 1. Valida as propriedades de primeiro nível do Pedido
  validateRequiredFields(pedido, [
    "cliente_id",
    "status_pedido_id",
    "data_hora_pedido",
    "itens",
  ]);

  // 2. Garante que a lista de itens não veio vazia
  if (!Array.isArray(pedido.itens) || pedido.itens.length === 0) {
    throw new AppError({
      message: "O pedido deve conter pelo menos um item.",
      status: 400,
    });
  }

  // 3. Percorre e valida os campos obrigatórios de cada item (rel_pedido_produto)
  for (const item of pedido.itens) {
    validateRequiredFields(item, [
      "produto_id",
      "valor_unitario",
      "quantidade",
    ]);

    if (item.quantidade <= 0) {
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
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: pedido.controller :: handlerInsertOrder - [error]: ${error.message}`,
    );
    throw new AppError({ message: error.message, status: error.status });
  }
}

export async function handlerSelectOrders(req: IFiltrarPedidosInput) {
  try {
    return await selectOrders(req);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: pedido.controller :: handlerSelectOrders - [error]: ${error.message}`,
    );
    throw new AppError({ message: error.message, status: error.status });
  }
}
