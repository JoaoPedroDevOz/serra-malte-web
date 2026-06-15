import { Fornecedor } from "../shared/models/entities/fornecedor.entity";
import { Supplier } from "../shared/models/interfaces/supplier.interface";
import { routeApi, URLS } from "../shared/utils/routes.util";

export async function registerSupplier(supplier: Supplier): Promise<Supplier> {
  const body: Fornecedor = {
    email: supplier.email,
    contato: supplier.contact,
    telefone: supplier.phone,
    nome: supplier.name,
    registro_nacional: supplier.nationalRegister,
  };

  try {
    const response = await routeApi(URLS.FORNECEDOR, "POST", body);

    const fornecedor = response.data.fornecedor;

    return {
      supplierId: fornecedor.fornecedor_id,
      name: fornecedor.nome,
      contact: fornecedor.contato,
      email: fornecedor.email,
      phone: fornecedor.telefone,
      nationalRegister: fornecedor.registro_nacional,
    } as Supplier;
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;

    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";

    console.error("Erro capturado na service:", finalMessage);

    throw new Error(`Erro ao registrar fornecedor. ${finalMessage}`);
  }
}

export async function listSuppliers(): Promise<Supplier[]> {
  try {
    const response = await routeApi(URLS.FORNECEDOR, "GET");

    return response.data.map((item: Fornecedor) => ({
      supplierId: item.fornecedor_id,
      name: item.nome,
      contact: item.contato,
      email: item.email,
      phone: item.telefone,
      nationalRegister: item.registro_nacional,
    })) as Supplier[];
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;

    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";

    console.error("Erro capturado na service:", finalMessage);

    if (businessMessage) {
      throw new Error(`Erro pesquisar fornecedores. ${finalMessage}`);
    } else {
      return [];
    }
  }
}

export async function editSupplier(supplier: Supplier): Promise<Supplier> {
  const body: Fornecedor = {
    email: supplier.email,
    contato: supplier.contact,
    telefone: supplier.phone,
    nome: supplier.name,
    registro_nacional: supplier.nationalRegister,
  };

  try {
    const response = await routeApi(URLS.FORNECEDOR, "PATCH", body, {
      fornecedor_id: supplier.supplierId,
    });

    const fornecedor = response.data.fornecedor || response.data;

    return {
      supplierId: fornecedor.fornecedor_id,
      name: fornecedor.nome,
      contact: fornecedor.contato,
      email: fornecedor.email,
      phone: fornecedor.telefone,
      nationalRegister: fornecedor.registro_nacional,
    } as Supplier;
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;

    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";

    console.error("Erro capturado na service:", finalMessage);

    throw new Error(`Erro atualizar dados do fornecedor. ${finalMessage}`);
  }
}

export async function removeSupplier(supplier: Partial<Supplier>) {
  try {
    await routeApi(
      URLS.FORNECEDOR,
      "DELETE",
      {},
      {
        fornecedor_id: supplier.supplierId,
      },
    );

    return;
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;

    const finalMessage =
      businessMessage || err?.message || "Aconteceu um erro inesperado.";

    console.error("Erro capturado na service:", finalMessage);

    throw new Error(`Erro atualizar dados do fornecedor. ${finalMessage}`);
  }
}
