import { routeApi, URLS } from "../shared/utils/routes.util";
import { Order } from "../shared/models/interfaces/order.interface";

export async function listOrders(): Promise<Order[]> {
  try {
    const response = await routeApi(URLS.PEDIDO, "GET");
    const data = Array.isArray(response.data) ? response.data : [];

    return data.map((item: any) => ({
      orderId: item.pedido_id,
      timeStampOrder: new Date(item.data_hora_pedido),

      client: {
        clientId: item.tbl_cliente?.cliente_id || item.cliente_id,
        typeClientId:
          item.tbl_cliente?.tipo_cliente_id || item.tipo_cliente_id || 0,
        nationalRegister: item.tbl_cliente?.cpf || item.tbl_cliente?.cnpj || "",
        name: item.tbl_cliente?.nome || "",
        surname: item.tbl_cliente?.sobrenome || "",
        email: item.tbl_cliente?.email || "",
      },

      status: {
        statusId:
          item.tbl_status_pedido?.status_pedido_id || item.status_pedido_id,
        statusText: item.tbl_status_pedido?.status || item.status || "",
      },

      productList: Array.isArray(item.rel_pedido_produto)
        ? item.rel_pedido_produto.map((rel: any) => ({
            productId: rel.produto_id,
            name: rel.tbl_produto?.nome || rel.nome || "",
            unitValue: Number(rel.valor_unitario),
            quantity: rel.quantidade,
          }))
        : [],
    })) as Order[];
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;
    const finalMessage =
      businessMessage ||
      err?.message ||
      "Aconteceu um erro inesperado ao listar pedidos.";

    console.error("Erro capturado na service de pedidos:", finalMessage);
    return [];
  }
}

export async function createOrder(payload: {
  cliente_id: number;
  status_pedido_id: number;
  data_hora_pedido: string;
  itens: Array<{
    produto_id: number;
    valor_unitario: number;
    quantidade: number;
  }>;
}) {
  try {
    const response = await routeApi(URLS.PEDIDO, "POST", payload);
    return response.data?.pedido;
  } catch (err: any) {
    const businessMessage = err?.response?.data?.error?.message;
    const finalMessage =
      businessMessage || err?.message || "Erro ao criar pedido.";
    throw new Error(finalMessage);
  }
}
