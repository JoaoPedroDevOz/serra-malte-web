import { Request, Response } from "express";
import { AppError } from "../models/classes/error.class.ts";
import { HTTP_STATUS } from "../utils/consts.util.ts";
import { Ingrediente } from "../models/entities/ingrediente.entity.ts";
import {
  handlerInsertIngredient,
  handlerSelectIngredients,
  handlerUpdateIngredient,
  handlerDeleteIngredient,
} from "../controllers/ingredient.controller.ts";

export async function registerIngredient(req: Request, res: Response) {
  try {
    console.log(
      `api: ingredient.api :: registerIngredient - [req.body]: ${JSON.stringify(req.body)}`,
    );

    const ingredient: Ingrediente = await handlerInsertIngredient(req.body);

    console.log(
      `api: ingredient.api :: registerIngredient - [success]: ${JSON.stringify(ingredient)}`,
    );

    return res.status(HTTP_STATUS.OK).send({ ingrediente: ingredient });
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: ingredient.api :: registerIngredient - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}

export async function listIngredients(req: Request, res: Response) {
  try {
    console.log(
      `api: ingredient.api :: listIngredients - [req.query]: ${JSON.stringify(req.query)}`,
    );

    const filtros: Partial<Ingrediente> = {
      ingrediente_id: Number(req.query.ingrediente_id || 0),
      nome: req.query.nome as string,
    };

    const ingredientsList: Ingrediente[] =
      await handlerSelectIngredients(filtros);

    console.log(
      `api: ingredient.api :: listIngredients - [success]: ${JSON.stringify(ingredientsList)}`,
    );

    return res.status(201).send(ingredientsList);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: ingredient.api :: listIngredients - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}

export async function editIngredient(req: Request, res: Response) {
  try {
    console.log(
      `api: ingredient.api :: updateIngredient - [req.query]: ${JSON.stringify(req.query)}`,
    );

    console.log(
      `api: ingredient.api :: updateIngredient - [req.body]: ${JSON.stringify(req.body)}`,
    );

    const filtro: Partial<Ingrediente> = {
      ingrediente_id: Number(req.query.ingrediente_id || 0),
    };

    const ingredient = await handlerUpdateIngredient(filtro, req.body);

    console.log(
      `api: ingredient.api :: updateIngredient - [success]: ${JSON.stringify(ingredient)}`,
    );

    return res.status(HTTP_STATUS.OK).send({ ingrediente: ingredient });
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: ingredient.api :: updateIngredient - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}

export async function removeIngredient(req: Request, res: Response) {
  try {
    console.log(
      `api: ingredient.api :: removeIngredient - [req.query]: ${JSON.stringify(req.query)}`,
    );

    const filtro: Partial<Ingrediente> = {
      ingrediente_id: Number(req.query.ingrediente_id || 0),
    };

    const ingredient = await handlerDeleteIngredient(filtro);

    console.log(
      `api: ingredient.api :: removeIngredient - [success]: ${JSON.stringify(ingredient)}`,
    );

    return res.status(HTTP_STATUS.OK).json({
      message: "Ingrediente removido com sucesso!",
    });
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : Number(err),
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: ingredient.api :: removeIngredient - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}
