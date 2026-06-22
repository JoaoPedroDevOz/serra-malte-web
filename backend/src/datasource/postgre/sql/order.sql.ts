import { prisma } from "../index.ts";
import {
  IRegisterPedidoInput,
  IFiltrarPedidosInput,
} from "../../../models/entities/pedido.entity.ts";
import { treatDatabaseMessages } from "../../../utils/messages.util.ts";

export async function insertOrder(req: IRegisterPedidoInput) {
  try {
    const novoPedido = await prisma.tbl_pedido.create({
      data: {
        cliente_id: req.cliente_id,
        status_pedido_id: req.status_pedido_id,
        data_hora_pedido: new Date(req.data_hora_pedido),
        rel_pedido_produto: {
          create: req.itens.map((item) => ({
            produto_id: item.produto_id,
            valor_unitario: item.valor_unitario,
            quantidade: item.quantidade,
          })),
        },
      },
      include: {
        rel_pedido_produto: true,
      },
    });

    console.log(
      `sql: pedido.sql :: insertOrder - [success]: ${JSON.stringify(novoPedido)}`,
    );
    return novoPedido;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.log(`sql: pedido.sql :: insertOrder - [error]: ${errorMessage}`);

    const error = treatDatabaseMessages(errorMessage);
    throw new Error(`Erro ao registrar o pedido. ${error.message}`);
  }
}

export async function selectOrders(req: IFiltrarPedidosInput) {
  try {
    const whereClause: any = {};

    if (req.pedido_id) whereClause.pedido_id = req.pedido_id;
    if (req.cliente_id) whereClause.cliente_id = req.cliente_id;
    if (req.status_pedido_id)
      whereClause.status_pedido_id = req.status_pedido_id;

    const listPedidos = await prisma.tbl_pedido.findMany({
      where: whereClause,
      include: {
        tbl_cliente: true,
        tbl_status_pedido: true,
        rel_pedido_produto: {
          include: {
            tbl_produto: true,
          },
        },
      },
    });

    console.log(
      `sql: pedido.sql :: selectOrders - [success]: ${listPedidos.length} encontrados`,
    );
    return listPedidos;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.log(`sql: pedido.sql :: selectOrders - [error]: ${errorMessage}`);

    const error = treatDatabaseMessages(errorMessage);
    throw new Error(`Erro ao consultar pedidos. ${error.message}`);
  }
}
