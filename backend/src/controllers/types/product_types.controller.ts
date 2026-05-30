import {
  deleteProductType,
  insertProductType,
  selectProductTypes,
  updateProductType,
} from "../../datasource/postgre/sql/types/product_type.sql.ts";
import { AppError } from "../../models/classes/error.class.ts";
import { Produto } from "../../models/entities/produto.entity.ts";
import { Message } from "../../models/interfaces/message.interface.ts";
import { APP_ERRORS } from "../../utils/errors/index.error.ts";
import {
  validateInsertProductType,
  validateUpdateProductType,
} from "../../validators/types/product_type.validator.ts";

const messages = APP_ERRORS.PRODUCT_TYPES;

async function handlerInsertProductType(
  req: Partial<Produto>,
): Promise<Partial<Produto>> {
  const tipoProduto: Partial<Produto> = req;

  try {
    validateInsertProductType(tipoProduto);

    if (
      (
        await handlerSelectProductsTypes({
          tipo: req.tipo!,
        })
      ).length > 0
    ) {
      throw new AppError(messages.MULTIPLE.ALREADY_EXISTS_TYPE);
    }

    return await insertProductType(tipoProduto);
  } catch (err) {
    const error: Message = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: product_type.controller :: handlerInsertProductType - [error]: ${
        error.message
      }`,
    );

    throw new AppError(error);
  }
}

async function handlerSelectProductsTypes(
  req: Partial<Produto>,
): Promise<Partial<Produto[]>> {
  const tipoProduto: Partial<Produto> = req;

  try {
    return await selectProductTypes(tipoProduto);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: product_type.controller :: handlerSelectProductsTypes - [error]: ${
        error.message
      }`,
    );

    throw new AppError(error);
  }
}

async function handlerUpdateProductType(
  req: Partial<Produto>,
  novoTipoProduto: Partial<Produto>,
): Promise<Partial<Produto>> {
  const tipoProduto: Partial<Produto> = req;

  try {
    validateUpdateProductType(tipoProduto, novoTipoProduto);

    const productTypeById = await handlerSelectProductsTypes({
      tipo_produto_id: tipoProduto.tipo_produto_id!,
    });

    if (productTypeById.length === 0) {
      throw new AppError(messages.SELECT.NOT_FOUND);
    }

    const productTypes = await handlerSelectProductsTypes({
      tipo: novoTipoProduto.tipo!,
    });

    const alreadyExists = productTypes.some(
      (produto) => produto?.tipo !== produto?.tipo,
    );

    if (alreadyExists) {
      throw new AppError(messages.MULTIPLE.ALREADY_EXISTS_TYPE);
    }

    return await updateProductType(tipoProduto, req);
  } catch (err) {
    const error: Message = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: product_type.controller :: handlerUpdateProduct - [error]: ${
        error.message
      }`,
    );

    throw new AppError(error);
  }
}

async function handlerDeleteProductType(
  req: Partial<Produto>,
): Promise<Partial<Produto>> {
  const tipoProduto: Partial<Produto> = req;

  try {
    const productTypeById = await handlerSelectProductsTypes({
      tipo_produto_id: tipoProduto.tipo_produto_id!,
    });

    if (productTypeById.length === 0) {
      throw new AppError(messages.SELECT.NOT_FOUND);
    }

    if (!tipoProduto.tipo_produto_id) {
      throw new AppError(messages.DELETE.NO_ID);
    }

    return await deleteProductType(tipoProduto);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: product_type.controller :: handlerDeleteProduct - [error]: ${
        error.message
      }`,
    );

    throw new AppError({ message: error.message, status: error.status });
  }
}

export {
  handlerInsertProductType,
  handlerSelectProductsTypes,
  handlerUpdateProductType,
  handlerDeleteProductType,
};
