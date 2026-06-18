import { Produto } from "../shared/models/entities/produto.entity";
import { Product } from "../shared/models/interfaces/product.interface";
import { routeApi, URLS } from "../shared/utils/routes.util";

export interface ProductTypeOption {
  id: number;
  label: string;
  value: string;
}

export async function registerProduct(product: Product): Promise<Product> {
  const body: any = {
    produto_id: product.productId,
    tipo: {
      tipo_produto_id: product.type.id,
      texto: product.type.text,
    },
    nome: product.name,
    valor_unitario: product.unitValue,
    ibu: product.ibu || null,
    abv: product.abv || 0,
  };

  try {
    const response = await routeApi(URLS.PRODUTO, "POST", body);
    const produto = response.data.produto || response.data;

    return {
      productId: produto.produto_id,
      type: {
        id: produto.tipo?.tipo_produto_id || produto.tipo_produto_id,
        text: produto.tipo?.texto || produto.tipo || "",
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
    throw new Error(finalMessage);
  }
}

export async function listProducts(): Promise<Product[]> {
  try {
    const response = await routeApi(URLS.PRODUTO, "GET");
    const data = Array.isArray(response.data) ? response.data : [];

    return data.map((item: any) => ({
      productId: item.produto_id,
      type: {
        id: item.tipo?.tipo_produto_id || item.tipo_produto_id,
        text: item.tipo?.texto || item.tipo || "",
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
    return [];
  }
}

export async function editProduct(product: Product): Promise<Product> {
  const body: any = {
    tipo: {
      tipo_produto_id: product.type.id,
      texto: product.type.text,
    },
    nome: product.name,
    valor_unitario: product.unitValue,
    ibu: product.ibu || null,
    abv: product.abv || 0,
  };

  const query: Partial<any> = {
    produto_id: product.productId,
  };

  try {
    const response = await routeApi(URLS.PRODUTO, "PATCH", body, query);
    const produto = response.data.produto || response.data;

    return {
      productId: produto.produto_id,
      type: {
        id: produto.tipo?.tipo_produto_id || produto.tipo_produto_id,
        text: produto.tipo?.texto || produto.tipo || "",
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
    throw new Error(finalMessage);
  }
}

export async function removeProduct(product: Partial<Product>) {
  try {
    const query: Partial<any> = {
      produto_id: product.productId,
    };
    await routeApi(URLS.PRODUTO, "DELETE", {}, query);
    return;
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;
    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";
    console.error("Erro capturado na service:", finalMessage);
    throw new Error(`Erro ao remover produto. ${finalMessage}`);
  }
}

export async function listProductTypes(): Promise<ProductTypeOption[]> {
  try {
    const response = await routeApi(URLS.PRODUTO_TIPOS, "GET");
    const data = Array.isArray(response.data) ? response.data : [];

    return data.map((item: any) => {
      const tipo = item.tipo;
      const id = tipo?.tipo_produto_id || item.tipo_produto_id;
      const label =
        typeof tipo === "object" ? tipo.texto : tipo || item.texto || "";
      const value = String(id ?? item.texto ?? label ?? "");

      return {
        id,
        label,
        value,
      };
    });
  } catch (err: any) {
    return [];
  }
}
