import { Request, Response } from "express";
import {
  handlerDeleteSupplier,
  handlerInsertSupplier,
  handlerSelectSuppliers,
  handlerUpdateSupplier,
} from "../controllers/supplier.controller.ts";
import { AppError } from "../models/classes/error.class.ts";
import { HTTP_STATUS } from "../utils/consts.util.ts";
import { Fornecedor } from "../models/entities/fornecedor.entity.ts";

export async function registerSupplier(req: Request, res: Response) {
  try {
    console.log(
      `api: supplier.api :: registerSupplier - [req.body]: ${JSON.stringify(req.body)}`,
    );

    const supplier: Fornecedor = await handlerInsertSupplier(req.body);

    console.log(
      `api: supplier.api :: registerSupplier - [success]: ${JSON.stringify(supplier)}`,
    );

    return res.status(HTTP_STATUS.OK).json({
      message: "Fornecedor cadastrado com sucesso!",
    });
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: supplier.api :: registerSupplier - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}

export async function searchSuppliers(req: Request, res: Response) {
  try {
    console.log(
      `api: supplier.api :: searchSuppliers - [req.query]: ${JSON.stringify(req.query)}`,
    );

    const filtros = {
      fornecedor_id: req.query.fornecedor_id
        ? Number(req.query.fornecedor_id)
        : null,
      registro_nacional: req.query.registro_nacional as string,
      nome: req.query.nome as string,
    };

    const suppliersList: Fornecedor[] = await handlerSelectSuppliers(filtros);

    console.log(
      `api: supplier.api :: searchSuppliers - [success]: ${JSON.stringify(suppliersList)}`,
    );

    return res.status(201).send(suppliersList);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: supplier.api :: searchSuppliers - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}

export async function reviseSupplier(req: Request, res: Response) {
  try {
    console.log(
      `api: supplier.api :: updateSupplier - [req.body]: ${JSON.stringify(req.body)}`,
    );

    const filtro: Partial<Fornecedor> = {
      fornecedor_id: Number(req.query.fornecedor_id),
      // ? Number(req.query.fornecedor_id)
      // : null,
    };

    const supplier = await handlerUpdateSupplier(filtro, req.body);

    console.log(
      `api: supplier.api :: updateSupplier - [success]: ${JSON.stringify(supplier)}`,
    );

    return res.status(HTTP_STATUS.OK).send(supplier);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: supplier.api :: updateSupplier - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}

export async function removeSupplier(req: Request, res: Response) {
  try {
    console.log(
      `api: supplier.api :: removeSupplier - [req.query]: ${JSON.stringify(req.query)}`,
    );

    const filtro: Partial<Fornecedor> = {
      fornecedor_id: Number(req.query.fornecedor_id),
      // ? Number(req.query.fornecedor_id)
      // : null,
    };

    const supplier = await handlerDeleteSupplier(filtro);

    console.log(
      `api: supplier.api :: removeSupplier - [success]: ${JSON.stringify(supplier)}`,
    );

    return res.status(HTTP_STATUS.OK).json({
      message: "Fornecedor removido com sucesso!",
    });
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: supplier.api :: removeSupplier - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}
