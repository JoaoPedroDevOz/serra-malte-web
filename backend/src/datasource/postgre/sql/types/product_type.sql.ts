import { AppError } from "../../../../models/classes/error.class.ts";
import { Produto } from "../../../../models/entities/produto.entity.ts";
import { treatDatabaseMessages } from "../../../../utils/messages.util.ts";
import { prisma } from "../../index.ts";

async function insertProductType(
  req: Partial<Produto>,
): Promise<Partial<Produto>> {
  try {
    if (!selectProductTypes(req)) {
    }

    const productType = await prisma.tbl_tipo_produto.create({
      data: {
        tipo_produto_id: req.tipo_produto_id!,
        tipo: req.tipo!,
      },
    });

    console.log(
      `sql: product_type.sql :: insertProductType - [success]: ${JSON.stringify(productType)}`,
    );

    return productType;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.log(
      `sql: product_type.sql :: insertProductType - [error]: ${errorMessage}`,
    );

    const error = treatDatabaseMessages(errorMessage);
    throw new AppError({
      message: `Erro ao adicionar tipo de produto. ${error.message}`,
      status: error.status,
    });
  }
}

async function selectProductTypes(
  req: Partial<Produto>,
): Promise<Partial<Produto[]>> {
  try {
    const whereClause: any = {};

    if (req.tipo_produto_id) {
      whereClause.tipo_produto_id = req.tipo_produto_id;
    }

    if (req.tipo) {
      whereClause.tipo = {
        contains: req.tipo,
        mode: "insensitive",
      };
    }

    const productTypesList = await prisma.tbl_tipo_produto.findMany({
      where: whereClause,
    });

    return productTypesList as Partial<Produto[]>;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.error(
      `sql: product_type.sql :: selectProducts - [error]: ${errorMessage}`,
    );

    const error = treatDatabaseMessages(errorMessage);

    throw new AppError({
      message: `Erro ao consultar tipos de produtos. ${error.message}`,
      status: error.status,
    });
  }
}

async function updateProductType(
  toUpdateReq: Partial<Produto>,
  req: Partial<Produto>,
): Promise<Partial<Produto>> {
  try {
    const productType = await prisma.tbl_tipo_produto.update({
      where: {
        tipo_produto_id: toUpdateReq.tipo_produto_id!,
      },
      data: req,
    });

    console.log(
      `sql: product_type.sql :: updateProductType - [success]: ${productType}`,
    );

    return {
      ...productType,
    };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.log(
      `sql: product_type.sql :: updateProductType - [error]: ${errorMessage}`,
    );

    const error = treatDatabaseMessages(errorMessage);

    throw new AppError({
      message: `Erro ao atualizar tipo de produto. ${error.message}`,
      status: error.status,
    });
  }
}

async function deleteProductType(
  req: Partial<Produto>,
): Promise<Partial<Produto>> {
  try {
    const tipoProduto = await prisma.tbl_tipo_produto.delete({
      where: {
        tipo_produto_id: req.tipo_produto_id!,
      },
    });

    return tipoProduto as Partial<Produto>;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.log(
      `sql: supplier.sql :: deleteProductType - [error]: ${errorMessage}`,
    );

    const error = treatDatabaseMessages(errorMessage);

    throw new AppError({
      message: `Erro ao excluir tipo de produto. ${error.message}`,
      status: error.status,
    });
  }
}

export {
  insertProductType,
  selectProductTypes,
  updateProductType,
  deleteProductType,
};
