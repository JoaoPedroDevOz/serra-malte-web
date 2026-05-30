import {
  deleteSupplier,
  insertSupplier,
  selectSuppliers,
  updateSupplier,
} from "../datasource/postgre/sql/supplier.sql.ts";
import { AppError } from "../models/classes/error.class.ts";
import { Fornecedor } from "../models/entities/fornecedor.entity.ts";
import { Message } from "../models/interfaces/message.interface.ts";
import { APP_ERRORS } from "../utils/errors/index.error.ts";
import { validateInsertSupplier } from "../validators/supplier.validator.ts";

const messages = APP_ERRORS.SUPPLIER;

async function handlerInsertSupplier(req: Fornecedor): Promise<Fornecedor> {
  const fornecedor: Fornecedor = req;

  try {
    validateInsertSupplier(fornecedor);

    if (
      (
        await handlerSelectSuppliers({
          registro_nacional: req.registro_nacional,
        })
      ).length > 0
    ) {
      throw new AppError(messages.INSERT.ALREADY_EXISTS_RN);
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

    throw new AppError(error);
  }
}

async function handlerSelectSuppliers(
  req: Partial<Fornecedor>,
): Promise<Fornecedor[]> {
  const fornecedor: Partial<Fornecedor> = req;

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

    throw new AppError(error);
  }
}

async function handlerUpdateSupplier(
  req: Partial<Fornecedor>,
  novoFornecedor: Fornecedor,
): Promise<Fornecedor> {
  const fornecedor: Partial<Fornecedor> = req;
  const messages = APP_ERRORS.SUPPLIER.UPDATE;

  try {
    const suppliers = await handlerSelectSuppliers({
      registro_nacional: novoFornecedor.registro_nacional,
    });

    const alreadyExists = suppliers.some(
      (supplier) => supplier.fornecedor_id !== fornecedor.fornecedor_id,
    );

    if (alreadyExists) {
      throw new AppError(messages.ALREADY_EXISTS_RN);
    }

    return await updateSupplier(fornecedor, novoFornecedor);
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

    throw new AppError(error);
  }
}

async function handlerDeleteSupplier(
  req: Partial<Fornecedor>,
): Promise<Fornecedor> {
  const fornecedor: Partial<Fornecedor> = req;

  try {
    if (!fornecedor.fornecedor_id) {
      throw new AppError(messages.DELETE.NO_ID);
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

    throw new AppError(error);
  }
}

export {
  handlerInsertSupplier,
  handlerSelectSuppliers,
  handlerUpdateSupplier,
  handlerDeleteSupplier,
};
