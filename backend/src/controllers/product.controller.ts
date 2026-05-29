import {
  deleteProduct,
  insertProduct,
  selectProducts,
  updateProduct,
} from "../datasource/postgre/sql/supplier.sql.ts";
import { AppError } from "../models/classes/error.class.ts";
import { Produto } from "../models/entities/produto.entity.ts";
import { Message } from "../models/interfaces/message.interface.ts";
import { APP_ERRORS } from "../utils/errors.util.ts";
import { validateInsertProduct } from "../validators/supplier.validator.ts";

async function handlerInsertProduct(req: Produto): Promise<Produto> {
  const fornecedor: Produto = req;
  const messages = APP_ERRORS.SUPPLIER.INSERT;

  try {
    validateInsertProduct(fornecedor);

    if (
      (
        await handlerSelectProducts({
          registro_nacional: req.registro_nacional,
        })
      ).length > 0
    ) {
      throw new AppError(
        messages.ALREADY_EXISTS_RN.message,
        messages.ALREADY_EXISTS_RN.status,
      );
    }

    return await insertProduct(fornecedor);
  } catch (err) {
    const error: Message = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: supplier.controller :: handlerInsertProduct - [error]: ${
        error.message
      }`,
    );

    throw new AppError(error.message, error.status);
  }
}

async function handlerSelectProducts(req: PesquisaProduto): Promise<Produto[]> {
  const fornecedor: PesquisaProduto = req;

  try {
    return await selectProducts(fornecedor);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: supplier.controller :: handlerSelectProducts - [error]: ${
        error.message
      }`,
    );

    throw new AppError(error.message, error.status);
  }
}

async function handlerUpdateProduct(
  toUpdateReq: PesquisaProduto,
  req: Produto,
): Promise<Produto> {
  const fornecedor: PesquisaProduto = toUpdateReq;
  const messages = APP_ERRORS.SUPPLIER.UPDATE;

  try {
    const suppliers = await handlerSelectProducts({
      registro_nacional: req.registro_nacional,
    });

    const alreadyExists = suppliers.some(
      (supplier) => supplier.fornecedor_id !== fornecedor.fornecedor_id,
    );

    if (alreadyExists) {
      throw new AppError(
        messages.ALREADY_EXISTS_RN.message,
        messages.ALREADY_EXISTS_RN.status,
      );
    }

    return await updateProduct(fornecedor, req);
  } catch (err) {
    const error: Message = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: supplier.controller :: handlerUpdateProduct - [error]: ${
        error.message
      }`,
    );

    throw new AppError(error.message, error.status);
  }
}

async function handlerDeleteProduct(req: PesquisaProduto): Promise<Produto> {
  const fornecedor: PesquisaProduto = req;

  try {
    if (!fornecedor.fornecedor_id) {
      const err = {
        message:
          "O número identificador do fornecedor é obrigatório para sua exclusão.",
      };
      throw err;
    }

    return await deleteProduct(fornecedor);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: supplier.controller :: handlerDeleteProduct - [error]: ${
        error.message
      }`,
    );

    throw new AppError(error.message, error.status);
  }
}

export {
  handlerInsertProduct,
  handlerSelectProducts,
  handlerUpdateProduct,
  handlerDeleteProduct,
};
