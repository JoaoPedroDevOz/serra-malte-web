import { prisma } from "../index.ts";
import { AppError } from "../../../models/classes/error.class.ts";
import { Cliente } from "../../../models/entities/cliente.entity.ts";
import { treatDatabaseMessages } from "../../../utils/messages.util.ts";

export async function insertClient(req: Cliente) {
  try {
    const cliente = await prisma.tbl_cliente.create({
      data: req,
    });

    console.log(
      `sql: cliente.sql :: insertClient - [success]: ${JSON.stringify(cliente)}`,
    );

    return cliente;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.log(`sql: cliente.sql :: insertClient - [error]: ${errorMessage}`);

    const error = treatDatabaseMessages(errorMessage);

    throw new AppError({
      message: `Erro ao registrar cliente. ${error.message}`,
      status: error.status,
    });
  }
}
