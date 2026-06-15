import {
  insertIngredient,
  selectIngredients,
  updateIngredient,
  deleteIngredient,
} from "../datasource/postgre/sql/ingredient.sql.ts";
import { AppError } from "../models/classes/error.class.ts";
import { Ingrediente } from "../models/entities/ingrediente.entity.ts";
import { Message } from "../models/interfaces/message.interface.ts";
import { HTTP_STATUS } from "../utils/consts.util.ts";
import { APP_ERRORS } from "../utils/errors/index.error.ts";
import {
  validateInsertIngredient,
  validateUpdateIngredient,
} from "../validators/ingredient.validator.ts";

const messagesIngredientTypes = APP_ERRORS.PRODUCT_TYPES;
const messages = APP_ERRORS.PRODUCT;

async function handlerInsertIngredient(req: Ingrediente): Promise<Ingrediente> {
  const ingrediente: Ingrediente = req;

  try {
    validateInsertIngredient(ingrediente);

    // const ingredientType = await handlerSelectIngredientsTypes({
    //   tipo_ingrediente_id: ingrediente.tipo_ingrediente_id!,
    // });

    // if (ingredientType.length === 0) {
    //   throw new AppError(messagesIngredientTypes.SELECT.NOT_FOUND);
    // }

    const ingredients = await handlerSelectIngredients({
      nome: ingrediente.nome,
    });

    if (ingredients.length > 0) {
      throw new AppError(messages.MULTIPLE.ALREADY_EXISTS_NAME);
    }

    return await insertIngredient(ingrediente);
  } catch (err) {
    const error: Message = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: ingredient.controller :: handlerInsertIngredient - [error]: ${
        error.message
      }`,
    );

    throw new AppError(error);
  }
}

async function handlerSelectIngredients(
  req: Partial<Ingrediente>,
): Promise<Ingrediente[]> {
  const ingrediente: Partial<Ingrediente> = req;

  try {
    return await selectIngredients(ingrediente);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: ingredient.controller :: handlerSelectIngredients - [error]: ${
        error.message
      }`,
    );

    throw new AppError({ message: error.message, status: error.status });
  }
}

async function handlerUpdateIngredient(
  req: Partial<Ingrediente>,
  novoIngrediente: Ingrediente,
): Promise<Ingrediente> {
  const ingrediente: Partial<Ingrediente> = req;

  try {
    if (!ingrediente.ingrediente_id) {
      throw new AppError({
        message: "Número identificador do ingrediente não informado.",
        status: HTTP_STATUS.BAD_REQUEST,
      });
    }

    validateUpdateIngredient(ingrediente, novoIngrediente);

    const ingredients = await handlerSelectIngredients({
      nome: novoIngrediente.nome,
    });

    const alreadyExists = ingredients.some(
      (ingredient) => ingredient.ingrediente_id !== ingrediente.ingrediente_id,
    );

    if (alreadyExists) {
      throw new AppError(messages.MULTIPLE.ALREADY_EXISTS_NAME);
    }

    // if (novoIngrediente.tipo_ingrediente_id) {
    //   const ingredientType =
    //     await handlerSelectIngredientsTypes(novoIngrediente);
    //   if (ingredientType.length === 0) {
    //     throw new AppError(messagesIngredientTypes.SELECT.NOT_FOUND);
    //   }
    // }

    return await updateIngredient(ingrediente, novoIngrediente);
  } catch (err) {
    const error: Message = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: ingredient.controller :: handlerUpdateIngredient - [error]: ${
        error.message
      }`,
    );

    throw new AppError({ message: error.message, status: error.status });
  }
}

async function handlerDeleteIngredient(
  req: Partial<Ingrediente>,
): Promise<Ingrediente> {
  const ingrediente: Partial<Ingrediente> = req;

  try {
    if (!ingrediente.ingrediente_id) {
      throw new AppError(messages.DELETE.NO_ID);
    }

    return await deleteIngredient(ingrediente);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: ingredient.controller :: handlerDeleteIngredient - [error]: ${
        error.message
      }`,
    );

    throw new AppError({ message: error.message, status: error.status });
  }
}

export {
  handlerInsertIngredient,
  handlerSelectIngredients,
  handlerUpdateIngredient,
  handlerDeleteIngredient,
};
