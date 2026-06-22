import { Request, Response } from "express";
import { handlerInsertClient } from "../controllers/cliente.controller.ts";
import { AppError } from "../models/classes/error.class.ts";
import { HTTP_STATUS } from "../utils/consts.util.ts";

export async function registerClient(req: Request, res: Response) {
  try {
    console.log(
      `api: cliente.api :: registerClient - [req.body]: ${JSON.stringify(
        req.body,
      )}`,
    );

    const cliente = await handlerInsertClient(req.body);

    console.log(
      `api: cliente.api :: registerClient - [success]: ${JSON.stringify(
        cliente,
      )}`,
    );

    return res.status(HTTP_STATUS.OK).send({ cliente });
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: cliente.api :: registerClient - [error]: ${error.message}`,
    );
    return res.status(error.status).json({ error });
  }
}
