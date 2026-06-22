import { Beer, Package, Droplet, ShoppingCart } from "lucide-react";
import { useState } from "react";
import IngredientList from "./forms/IngredientsList";
import SupplierList from "./forms/SupplierList";
import ProductList from "./forms/ProductList";
import OrderReport from "./forms/OrderReport";
import Message from "../../components/Message";
import OrderList from "./forms/OrderList";

export default function BrewerySystem() {
  const [activeTab, setActiveTab] = useState<
    "beers" | "suppliers" | "ingredients" | "orders" | "reports"
  >("beers");

  const [apiMessage, setApiMessage] = useState<{
    text: string;
    status: "success" | "warn" | "error";
  } | null>(null);

  const showSystemMessage = (
    text: string,
    status: "success" | "warn" | "error",
  ) => {
    setApiMessage({ text, status });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 relative">
      {/* Componente Message isolado e flutuando no topo do sistema */}

      <a
        href="/"
        className="fixed top-4 right-4 z-50 bg-white text-gray-700 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
      >
        ← Voltar para o Site
      </a>

      {apiMessage && (
        <Message
          text={apiMessage.text}
          status={apiMessage.status}
          onClose={() => setApiMessage(null)}
        />
      )}

      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="flex items-center gap-3 mb-2 text-2xl font-bold text-gray-900">
            <Beer className="w-8 h-8 text-amber-600" />
            <span>Sistema de Gerenciamento - Serra & Malte</span>
          </h1>
          <p className="text-gray-600">
            Gerencie cervejas, fornecedores, ingredientes e pedidos
          </p>
        </div>

        {/* Abas */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setActiveTab("beers")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "beers" ? "bg-amber-600 text-white" : "bg-white text-gray-700 hover:bg-amber-50"}`}
          >
            <Beer className="w-4 h-4" /> Cervejas
          </button>
          <button
            onClick={() => setActiveTab("suppliers")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "suppliers" ? "bg-amber-600 text-white" : "bg-white text-gray-700 hover:bg-amber-50"}`}
          >
            <Package className="w-4 h-4" /> Fornecedores
          </button>
          <button
            onClick={() => setActiveTab("ingredients")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "ingredients" ? "bg-amber-600 text-white" : "bg-white text-gray-700 hover:bg-amber-50"}`}
          >
            <Droplet className="w-4 h-4" /> Ingredientes
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "orders" ? "bg-amber-600 text-white" : "bg-white text-gray-700 hover:bg-amber-50"}`}
          >
            <ShoppingCart className="w-4 h-4" /> Pedidos
          </button>
          <button
            onClick={() => setActiveTab("reports")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "reports" ? "bg-amber-600 text-white" : "bg-white text-gray-700 hover:bg-amber-50"}`}
          >
            Relatório de Pedidos
          </button>
        </div>

        {/* Conteúdo Dinâmico das Abas */}
        {activeTab === "beers" && (
          <ProductList onShowMessage={showSystemMessage} />
        )}
        {activeTab === "suppliers" && (
          <SupplierList onShowMessage={showSystemMessage} />
        )}

        {/* Passando a função de emitir mensagem para o componente de Ingredientes */}
        {activeTab === "ingredients" && (
          <IngredientList onShowMessage={showSystemMessage} />
        )}

        {activeTab === "orders" && <OrderList />}
        {activeTab === "reports" && <OrderReport />}
      </div>
    </div>
  );
}
