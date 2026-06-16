import axios, { Method } from "axios";

export async function routeApi(
  endpoint: string,
  method: Method,
  body?: any,
  queryParams?: any,
) {
  return await axios({
    url: `${URLS.BASE}${endpoint}`,
    method: method,
    data: body || null,
    params: queryParams || null,
  });
}

// --- Configurações de API fornecidas ---
export const URLS = {
  BASE: "http://localhost:3030/api/",
  FORNECEDOR: "fornecedor/",
  PRODUTO: "produto/",
  FORNECEDOR_PRODUTO: "fornecedor/produto/",
  FORNECIMENTO_INGREDIENTE: "fornecedor/ingrediente/",
  INGREDIENTE: "ingrediente/",
  INGREDIENTE_TIPOS: "ingrediente/tipos/",
};
