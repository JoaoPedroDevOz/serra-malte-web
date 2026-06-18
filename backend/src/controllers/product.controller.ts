import {
  deleteProduct,
  insertProduct,
  selectProducts,
  updateProduct,
} from "../datasource/postgre/sql/product.sql.ts";
import { AppError } from "../models/classes/error.class.ts";
import { Produto } from "../models/entities/produto.entity.ts";
import { Message } from "../models/interfaces/message.interface.ts";
import { HTTP_STATUS } from "../utils/consts.util.ts";
import { APP_ERRORS } from "../utils/errors/index.error.ts";
import {
  validateInsertProduct,
  validateUpdateProduct,
} from "../validators/product.validator.ts";
import { handlerSelectProductsTypes } from "./types/product_types.controller.ts";

const messagesProductTypes = APP_ERRORS.PRODUCT_TYPES;
const messages = APP_ERRORS.PRODUCT;

async function handlerInsertProduct(req: Produto): Promise<Produto> {
  const produto: Produto = req;

  try {
    validateInsertProduct(produto);

    const productType = await handlerSelectProductsTypes({
      tipo: {
        tipo_produto_id: produto.tipo.tipo_produto_id,
        tipo: produto.tipo,
      },
    } as any);

    if (productType.length === 0) {
      throw new AppError(messagesProductTypes.SELECT.NOT_FOUND);
    }

    const products = await handlerSelectProducts({
      nome: produto.nome,
    });

    if (products.length > 0) {
      throw new AppError(messages.MULTIPLE.ALREADY_EXISTS_NAME);
    }

    return await insertProduct(produto);
  } catch (err) {
    const error: Message = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: product.controller :: handlerInsertProduct - [error]: ${
        error.message
      }`,
    );

    throw new AppError(error);
  }
}

async function handlerSelectProducts(
  req: Partial<Produto>,
): Promise<Produto[]> {
  const produto: Partial<Produto> = req;

  try {
    return await selectProducts(produto);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: product.controller :: handlerSelectProducts - [error]: ${
        error.message
      }`,
    );

    throw new AppError({ message: error.message, status: error.status });
  }
}

async function handlerUpdateProduct(
  req: Partial<Produto>,
  novoProduto: Produto,
): Promise<Produto> {
  const produto: Partial<Produto> = req;

  try {
    if (!produto.produto_id) {
      throw new AppError({
        message: "Número identificador do produto não informado.",
        status: HTTP_STATUS.BAD_REQUEST,
      });
    }

    validateUpdateProduct(produto, novoProduto);

    const products = await handlerSelectProducts({
      nome: novoProduto.nome,
    });

    const alreadyExists = products.some(
      (product) => product.produto_id !== produto.produto_id,
    );

    if (alreadyExists) {
      throw new AppError(messages.MULTIPLE.ALREADY_EXISTS_NAME);
    }

    // Modificado para verificar a propriedade dentro de novoProduto.tipo
    if (novoProduto.tipo && novoProduto.tipo.tipo_produto_id) {
      const productType = await handlerSelectProductsTypes(novoProduto);
      if (productType.length === 0) {
        throw new AppError(messagesProductTypes.SELECT.NOT_FOUND);
      }
    }

    return await updateProduct(produto, novoProduto);
  } catch (err) {
    const error: Message = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: product.controller :: handlerUpdateProduct - [error]: ${
        error.message
      }`,
    );

    throw new AppError({ message: error.message, status: error.status });
  }
}

async function handlerDeleteProduct(req: Partial<Produto>): Promise<Produto> {
  const produto: Partial<Produto> = req;

  try {
    if (!produto.produto_id) {
      throw new AppError(messages.DELETE.NO_ID);
    }

    return await deleteProduct(produto);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: product.controller :: handlerDeleteProduct - [error]: ${
        error.message
      }`,
    );

    throw new AppError({ message: error.message, status: error.status });
  }
}

export {
  handlerInsertProduct,
  handlerSelectProducts,
  handlerUpdateProduct,
  handlerDeleteProduct,
};
