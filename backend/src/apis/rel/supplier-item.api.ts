import { Request, Response } from "express";
import { AppError } from "../../models/classes/error.class.ts";
import { HTTP_STATUS } from "../../utils/consts.util.ts";
import { handlerInsertIngredientSupply } from "../../controllers/rel/supplier-item.controller.ts";

async function registerIngredientSupply(req: Request, res: Response) {
  try {
    console.log(
      `api: supply.api :: registerIngredientSupply - [req.body]: ${JSON.stringify(req.body)}`,
    );

    const supply = await handlerInsertIngredientSupply(req.body);

    console.log(
      `api: supply.api :: registerIngredientSupply - [success]: ${JSON.stringify(supply)}`,
    );

    return res.status(HTTP_STATUS.OK).send({ fornecimento: supply });
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: supply.api :: registerIngredientSupply - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}

export { registerIngredientSupply };
