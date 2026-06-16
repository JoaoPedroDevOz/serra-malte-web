import { AppError } from "../../../models/classes/error.class.ts";
import { Ingrediente } from "../../../models/entities/ingrediente.entity.ts";
import { treatDatabaseMessages } from "../../../utils/messages.util.ts";
import { prisma } from "../index.ts";

async function insertIngredient(req: Ingrediente): Promise<Ingrediente> {
  try {
    const insertData: any = { ...req };

    delete insertData.ingrediente_id;

    if (req.tipo && typeof req.tipo === "object") {
      insertData.tbl_tipo_ingrediente = {
        connect: {
          tipo_ingrediente_id: req.tipo.tipo_ingrediente_id,
        },
      };
    }

    delete insertData.tipo;

    const ingredient = await prisma.tbl_ingrediente.create({
      data: insertData,
      include: {
        tbl_tipo_ingrediente: true,
      },
    });

    console.log(
      `sql: ingredient.sql :: insertIngredient - [success]: ${JSON.stringify(ingredient)}`,
    );

    const { tbl_tipo_ingrediente, ...resto } = ingredient;

    return {
      ...resto,
      valor_unitario: ingredient.valor_unitario
        ? ingredient.valor_unitario.toNumber()
        : 0,
      tipo: {
        tipo_ingrediente_id: tbl_tipo_ingrediente?.tipo_ingrediente_id || 0,
        texto: tbl_tipo_ingrediente?.tipo || "",
      },
      quantidade_estoque: ingredient.quantidade_estoque,
    } as unknown as Ingrediente;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.log(
      `sql: ingredient.sql :: insertIngredient - [error]: ${errorMessage}`,
    );

    const error = treatDatabaseMessages(errorMessage);
    throw new AppError({
      message: `Erro ao adicionar ingrediente. ${error.message}`,
      status: error.status,
    });
  }
}

async function selectIngredients(
  req: Partial<Ingrediente>,
): Promise<Ingrediente[]> {
  try {
    const whereClause: any = {};

    if (req.ingrediente_id) {
      whereClause.ingrediente_id = req.ingrediente_id;
    }

    if (req.nome) {
      whereClause.nome = {
        contains: req.nome,
        mode: "insensitive",
      };
    }

    const ingredientsList = await prisma.tbl_ingrediente.findMany({
      where: whereClause,
      include: {
        tbl_tipo_ingrediente: true,
      },
    });

    return ingredientsList.map((ingrediente) => {
      const { tbl_tipo_ingrediente, ...resto } = ingrediente;

      return {
        ...resto,
        valor_unitario: ingrediente.valor_unitario
          ? ingrediente.valor_unitario.toNumber()
          : 0,
        tipo: {
          tipo_ingrediente_id: tbl_tipo_ingrediente?.tipo_ingrediente_id || 0,
          texto: tbl_tipo_ingrediente?.tipo || "",
        },
      };
    }) as unknown as Ingrediente[];
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.error(
      `sql: ingredient.sql :: selectIngredients - [error]: ${errorMessage}`,
    );

    const error = treatDatabaseMessages(errorMessage);

    throw new AppError({
      message: `Erro ao consultar ingredientes. ${error.message}`,
      status: error.status,
    });
  }
}

async function updateIngredient(
  toUpdateReq: Partial<Ingrediente>,
  req: Ingrediente,
): Promise<Ingrediente> {
  try {
    const updateData: any = { ...req };

    if (req.tipo && typeof req.tipo === "object") {
      updateData.tipo_ingrediente_id = req.tipo.tipo_ingrediente_id;
    }

    delete updateData.ingrediente_id;
    delete updateData.tipo;

    if (toUpdateReq.nome && req.nome === toUpdateReq.nome) {
      delete updateData.nome;
    }

    const ingredient = await prisma.tbl_ingrediente.update({
      where: {
        ingrediente_id: toUpdateReq.ingrediente_id!,
      },
      data: updateData,
      include: {
        tbl_tipo_ingrediente: true,
      },
    });

    console.log(
      `sql: ingredient.sql :: updateIngredient - [success]: ${JSON.stringify(ingredient)}`,
    );

    const { tbl_tipo_ingrediente, ...resto } = ingredient;

    return {
      ...resto,
      valor_unitario: ingredient.valor_unitario
        ? ingredient.valor_unitario.toNumber()
        : 0,
      tipo: {
        tipo_ingrediente_id: tbl_tipo_ingrediente?.tipo_ingrediente_id || 0,
        texto: tbl_tipo_ingrediente?.tipo || "",
      },
    } as unknown as Ingrediente;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.log(
      `sql: ingredient.sql :: updateIngredient - [error]: ${errorMessage}`,
    );

    const error = treatDatabaseMessages(errorMessage);

    throw new AppError({
      message: `Erro ao atualizar ingrediente. ${error.message}`,
      status: error.status,
    });
  }
}

async function deleteIngredient(
  req: Partial<Ingrediente>,
): Promise<Ingrediente> {
  try {
    const ingredient = await prisma.tbl_ingrediente.delete({
      where: {
        ingrediente_id: req.ingrediente_id!,
      },
      include: {
        tbl_tipo_ingrediente: true,
      },
    });

    const { tbl_tipo_ingrediente, ...resto } = ingredient;

    return {
      ...resto,
      valor_unitario: ingredient.valor_unitario
        ? ingredient.valor_unitario.toNumber()
        : 0,
      tipo: {
        tipo_ingrediente_id: tbl_tipo_ingrediente?.tipo_ingrediente_id || 0,
        texto: tbl_tipo_ingrediente?.tipo || "",
      },
    } as unknown as Ingrediente;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.log(
      `sql: ingredient.sql :: deleteIngredient - [error]: ${errorMessage}`,
    );

    const error = treatDatabaseMessages(errorMessage);

    throw new AppError({
      message: `Erro ao excluir ingrediente. ${error.message}`,
      status: error.status,
    });
  }
}

export {
  insertIngredient,
  selectIngredients,
  updateIngredient,
  deleteIngredient,
};
