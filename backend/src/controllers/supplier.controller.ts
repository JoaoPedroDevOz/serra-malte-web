import {
  deleteSupplier,
  insertSupplier,
  selectSuppliers,
  updateSupplier,
} from "../datasource/postgre/sql/supplier.sql.ts";
import { AppError } from "../models/classes/error.class.ts";
import {
  Fornecedor,
  PesquisaFornecedor,
} from "../models/entities/fornecedor.entity.ts";
import { Message } from "../models/interfaces/message.interface.ts";
import { APP_ERRORS } from "../utils/errors.util.ts";
import { validateInsertSupplier } from "../validators/supplier.validator.ts";

async function handlerInsertSupplier(req: Fornecedor): Promise<Fornecedor> {
  const fornecedor: Fornecedor = req;
  const messages = APP_ERRORS.SUPPLIER.INSERT;

  try {
    validateInsertSupplier(fornecedor);

    if (
      (
        await handlerSelectSuppliers({
          registro_nacional: req.registro_nacional,
        })
      ).length > 0
    ) {
      throw new AppError(
        messages.ALREADY_EXISTS_RN.message,
        messages.ALREADY_EXISTS_RN.status,
      );
    }

    return await insertSupplier(fornecedor);
  } catch (err) {
    const error: Message = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: supplier.controller :: handlerInsertSupplier - [error]: ${
        error.message
      }`,
    );

    throw new AppError(error.message, error.status);
  }
}

async function handlerSelectSuppliers(
  req: PesquisaFornecedor,
): Promise<Fornecedor[]> {
  const fornecedor: PesquisaFornecedor = req;

  try {
    return await selectSuppliers(fornecedor);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: supplier.controller :: handlerSelectSuppliers - [error]: ${
        error.message
      }`,
    );

    throw new AppError(error.message, error.status);
  }
}

async function handlerUpdateSupplier(
  toUpdateReq: PesquisaFornecedor,
  req: Fornecedor,
): Promise<Fornecedor> {
  const fornecedor: PesquisaFornecedor = toUpdateReq;
  const messages = APP_ERRORS.SUPPLIER.UPDATE;

  try {
    const suppliers = await handlerSelectSuppliers({
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

    return await updateSupplier(fornecedor, req);
  } catch (err) {
    const error: Message = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: supplier.controller :: handlerUpdateSupplier - [error]: ${
        error.message
      }`,
    );

    throw new AppError(error.message, error.status);
  }
}

async function handlerDeleteSupplier(
  req: PesquisaFornecedor,
): Promise<Fornecedor> {
  const fornecedor: PesquisaFornecedor = req;

  try {
    if (!fornecedor.fornecedor_id) {
      const err = {
        message:
          "O número identificador do fornecedor é obrigatório para sua exclusão.",
      };
      throw err;
    }

    return await deleteSupplier(fornecedor);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: supplier.controller :: handlerDeleteSupplier - [error]: ${
        error.message
      }`,
    );

    throw new AppError(error.message, error.status);
  }
}

export {
  handlerInsertSupplier,
  handlerSelectSuppliers,
  handlerUpdateSupplier,
  handlerDeleteSupplier,
};
