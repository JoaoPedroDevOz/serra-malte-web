import { AppError } from "../../../models/classes/error.class.ts";
import { Produto } from "../../../models/entities/produto.entity.ts";
import { treatDatabaseMessages } from "../../../utils/messages.util.ts";
import { prisma } from "../index.ts";

async function insertProduct(req: Produto): Promise<Produto> {
  try {
    const productType = await prisma.tbl_tipo_produto.findUnique({
      where: {
        tipo_produto_id: req.tipo_produto_id,
      },
    });

    const product = await prisma.tbl_produto.create({
      data: req,
    });

    console.log(
      `sql: product.sql :: insertProduct - [success]: ${JSON.stringify(product)}`,
    );

    return {
      produto_id: product.produto_id,
      tipo_produto_id: req.tipo_produto_id,
      tipo: productType?.tipo!,
      nome: product.nome,
      valor_unitario: Number(product.valor_unitario),
      ibu: product.ibu ? Number(product.ibu) : null,
      abv: product.abv ? Number(product.abv) : null,
    };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.log(`sql: product.sql :: insertProduct - [error]: ${errorMessage}`);

    const error = treatDatabaseMessages(errorMessage);
    throw new AppError({
      message: `Erro ao adicionar produto. ${error.message}`,
      status: error.status,
    });
  }
}

async function selectProducts(req: Partial<Produto>): Promise<Produto[]> {
  try {
    const whereClause: any = {};

    if (req.produto_id) {
      whereClause.produto_id = req.produto_id;
    }

    if (req.nome) {
      whereClause.nome = {
        contains: req.nome,
        mode: "insensitive",
      };
    }

    const productsList = await prisma.tbl_produto.findMany({
      where: whereClause,
    });

    return productsList.map((prod) => ({
      ...prod,
      valor_unitario: prod.valor_unitario
        ? prod.valor_unitario.toNumber()
        : null,
    })) as Produto[];
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.error(
      `sql: product.sql :: selectProducts - [error]: ${errorMessage}`,
    );

    const error = treatDatabaseMessages(errorMessage);

    throw new AppError({
      message: `Erro ao consultar produtos. ${error.message}`,
      status: error.status,
    });
  }
}

async function updateProduct(
  toUpdateReq: Partial<Produto>,
  req: Produto,
): Promise<Produto> {
  try {
    const product = await prisma.tbl_produto.update({
      where: {
        produto_id: toUpdateReq.produto_id!,
      },
      data: req,
    });

    console.log(`sql: product.sql :: updateProduct - [success]: ${product}`);

    return {
      ...product,
      valor_unitario: product.valor_unitario?.toNumber() || 0,
      abv: product.abv?.toNumber() || 0,
    };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.log(`sql: product.sql :: updateProduct - [error]: ${errorMessage}`);

    const error = treatDatabaseMessages(errorMessage);

    throw new AppError({
      message: `Erro ao atualizar produto. ${error.message}`,
      status: error.status,
    });
  }
}

async function deleteProduct(req: Partial<Produto>): Promise<Produto> {
  try {
    const product = await prisma.tbl_produto.delete({
      where: {
        produto_id: req.produto_id!,
      },
    });

    return {
      ...product,
      valor_unitario: product.valor_unitario?.toNumber() || 0,
      abv: product.abv?.toNumber() || 0,
    };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.log(`sql: product.sql :: insertProduct - [error]: ${errorMessage}`);

    const error = treatDatabaseMessages(errorMessage);

    throw new AppError({
      message: `Erro ao excluir produto. ${error.message}`,
      status: error.status,
    });
  }
}

export { insertProduct, selectProducts, updateProduct, deleteProduct };
