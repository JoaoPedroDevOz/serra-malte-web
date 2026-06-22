import { useEffect, useState } from "react";
import { listOrders } from "../../../services/order.service";
import { Order } from "../../../shared/models/interfaces/order.interface";

export default function OrderReport() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      const data = await listOrders();
      setOrders(data);
      setLoading(false);
    }

    fetchOrders();
  }, []);

  const reportRows = orders.flatMap((order) =>
    order.productList.map((item, itemIndex) => ({
      key: `${order.orderId}-${item.productId}-${itemIndex}`,
      orderId: order.orderId,
      clientName: `${order.client.name}${order.client.surname ? ` ${order.client.surname}` : ""}`,
      clientEmail: order.client.email || "-",
      productName: item.name || "Desconhecido",
      quantity: item.quantity,
      unitPrice: item.unitValue,
      totalPrice: item.quantity * item.unitValue,
      orderDate: order.timeStampOrder,
      status: order.status.statusText,
    })),
  );

  const grandTotal = reportRows.reduce((sum, row) => sum + row.totalPrice, 0);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-600">
        Carregando relatório de pedidos...
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-500">
        Ainda não há pedidos para exibir no relatório.
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Relatório de Pedidos
          </h2>
          <p className="text-sm text-gray-600">
            Todos os pedidos, cliente, produtos e informações de cada transação.
          </p>
        </div>
        <div className="text-sm text-gray-700">
          {orders.length} pedido(s) • Total geral: R$ {grandTotal.toFixed(2)}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full text-sm min-w-[900px]">
          <thead className="bg-amber-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">Pedido</th>
              <th className="px-4 py-3 text-left">Cliente</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Produto</th>
              <th className="px-4 py-3 text-left">Quantidade</th>
              <th className="px-4 py-3 text-left">Preço Unit.</th>
              <th className="px-4 py-3 text-left">Total Item</th>
              <th className="px-4 py-3 text-left">Data</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {reportRows.map((row, index) => (
              <tr
                key={row.key}
                className={index % 2 === 0 ? "bg-white" : "bg-amber-50/40"}
              >
                <td className="px-4 py-3 text-gray-600">#{row.orderId}</td>
                <td className="px-4 py-3 font-medium text-gray-900">
                  {row.clientName}
                </td>
                <td className="px-4 py-3 text-gray-600">{row.clientEmail}</td>
                <td className="px-4 py-3 font-medium text-gray-900">
                  {row.productName}
                </td>
                <td className="px-4 py-3 text-gray-600">{row.quantity}</td>
                <td className="px-4 py-3 text-gray-600">
                  R$ {row.unitPrice.toFixed(2)}
                </td>
                <td className="px-4 py-3 font-semibold text-amber-700">
                  R$ {row.totalPrice.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {row.orderDate.toLocaleDateString("pt-BR")}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      row.status === "Entregue"
                        ? "bg-green-100 text-green-700"
                        : row.status === "Pendente"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
