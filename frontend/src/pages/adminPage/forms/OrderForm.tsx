import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Order } from "../../../shared/models/interfaces/order.interface";
import { Product } from "../../../shared/models/interfaces/product.interface";
import Input from "../../../components/Input";
import Select from "../../../components/Select";

interface OrderListProps {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  beers: Product[];
}

export default function OrderList({
  orders,
  setOrders,
  beers,
}: OrderListProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);

  const [formData, setFormData] = useState({
    customerName: "",
    productId: beers[0]?.productId || 0,
    quantity: 1,
    date: new Date().toISOString().split("T")[0],
    statusText: "Pendente",
  });

  const handleEdit = (order: Order) => {
    setEditingOrder(order);
    setFormData({
      customerName: order.client.name,
      productId: order.productList[0]?.productId || 0,
      quantity: order.productList[0]?.quantity || 1,
      date: new Date(order.timeStampOrder).toISOString().split("T")[0],
      statusText: order.status.statusText,
    });
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedBeer = beers.find((b) => b.productId === formData.productId);
    const unitValue = selectedBeer ? selectedBeer.unitValue : 0;

    const orderData = {
      status: { statusId: 1, statusText: formData.statusText },
      client: {
        clientId: editingOrder?.client.clientId || Date.now(),
        typeClientId: 1,
        nationalRegister: "000",
        name: formData.customerName,
      },
      timeStampOrder: new Date(formData.date),
      productList: [
        {
          productId: formData.productId,
          quantity: formData.quantity,
          unitValue,
        },
      ],
    };

    if (editingOrder) {
      setOrders(
        orders.map((o) =>
          o.orderId === editingOrder.orderId ? { ...o, ...orderData } : o,
        ),
      );
    } else {
      const newId = Math.max(...orders.map((o) => o.orderId), 0) + 1;
      setOrders([...orders, { ...orderData, orderId: newId }]);
    }
    setShowForm(false);
    setEditingOrder(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Pedidos Registrados
        </h2>
        <button
          onClick={() => {
            setEditingOrder(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700"
        >
          <Plus className="w-4 h-4" /> Novo Pedido
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-sm mb-4"
        >
          <h3 className="text-lg font-medium mb-4">
            {editingOrder ? "Editar Pedido" : "Novo Pedido"}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                label="Cliente"
                type="text"
                required
                placeholder="Insira o nome do cliente"
                value={formData.customerName}
                onChange={(e) =>
                  setFormData({ ...formData, customerName: e.target.value })
                }
              />
            </div>
            <div>
              <Select
                label="Produto"
                value={formData.productId}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    productId: parseInt(e.target.value),
                  })
                }
                options={beers.map((b) => ({
                  value: b.productId,
                  label: `${b.name} - R$ ${b.unitValue.toFixed(2)}`,
                }))}
              ></Select>
            </div>
            <div>
              <Input
                label="Quantidade"
                type="number"
                min="1"
                required
                placeholder="Insira o quantidade"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    quantity: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div>
              <Input
                label="Data"
                type="date"
                required
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>
            <div className="col-span-2">
              <Select
                label="Status"
                value={formData.statusText}
                placeholder="Selecione"
                onChange={(e) =>
                  setFormData({ ...formData, statusText: e.target.value })
                }
                options={[
                  {
                    value: "Pendente",
                    label: "Pendente",
                  },
                  {
                    value: "Em Produção",
                    label: "Em Produção",
                  },
                  {
                    value: "Entregue",
                    label: "Entregue",
                  },
                ]}
              ></Select>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="bg-amber-600 text-white px-4 py-2 rounded-lg"
            >
              Salvar
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      <div className="grid gap-4">
        {orders.map((order) => {
          const product = order.productList[0];
          const beerName =
            beers.find((b) => b.productId === product?.productId)?.name ||
            "Desconhecida";
          return (
            <div
              key={order.orderId}
              className="bg-white rounded-lg shadow-sm flex justify-between items-center p-8"
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">
                  {order.client.name}
                </h3>
                <div className="flex gap-4 mt-2 text-sm text-gray-600">
                  <span>Cerveja: {beerName}</span>
                  <span>Quantidade: {product?.quantity || 0}</span>
                  <span>
                    Data:{" "}
                    {new Date(order.timeStampOrder).toLocaleDateString("pt-BR")}
                  </span>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      order.status.statusText === "Entregue"
                        ? "bg-green-100 text-green-700"
                        : order.status.statusText === "Pendente"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {order.status.statusText}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(order)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setOrders(orders.filter((o) => o.orderId !== order.orderId))
                  }
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
