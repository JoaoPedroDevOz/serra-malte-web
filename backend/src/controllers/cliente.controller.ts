import { AppError } from "../models/classes/error.class.ts";
import { insertClient } from "../datasource/postgre/sql/client.sql.ts";
import { Cliente } from "../models/entities/cliente.entity.ts";
import { validateInsertCliente } from "../validators/cliente.validator.ts";

export async function handlerInsertClient(req: Cliente) {
  try {
    const cliente = {
      tipo_pessoa_id: req.tipo_pessoa_id ?? 1,
      registro_nacional: req.registro_nacional?.trim() || "N/A",
      nome: req.nome,
    } as Cliente;

    if (req.sobrenome !== undefined) cliente.sobrenome = req.sobrenome;
    if (req.nome_fantasia !== undefined)
      cliente.nome_fantasia = req.nome_fantasia;
    if (req.email !== undefined) cliente.email = req.email;
    if (req.telefone !== undefined) cliente.telefone = req.telefone;

    validateInsertCliente(cliente);

    return await insertClient(cliente);
  } catch (err) {
    const error = {
      status: err instanceof AppError ? err.statusCode : 500,
      message: err instanceof AppError ? err.message : String(err),
    };

    console.log(
      `controller: cliente.controller :: handlerInsertClient - [error]: ${error.message}`,
    );

    throw new AppError({ message: error.message, status: error.status });
  }
}
