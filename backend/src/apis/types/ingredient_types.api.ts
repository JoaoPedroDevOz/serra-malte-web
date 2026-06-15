import { Request, Response } from "express";
import { AppError } from "../../models/classes/error.class.ts";
import { Ingrediente } from "../../models/entities/ingrediente.entity.ts";
import { handlerSelectIngredientsTypes } from "../../controllers/types/ingredient_types.controller.ts";

async function listIngredientsTypes(req: Request, res: Response) {
  try {
    console.log(
      `api: Ingredient_type.api :: listIngredientsTypes - [req.query]: ${JSON.stringify(req.query)}`,
    );

    const filtros: Partial<Ingrediente> = {
      tipo: {
        tipo_ingrediente_id: req.query.tipo_ingrediente_id
          ? Number(req.query.tipo_ingrediente_id)
          : 0,
        texto: (req.query.texto as string) || "",
      },
    } as any;

    const IngredientsList = await handlerSelectIngredientsTypes(filtros);

    console.log(
      `api: Ingredient_type.api :: listIngredientsTypes - [success]: ${JSON.stringify(IngredientsList)}`,
    );

    // CORREÇÃO: Status 200 para consultas GET
    return res.status(200).send(IngredientsList);
  } catch (err) {
    const error = {
      // CORREÇÃO: Evita mandar NaN para o res.status()
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `api: Ingredient_type.api :: listIngredients - [error]: ${error.message}`,
    );

    return res.status(error.status).json({
      error: error,
    });
  }
}

export { listIngredientsTypes };
