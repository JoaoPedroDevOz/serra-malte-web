import { Request, Response } from "express";
import { AppError } from "../../models/classes/error.class.ts";
import { Produto } from "../../models/entities/produto.entity.ts";
import { HTTP_STATUS } from "../../utils/consts.util.ts";
import {
  handlerDeleteProductType,
  handlerInsertProductType,
  handlerSelectProductsTypes,
  handlerUpdateProductType,
} from "../../controllers/types/product_types.controller.ts";

export async function registerProductType(req: Request, res: Response) {
  try {
    console.log(
      `api: product_type.api :: registerProductType - [req.body]: ${JSON.stringify(req.body)}`,
    );

    const product: Partial<Produto> = await handlerInsertProductType(req.body);

    console.log(
      `api: product_type.api :: registerProductType - [success]: ${JSON.stringify(product)}`,
    );

    return res.status(HTTP_STATUS.OK).json({
      message: "Tipo de produto cadastrado com sucesso!",
    });
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: product_type.api :: registerProductType - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}

export async function listProductsTypes(req: Request, res: Response) {
  try {
    console.log(
      `api: product_type.api :: listProductsTypes - [req.query]: ${JSON.stringify(req.query)}`,
    );

    const filtros: Partial<Produto> = {
      tipo_produto_id: req.query.tipo_produto_id
        ? Number(req.query.tipo_produto_id)
        : (undefined as unknown as number),
      tipo: req.query.tipo as string,
    };

    const productsList: Partial<Produto[]> =
      await handlerSelectProductsTypes(filtros);

    console.log(
      `api: product_type.api :: listProductsTypes - [success]: ${JSON.stringify(productsList)}`,
    );

    return res.status(201).send(productsList);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: product_type.api :: listProducts - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}

export async function editProductType(req: Request, res: Response) {
  try {
    console.log(
      `api: product_type.api :: editProductType - [req.body]: ${JSON.stringify(req.body)}`,
    );

    const filtro: Partial<Produto> = {
      tipo_produto_id: Number(req.query.tipo_produto_id),
    };

    const product = await handlerUpdateProductType(filtro, req.body);

    console.log(
      `api: product_type.api :: editProductType - [success]: ${JSON.stringify(product)}`,
    );

    return res.status(HTTP_STATUS.OK).send(product);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: product_type.api :: editProductType - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}

export async function removeProductType(req: Request, res: Response) {
  try {
    console.log(
      `api: product_type.api :: removeProductType - [req.query]: ${JSON.stringify(req.query)}`,
    );

    const filtro: Partial<Produto> = {
      tipo_produto_id: Number(req.query.tipo_produto_id),
    };

    const productType = await handlerDeleteProductType(filtro);

    console.log(
      `api: product_type.api :: removeProductType - [success]: ${JSON.stringify(productType)}`,
    );

    return res.status(HTTP_STATUS.OK).json({
      message: "Tipo de produto removido com sucesso!",
    });
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: product_type.api :: removeProductType - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}
