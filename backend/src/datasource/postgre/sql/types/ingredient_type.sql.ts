import { AppError } from "../../../../models/classes/error.class.ts";
import { Ingrediente } from "../../../../models/entities/ingrediente.entity.ts";
import { treatDatabaseMessages } from "../../../../utils/messages.util.ts";
import { prisma } from "../../index.ts";

async function selectIngredientTypes(req: any): Promise<any[]> {
  try {
    const whereClause: any = {};

    if (req.tipo?.tipo_ingrediente_id) {
      whereClause.tipo_ingrediente_id = req.tipo.tipo_ingrediente_id;
    }

    if (req.tipo?.texto) {
      whereClause.tipo = {
        contains: req.tipo.texto,
        mode: "insensitive",
      };
    }

    const productTypesList = await prisma.tbl_tipo_ingrediente.findMany({
      where: whereClause,
    });

    return productTypesList;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.error(
      `sql: product_type.sql :: selectProducts - [error]: ${errorMessage}`,
    );

    const error = treatDatabaseMessages(errorMessage);
    throw new AppError({
      message: `Erro ao consultar tipos de ingredientes. ${error.message}`,
      status: error.status,
    });
  }
}

export { selectIngredientTypes };
