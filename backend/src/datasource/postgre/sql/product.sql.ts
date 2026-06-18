import { AppError } from "../../../models/classes/error.class.ts";
import { Produto } from "../../../models/entities/produto.entity.ts";
import { treatDatabaseMessages } from "../../../utils/messages.util.ts";
import { prisma } from "../index.ts";

// Funções auxiliares para converter com segurança tipos Decimal do Prisma para Number
const toNumberSafe = (value: any): number => {
  if (value && typeof value.toNumber === "function") {
    return value.toNumber();
  }
  return value ? Number(value) : 0;
};

const toNumberOrNull = (value: any): number | null => {
  if (value === null || value === undefined) return null;
  if (typeof value.toNumber === "function") {
    return value.toNumber();
  }
  return Number(value);
};

async function insertProduct(req: Produto): Promise<Produto> {
  try {
    const { produto_id, tipo, ...dadosDoProduto } = req;

    const insertData: any = {
      ...dadosDoProduto,
    };

    if (tipo?.tipo_produto_id) {
      insertData.tbl_tipo_produto = {
        connect: { tipo_produto_id: tipo.tipo_produto_id },
      };
    }

    const product = await prisma.tbl_produto.create({
      data: insertData,
      include: {
        tbl_tipo_produto: true,
      },
    });

    console.log(
      `sql: product.sql :: insertProduct - [success]: ${JSON.stringify(product)}`,
    );

    const { tbl_tipo_produto, ...resto } = product;

    return {
      ...resto,
      produto_id: product.produto_id,
      tipo: {
        tipo_produto_id: tbl_tipo_produto?.tipo_produto_id || 0,
        texto: tbl_tipo_produto?.tipo || "",
      },
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
      include: {
        tbl_tipo_produto: true,
      },
    });

    return productsList.map((prod) => {
      const { tbl_tipo_produto, ...resto } = prod;

      return {
        ...resto,
        produto_id: prod.produto_id,
        valor_unitario: toNumberSafe(prod.valor_unitario),
        ibu: toNumberOrNull(prod.ibu),
        abv: toNumberOrNull(prod.abv),
        tipo: {
          tipo_produto_id: tbl_tipo_produto?.tipo_produto_id || 0,
          texto: tbl_tipo_produto?.tipo || "",
        },
      };
    }) as unknown as Produto[];
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
    const updateData: any = { ...req };

    if (req.tipo && typeof req.tipo === "object") {
      updateData.tipo_produto_id = req.tipo.tipo_produto_id;
    }

    delete updateData.produto_id;
    delete updateData.tipo;

    if (toUpdateReq.nome && req.nome === toUpdateReq.nome) {
      delete updateData.nome;
    }

    const product = await prisma.tbl_produto.update({
      where: {
        produto_id: toUpdateReq.produto_id!,
      },
      data: updateData,
      include: {
        tbl_tipo_produto: true,
      },
    });

    console.log(
      `sql: product.sql :: updateProduct - [success]: ${JSON.stringify(product)}`,
    );

    const { tbl_tipo_produto, ...resto } = product;

    return {
      ...resto,
      produto_id: product.produto_id,
      valor_unitario: toNumberSafe(product.valor_unitario),
      ibu: toNumberOrNull(product.ibu),
      abv: toNumberOrNull(product.abv),
      tipo: {
        tipo_produto_id: tbl_tipo_produto?.tipo_produto_id || 0,
        texto: tbl_tipo_produto?.tipo || "",
      },
    } as unknown as Produto;
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
      include: {
        tbl_tipo_produto: true,
      },
    });

    console.log(
      `sql: product.sql :: deleteProduct - [success]: ${JSON.stringify(product)}`,
    );

    const { tbl_tipo_produto, ...resto } = product;

    return {
      ...resto,
      produto_id: product.produto_id,
      valor_unitario: toNumberSafe(product.valor_unitario),
      ibu: toNumberOrNull(product.ibu),
      abv: toNumberOrNull(product.abv),
      tipo: {
        tipo_produto_id: tbl_tipo_produto?.tipo_produto_id || 0,
        texto: tbl_tipo_produto?.tipo || "",
      },
    } as unknown as Produto;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.log(`sql: product.sql :: deleteProduct - [error]: ${errorMessage}`);

    const error = treatDatabaseMessages(errorMessage);
    throw new AppError({
      message: `Erro ao excluir produto. ${error.message}`,
      status: error.status,
    });
  }
}

export { insertProduct, selectProducts, updateProduct, deleteProduct };
