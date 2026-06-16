import {
  Ingredient,
  IngredientSupply,
} from "../shared/models/interfaces/ingredient.interface";
import { routeApi, URLS } from "../shared/utils/routes.util";

export async function registerIngredient(
  ingredient: Ingredient,
): Promise<Ingredient> {
  const body: any = {
    ingrediente_id: ingredient.ingredientId,
    tipo: {
      tipo_ingrediente_id: ingredient.type.id,
      texto: ingredient.type.text,
    },
    nome: ingredient.name,
    valor_unitario: ingredient.unitValue,
    quantidade_estoque: ingredient.quantity, // Mapeado corretamente para a API
  };

  try {
    const response = await routeApi(URLS.INGREDIENTE, "POST", body);
    const ingrediente = response.data.ingrediente || response.data;

    return {
      ingredientId: ingrediente.ingrediente_id,
      type: {
        id:
          ingrediente.tipo?.tipo_ingrediente_id ||
          ingrediente.tipo_ingrediente_id,
        text: ingrediente.tipo?.texto || "",
      },
      name: ingrediente.nome,
      unitValue: ingrediente.valor_unitario,
      quantity: ingrediente.quantidade_estoque || 0,
    } as Ingredient;
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;
    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";
    console.error("Erro capturado na service:", finalMessage);
    throw new Error(finalMessage);
  }
}

export async function listIngredients(): Promise<Ingredient[]> {
  try {
    const response = await routeApi(URLS.INGREDIENTE, "GET");
    const data = Array.isArray(response.data) ? response.data : [];

    return data.map((item: any) => ({
      ingredientId: item.ingrediente_id,
      type: {
        id: item.tipo?.tipo_ingrediente_id || item.tipo_ingrediente_id,
        text: item.tipo?.texto || "",
      },
      name: item.nome,
      unitValue: item.valor_unitario,
      quantity: item.quantidade_estoque || 0,
    })) as Ingredient[];
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;
    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";
    console.error("Erro capturado na service:", finalMessage);
    return [];
  }
}

export async function editIngredient(
  ingredient: Ingredient,
): Promise<Ingredient> {
  const body: any = {
    tipo: {
      tipo_ingrediente_id: ingredient.type.id,
      texto: ingredient.type.text,
    },
    nome: ingredient.name,
    valor_unitario: ingredient.unitValue,
    quantidade_estoque: ingredient.quantity,
  };

  const query: Partial<any> = {
    ingrediente_id: ingredient.ingredientId,
  };

  try {
    const response = await routeApi(URLS.INGREDIENTE, "PATCH", body, query);
    const ingrediente = response.data.ingrediente || response.data;

    return {
      ingredientId: ingrediente.ingrediente_id,
      type: {
        id:
          ingrediente.tipo?.tipo_ingrediente_id ||
          ingrediente.tipo_ingrediente_id,
        text: ingrediente.tipo?.texto || "",
      },
      name: ingrediente.nome,
      unitValue: ingrediente.valor_unitario,
      quantity: ingrediente.quantidade_estoque || 0,
    } as Ingredient;
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;
    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";
    console.error("Erro capturado na service:", finalMessage);
    throw new Error(finalMessage);
  }
}

export async function removeIngredient(ingredient: Partial<Ingredient>) {
  try {
    const query: Partial<any> = {
      ingrediente_id: ingredient.ingredientId,
    };
    await routeApi(URLS.INGREDIENTE, "DELETE", {}, query);
    return;
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;
    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";
    console.error("Erro capturado na service:", finalMessage);
    throw new Error(`Erro ao remover ingrediente. ${finalMessage}`);
  }
}

export interface IngredientTypeOption {
  id: number;
  label: string;
  value: string;
}

export async function listIngredientTypes(): Promise<IngredientTypeOption[]> {
  try {
    const response = await routeApi(URLS.INGREDIENTE_TIPOS, "GET");
    const data = Array.isArray(response.data) ? response.data : [];

    return data.map((item: any) => ({
      id: item.tipo_ingrediente_id,
      label: item.tipo,
      value: item.tipo,
    }));
  } catch (err: any) {
    return [];
  }
}

export async function registerIngredientSupply(
  supplyIng: IngredientSupply,
): Promise<any> {
  const body = {
    fornecedor_id: supplyIng.supplier.supplierId!,
    ingrediente_id: supplyIng.ingredient.ingredientId,
    quantidade: supplyIng.quantity,
    valor_fornecimento: supplyIng.supplyValue,
    data_hora_fornecimento: supplyIng.supplyDate || new Date(),
  };

  try {
    const response = await routeApi(
      URLS.FORNECIMENTO_INGREDIENTE,
      "POST",
      body,
    );
    return response.data.fornecimento || response.data;
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;
    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";
    console.error("Erro capturado na service de fornecimento:", finalMessage);
    throw new Error(finalMessage);
  }
}
