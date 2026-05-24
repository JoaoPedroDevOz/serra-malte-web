import { AppError } from "../../../models/classes/error.class.ts";
import {
  Fornecedor,
  PesquisaFornecedor,
} from "../../../models/entities/fornecedor.entity.ts";
import { treatDatabaseMessages } from "../../../utils/messages.util.ts";
import { prisma } from "../index.ts";

async function insertSupplier(req: Fornecedor): Promise<Fornecedor> {
  try {
    const supplier = await prisma.tbl_fornecedor.create({
      data: req,
    });

    console.log(`sql: supplier.sql :: insertSupplier - [success]: ${supplier}`);

    return supplier as Fornecedor;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.log(
      `sql: supplier.sql :: insertSupplier - [error]: ${errorMessage}`,
    );

    const error = treatDatabaseMessages(errorMessage);

    throw new AppError(
      `Erro ao consultar fornecedores. ${error.message}`,
      error.status,
    );
  }
}

async function selectSuppliers(req: PesquisaFornecedor): Promise<Fornecedor[]> {
  try {
    const whereClause: any = {};

    if (req.fornecedor_id) {
      whereClause.fornecedor_id = req.fornecedor_id;
    }

    if (req.registro_nacional) {
      whereClause.registro_nacional = req.registro_nacional;
    }

    if (req.nome) {
      whereClause.nome = {
        contains: req.nome,
        mode: "insensitive",
      };
    }

    const suppliersList = await prisma.tbl_fornecedor.findMany({
      where: whereClause,
    });

    return suppliersList as Fornecedor[];
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.error(
      `sql: supplier.sql :: selectSuppliers - [error]: ${errorMessage}`,
    );

    const error = treatDatabaseMessages(errorMessage);

    throw new AppError(
      `Erro ao consultar fornecedores. ${error.message}`,
      error.status,
    );
  }
}

async function updateSupplier(
  toUpdateReq: PesquisaFornecedor,
  req: Fornecedor,
): Promise<Fornecedor> {
  try {
    const supplier = await prisma.tbl_fornecedor.update({
      where: {
        fornecedor_id: toUpdateReq.fornecedor_id!,
      },
      data: req,
    });

    console.log(`sql: supplier.sql :: updateSupplier - [success]: ${supplier}`);

    return supplier as Fornecedor;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.log(
      `sql: supplier.sql :: updateSupplier - [error]: ${errorMessage}`,
    );

    const error = treatDatabaseMessages(errorMessage);

    throw new AppError(
      `Erro ao atualizar fornecedor. ${error.message}`,
      error.status,
    );
  }
}

async function deleteSupplier(req: PesquisaFornecedor): Promise<Fornecedor> {
  try {
    const supplier = await prisma.tbl_fornecedor.delete({
      where: {
        fornecedor_id: req.fornecedor_id!,
      },
    });

    return supplier as Fornecedor;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.log(
      `sql: supplier.sql :: insertSupplier - [error]: ${errorMessage}`,
    );

    const error = treatDatabaseMessages(errorMessage);

    throw new AppError(
      `Erro ao excluir fornecedor. ${error.message}`,
      error.status,
    );
  }
}

export { insertSupplier, selectSuppliers, updateSupplier, deleteSupplier };
