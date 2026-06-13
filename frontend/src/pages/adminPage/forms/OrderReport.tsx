import { Order } from "../../../shared/models/interfaces/order.interface";
import { Product } from "../../../shared/models/interfaces/product.interface";

interface OrderReportProps {
  orders: Order[];
  beers: Product[];
}

export default function OrderReport({ orders, beers }: OrderReportProps) {
  // Simulação da junção dos dados baseado nas novas subestruturas de listas de produtos
  const reportData = orders.map((order) => {
    const product = order.productList[0]; // Mapeia o item atual
    const beer = beers.find((b) => b.productId === product?.productId);
    const quantity = product?.quantity || 0;
    const unitPrice = product?.unitValue || beer?.unitValue || 0;

    return {
      id: order.orderId,
      customerName: order.client.name,
      beerName: beer?.name || "Desconhecida",
      beerStyle: beer?.typeProductId === 1 ? "Pilsen" : "Especial", // Exemplo de fallback baseado em tipo
      quantity: quantity,
      price: unitPrice,
      totalPrice: quantity * unitPrice,
      date: order.timeStampOrder,
      status: order.status.statusText,
    };
  });

  const grandTotal = reportData.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Relatório Detalhado de Pedidos (JOIN das Estruturas)
      </h2>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-amber-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Cliente</th>
              <th className="px-4 py-3 text-left">Cerveja</th>
              <th className="px-4 py-3 text-left">Estilo</th>
              <th className="px-4 py-3 text-left">Quantidade</th>
              <th className="px-4 py-3 text-left">Preço Unit.</th>
              <th className="px-4 py-3 text-left">Total</th>
              <th className="px-4 py-3 text-left">Data</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {reportData.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? "bg-white" : "bg-amber-50/40"}
              >
                <td className="px-4 py-3 text-gray-600">{item.id}</td>
                <td className="px-4 py-3 font-medium text-gray-900">
                  {item.customerName}
                </td>
                <td className="px-4 py-3 font-medium text-gray-900">
                  {item.beerName}
                </td>
                <td className="px-4 py-3 text-gray-600">{item.beerStyle}</td>
                <td className="px-4 py-3 text-gray-600">{item.quantity}</td>
                <td className="px-4 py-3 text-gray-600">
                  R$ {item.price.toFixed(2)}
                </td>
                <td className="px-4 py-3 font-semibold text-amber-700">
                  R$ {item.totalPrice.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {new Date(item.date).toLocaleDateString("pt-BR")}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      item.status === "Entregue"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Pendente"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-amber-100 font-semibold text-gray-800">
            <tr>
              <td colSpan={6} className="px-4 py-3 text-right">
                Total Geral:
              </td>
              <td className="px-4 py-3 text-amber-700 font-bold text-base">
                R$ {grandTotal.toFixed(2)}
              </td>
              <td colSpan={2}></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
