import { Trash2 } from "lucide-react";
import { useOrders } from "../../../Context/OrdersContext";

export default function OrderList() {
  const { orders, updateOrderStatus, removeOrder } = useOrders();

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Pedidos Recebidos
        </h2>
      </div>

      {orders.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-500">
          Nenhum pedido recebido ainda.
        </div>
      )}

      <div className="grid gap-4">
        {orders.map((order) => (
          <div
            key={order.orderId}
            className="bg-white rounded-lg shadow-sm flex justify-between items-center p-8"
          >
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">
                {order.customerName}
              </h3>
              <div className="flex gap-4 mt-2 text-sm text-gray-600">
                <span>Cerveja: {order.beerName}</span>
                <span>Quantidade: {order.quantity}</span>
                <span>Valor: {order.price}</span>
                <span>Data: {order.date}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={order.status}
                onChange={(e) => updateOrderStatus(order.orderId, e.target.value)}
                className={`px-2 py-1 rounded text-xs border-none outline-none ${
                  order.status === "Entregue"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Pendente"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                }`}
              >
                <option value="Pendente">Pendente</option>
                <option value="Em Produção">Em Produção</option>
                <option value="Entregue">Entregue</option>
              </select>

              <button
                onClick={() => removeOrder(order.orderId)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}