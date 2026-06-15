import { Produto } from "../shared/models/entities/produto.entity";
import { Product } from "../shared/models/interfaces/product.interface";
import { routeApi, URLS } from "../shared/utils/routes.util";

export async function registerProduct(product: Product): Promise<Product> {
  const body: Produto = {
    tipo_produto_id: product.type.id,
    tipo: product.type.text,
    nome: product.name,
    valor_unitario: product.unitValue,
    ibu: product.ibu || 0,
    abv: product.abv || 0,
  };

  try {
    const response = await routeApi(URLS.PRODUTO, "POST", body);

    const produto: Produto = response.data.produto;

    return {
      productId: produto.produto_id,
      type: {
        id: produto.tipo_produto_id,
        text: produto.tipo,
      },
      name: produto.nome,
      unitValue: produto.valor_unitario,
      ibu: produto.ibu,
      abv: produto.abv,
    } as Product;
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;

    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";

    console.error("Erro capturado na service:", finalMessage);

    throw new Error(`Erro ao registrar produto. ${finalMessage}`);
  }
}

export async function listProducts(): Promise<Product[]> {
  try {
    const response = await routeApi(URLS.PRODUTO, "GET");

    return response.data.map((item: Produto) => ({
      productId: item.produto_id,
      type: {
        id: item.tipo_produto_id,
        text: item.tipo,
      },
      name: item.nome,
      unitValue: item.valor_unitario,
      ibu: item.ibu,
      abv: item.abv,
    })) as Product[];
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;

    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";

    console.error("Erro capturado na service:", finalMessage);

    if (businessMessage) {
      throw new Error(`Erro pesquisar produtoes. ${finalMessage}`);
    } else {
      return [];
    }
  }
}

export async function editProduct(product: Product): Promise<Product> {
  const body: Produto = {
    tipo_produto_id: product.type.id,
    tipo: product.type.text,
    nome: product.name,
    valor_unitario: product.unitValue,
    ibu: product.ibu || 0,
    abv: product.abv || 0,
  };

  const query: Partial<Produto> = {
    produto_id: product.productId,
  };

  try {
    const response = await routeApi(URLS.PRODUTO, "PATCH", body, query);

    const produto = response.data.produto || response.data;

    return {
      productId: produto.produto_id,
      type: {
        id: produto.tipo_produto_id,
        text: produto.tipo,
      },
      name: produto.nome,
      unitValue: produto.valor_unitario,
      ibu: produto.ibu,
      abv: produto.abv,
    } as Product;
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;

    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";

    console.error("Erro capturado na service:", finalMessage);

    throw new Error(`Erro atualizar dados do produto. ${finalMessage}`);
  }
}

export async function removeProduct(product: Partial<Product>) {
  try {
    const query: Partial<Produto> = {
      produto_id: product.productId,
    };

    await routeApi(URLS.PRODUTO, "DELETE", {}, query);

    return;
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;

    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";

    console.error("Erro capturado na service:", finalMessage);

    throw new Error(`Erro atualizar dados do produto. ${finalMessage}`);
  }
}
