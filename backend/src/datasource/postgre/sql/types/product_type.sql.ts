import { AppError } from "../../../../models/classes/error.class.ts";
import { Produto } from "../../../../models/entities/produto.entity.ts";
import { treatDatabaseMessages } from "../../../../utils/messages.util.ts";
import { prisma } from "../../index.ts";

async function insertProductType(req: Partial<Produto>): Promise<any> {
  try {
    const productType = await prisma.tbl_tipo_produto.create({
      data: {
        tipo: req.tipo?.texto!,
      },
    });

    console.log(
      `sql: product_type.sql :: insertProductType - [success]: ${JSON.stringify(productType)}`,
    );

    return {
      tipo: {
        tipo_produto_id: productType.tipo_produto_id,
        texto: productType.tipo,
      },
    };
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

async function selectProductTypes(req: Partial<Produto>): Promise<any[]> {
  try {
    const whereClause: any = {};

    if (req.tipo?.tipo_produto_id) {
      whereClause.tipo_produto_id = req.tipo.tipo_produto_id;
    }

    if (req.tipo?.texto) {
      whereClause.tipo = {
        contains: req.tipo.texto,
        mode: "insensitive",
      };
    }

    const productTypesList = await prisma.tbl_tipo_produto.findMany({
      where: whereClause,
    });

    // Retorna mapeado para manter compatibilidade com a interface de Produto do Frontend
    return productTypesList.map((pt) => ({
      tipo: {
        tipo_produto_id: pt.tipo_produto_id,
        texto: pt.tipo,
      },
    }));
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(
      `sql: product_type.sql :: selectProductTypes - [error]: ${errorMessage}`,
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
): Promise<any> {
  try {
    const productType = await prisma.tbl_tipo_produto.update({
      where: {
        tipo_produto_id: toUpdateReq.tipo?.tipo_produto_id!,
      },
      data: {
        tipo: req.tipo?.texto ?? "",
      },
    });

    console.log(
      `sql: product_type.sql :: updateProductType - [success]: ${JSON.stringify(productType)}`,
    );

    return {
      tipo: {
        tipo_produto_id: productType.tipo_produto_id,
        texto: productType.tipo,
      },
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

async function deleteProductType(req: Partial<Produto>): Promise<any> {
  try {
    const tipoProduto = await prisma.tbl_tipo_produto.delete({
      where: {
        tipo_produto_id: req.tipo?.tipo_produto_id!,
      },
    });

    console.log(
      `sql: product_type.sql :: deleteProductType - [success]: ${JSON.stringify(tipoProduto)}`,
    );

    return {
      tipo: {
        tipo_produto_id: tipoProduto.tipo_produto_id,
        texto: tipoProduto.tipo,
      },
    };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.log(
      `sql: product_type.sql :: deleteProductType - [error]: ${errorMessage}`,
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
