import { Request, Response } from "express";
import {
  handlerInsertOrder,
  handlerSelectOrders,
} from "../controllers/order.controller.ts";
import { AppError } from "../models/classes/error.class.ts";
import {
  IRegisterPedidoInput,
  IFiltrarPedidosInput,
} from "../models/entities/pedido.entity.ts";
import { HTTP_STATUS } from "../utils/consts.util.ts";

export async function registerOrder(req: Request, res: Response) {
  try {
    console.log(
      `api: pedido.api :: registerOrder - [req.body]: ${JSON.stringify(req.body)}`,
    );

    const pedidoInput: IRegisterPedidoInput = req.body;
    const novoPedido = await handlerInsertOrder(pedidoInput);

    console.log(
      `api: pedido.api :: registerOrder - [success]: ${JSON.stringify(novoPedido)}`,
    );

    return res.status(HTTP_STATUS.OK).send({ pedido: novoPedido });
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(`api: pedido.api :: registerOrder - [error]: ${error.message}`);
    return res.status(error.status).json({ error });
  }
}

export async function listOrders(req: Request, res: Response) {
  try {
    console.log(
      `api: pedido.api :: listOrders - [req.query]: ${JSON.stringify(req.query)}`,
    );

    const filtros: IFiltrarPedidosInput = {
      pedido_id: req.query.pedido_id ? Number(req.query.pedido_id) : undefined,
      cliente_id: req.query.cliente_id
        ? Number(req.query.cliente_id)
        : undefined,
      status_pedido_id: req.query.status_pedido_id
        ? Number(req.query.status_pedido_id)
        : undefined,
    };

    const ordersList = await handlerSelectOrders(filtros);

    console.log(
      `api: pedido.api :: listOrders - [success]: ${JSON.stringify(ordersList)}`,
    );

    return res.status(HTTP_STATUS.OK).send(ordersList);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(`api: pedido.api :: listOrders - [error]: ${error.message}`);
    return res.status(error.status).json({ error });
  }
}
