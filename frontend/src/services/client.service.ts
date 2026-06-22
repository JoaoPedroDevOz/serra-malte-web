import { routeApi, URLS } from "../shared/utils/routes.util";

export async function registerClient(clientData: {
  nome: string;
  registro_nacional: string;
  email?: string;
  telefone?: string;
  tipo_pessoa_id?: number;
}) {
  try {
    const response = await routeApi(URLS.CLIENTE, "POST", clientData);
    return response.data?.cliente;
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;
    const finalMessage =
      businessMessage || err?.message || "Erro ao registrar cliente.";
    throw new Error(finalMessage);
  }
}
