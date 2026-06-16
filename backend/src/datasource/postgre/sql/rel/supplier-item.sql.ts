import { Prisma } from "../../../../generated/prisma/client.ts";
import { AppError } from "../../../../models/classes/error.class.ts";
import { FornecedorProdutoIngrediente } from "../../../../models/entities/rel/fornecedor-produto-ingrediente.entity.ts";
import { treatDatabaseMessages } from "../../../../utils/messages.util.ts";
import { prisma } from "../../index.ts";

async function insertIngredientSupply(
  req: FornecedorProdutoIngrediente,
): Promise<any> {
  try {
    if (!req.ingrediente_id) {
      throw new Error("ID do ingrediente inválido para inserção.");
    }

    const insertData: Prisma.rel_fornecedor_ingredienteCreateInput = {
      quantidade: req.quantidade || 1,
      valor_fornecimento: req.valor_fornecimento,
      data_hora_fornecimento: req.data_hora_fornecimento
        ? new Date(req.data_hora_fornecimento)
        : new Date(),
      tbl_fornecedor: {
        connect: { fornecedor_id: req.fornecedor_id },
      },
      tbl_ingrediente: {
        connect: { ingrediente_id: req.ingrediente_id },
      },
    };

    const supply = (await prisma.rel_fornecedor_ingrediente.create({
      data: insertData,
      include: {
        tbl_fornecedor: true,
        tbl_ingrediente: {
          include: {
            tbl_tipo_ingrediente: true,
          },
        },
      },
    })) as Prisma.rel_fornecedor_ingredienteGetPayload<{
      include: {
        tbl_fornecedor: true;
        tbl_ingrediente: { include: { tbl_tipo_ingrediente: true } };
      };
    }>;

    console.log(
      `sql: supply.sql :: insertIngredientSupply - [success]: ${JSON.stringify(supply)}`,
    );

    return {
      fornecedor_id: supply.fornecedor_id,
      ingrediente_id: supply.ingrediente_id,
      data_hora_fornecimento: supply.data_hora_fornecimento,
      quantidade: supply.quantidade,
      valor_fornecimento: supply.valor_fornecimento
        ? supply.valor_fornecimento.toNumber()
        : 0,
      fornecedor: {
        nome: supply.tbl_fornecedor.nome,
        email: supply.tbl_fornecedor.email,
        contato: supply.tbl_fornecedor.contato,
        telefone: supply.tbl_fornecedor.telefone,
        registro_nacional: supply.tbl_fornecedor.registro_nacional,
      },
      ingrediente: {
        nome: supply.tbl_ingrediente.nome,
        valor_unitario: supply.tbl_ingrediente.valor_unitario
          ? supply.tbl_ingrediente.valor_unitario.toNumber()
          : 0,
        tipo: {
          tipo_ingrediente_id:
            supply.tbl_ingrediente.tbl_tipo_ingrediente?.tipo_ingrediente_id ||
            0,
          texto: supply.tbl_ingrediente.tbl_tipo_ingrediente?.tipo || "",
        },
      },
    };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.log(
      `sql: supply.sql :: insertIngredientSupply - [error]: ${errorMessage}`,
    );

    const dbError = treatDatabaseMessages(errorMessage);

    throw new AppError({
      message: `Erro ao adicionar histórico de fornecimento. ${dbError.message}`,
      status: dbError.status,
    });
  }
}

export { insertIngredientSupply };
