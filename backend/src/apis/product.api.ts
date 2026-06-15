import { Request, Response } from "express";
import {
  handlerDeleteProduct,
  handlerInsertProduct,
  handlerSelectProducts,
  handlerUpdateProduct,
} from "../controllers/product.controller.ts";
import { AppError } from "../models/classes/error.class.ts";
import { HTTP_STATUS } from "../utils/consts.util.ts";
import { Produto } from "../models/entities/produto.entity.ts";

export async function registerProduct(req: Request, res: Response) {
  try {
    console.log(
      `api: product.api :: registerProduct - [req.body]: ${JSON.stringify(req.body)}`,
    );

    const product: Produto = await handlerInsertProduct(req.body);

    console.log(
      `api: product.api :: registerProduct - [success]: ${JSON.stringify(product)}`,
    );

    return res.status(HTTP_STATUS.OK).json({
      message: "Produto cadastrado com sucesso!",
    });
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: product.api :: registerProduct - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}

export async function listProducts(req: Request, res: Response) {
  try {
    console.log(
      `api: product.api :: listProducts - [req.query]: ${JSON.stringify(req.query)}`,
    );

    const filtros: Partial<Produto> = {
      produto_id: Number(req.query.produto_id),
      nome: req.query.nome as string,
    };

    const productsList: Produto[] = await handlerSelectProducts(filtros);

    console.log(
      `api: product.api :: listProducts - [success]: ${JSON.stringify(productsList)}`,
    );

    return res.status(201).send(productsList);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(`api: product.api :: listProducts - [error]: ${error.message}`);

    return res.status(error.status).json({
      error: error,
    });
  }
}

export async function editProduct(req: Request, res: Response) {
  try {
    console.log(
      `api: product.api :: updateProduct - [req.body]: ${JSON.stringify(req.body)}`,
    );

    const filtro: Partial<Produto> = {
      produto_id: Number(req.query.fornecedor_id),
    };

    const product = await handlerUpdateProduct(filtro, req.body);

    console.log(
      `api: product.api :: updateProduct - [success]: ${JSON.stringify(product)}`,
    );

    return res.status(HTTP_STATUS.OK).send(product);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: product.api :: updateProduct - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}

export async function removeProduct(req: Request, res: Response) {
  try {
    console.log(
      `api: product.api :: removeProduct - [req.query]: ${JSON.stringify(req.query)}`,
    );

    const filtro: Partial<Produto> = {
      produto_id: Number(req.query.produto_id),
    };

    const product = await handlerDeleteProduct(filtro);

    console.log(
      `api: product.api :: removeProduct - [success]: ${JSON.stringify(product)}`,
    );

    return res.status(HTTP_STATUS.OK).json({
      message: "Produto removido com sucesso!",
    });
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: product.api :: removeProduct - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}
