import { Ingredient } from "../shared/models/interfaces/ingredient.interface";
import { routeApi, URLS } from "../shared/utils/routes.util";

export async function registerIngredient(
  ingredient: Ingredient,
): Promise<Ingredient> {
  const body: Ingrediente = {
    ingrediente_id: ingredient.ingredientId,
    tipo: {
      tipo_ingrediente_id: 1,
      texto: ingredient.type.text,
    },
    nome: ingredient.name,
    valor_unitario: ingredient.unitValue,
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
      ibu: ingrediente.ibu,
      abv: ingrediente.abv,
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

    return data.map((item: Ingrediente) => ({
      ingredientId: item.ingrediente_id,
      type: {
        id: item.tipo?.tipo_ingrediente_id,
        text: item.tipo?.texto || "",
      },
      name: item.nome,
      unitValue: item.valor_unitario,
    })) as Ingredient[];
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;

    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";

    console.error("Erro capturado na service:", finalMessage);

    if (businessMessage) {
      throw new Error(finalMessage);
    } else {
      return [];
    }
  }
}

export async function editIngredient(
  ingredient: Ingredient,
): Promise<Ingredient> {
  const body: Ingrediente = {
    tipo: {
      tipo_ingrediente_id: ingredient.type.id,
      texto: ingredient.type.text,
    },
    nome: ingredient.name,
    valor_unitario: ingredient.unitValue,
  };

  const query: Partial<Ingrediente> = {
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
    const query: Partial<Ingrediente> = {
      ingrediente_id: ingredient.ingredientId,
    };

    console.log(query);
    await routeApi(URLS.INGREDIENTE, "DELETE", {}, query);

    return;
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;

    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";

    console.error("Erro capturado na service:", finalMessage);

    throw new Error(`Erro atualizar dados do ingrediente. ${finalMessage}`);
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
    const businessMessage = err?.response?.data?.error?.message;
    const finalMessage =
      businessMessage ||
      err?.message ||
      "Erro ao carregar tipos de ingredientes.";

    console.error("Erro na service de tipos:", finalMessage);
    return [];
  }
}
