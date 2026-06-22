import { useEffect, useState } from "react";
import { listOrders } from "../../../services/order.service";
import { Order } from "../../../shared/models/interfaces/order.interface";

export default function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInitialData() {
      const ordersData = await listOrders();
      setOrders(ordersData);
      setLoading(false);
    }

    fetchInitialData();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-600">
        Carregando pedidos...
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Pedidos Recebidos
        </h2>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-500">
          Nenhum pedido recebido ainda.
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-white rounded-3xl shadow-sm p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Pedido #{order.orderId}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Cliente: {order.client.name} {order.client.surname || ""}
                    {order.client.email ? ` • ${order.client.email}` : ""}
                  </p>
                </div>
                <div className="text-sm text-gray-600">
                  <div>
                    Data: {order.timeStampOrder.toLocaleDateString("pt-BR")}
                  </div>
                  <div>Status: {order.status.statusText}</div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {order.productList.map((item, index) => (
                  <div
                    key={`${order.orderId}-${item.productId}-${index}`}
                    className="rounded-2xl border border-gray-200 bg-amber-50/70 p-4"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="font-medium text-gray-900">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          ID Produto: {item.productId}
                        </div>
                      </div>
                      <div className="text-sm text-gray-700">
                        Total: R$ {(item.quantity * item.unitValue).toFixed(2)}
                      </div>
                    </div>
                    <div className="mt-3 grid gap-2 sm:grid-cols-3 text-sm text-gray-700">
                      <span>Quantidade: {item.quantity}</span>
                      <span>
                        Preço unitário: R$ {item.unitValue.toFixed(2)}
                      </span>
                      <span>
                        Subtotal: R${" "}
                        {(item.quantity * item.unitValue).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
