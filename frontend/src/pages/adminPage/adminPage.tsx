import { Beer, Package, Droplet, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Ingredient } from "../../shared/models/interfaces/ingredient.interface";
import { Order } from "../../shared/models/interfaces/order.interface";
import { Product } from "../../shared/models/interfaces/product.interface";
import { Supplier } from "../../shared/models/interfaces/supplier.interface";
import IngredientList from "./forms/IngredientsForm";
import OrderList from "./forms/OrderForm";
import OrderReport from "./forms/OrderReport";
import SupplierList from "./forms/SupplierForm";
import ProductList from "./forms/ProductForm";

export default function BrewerySystem() {
  const [activeTab, setActiveTab] = useState<
    "beers" | "suppliers" | "ingredients" | "orders" | "reports"
  >("beers");

  // MOCK DATA ADAPTADO PARA AS NOVAS INTERFACES
  const [beers, setBeers] = useState<Product[]>([
    {
      productId: 1,
      typeProductId: 1,
      name: "IPA Tropical",
      abv: 6.5,
      ibu: 65,
      unitValue: 18.9,
    },
    {
      productId: 2,
      typeProductId: 1,
      name: "Pilsen Puro Malte",
      abv: 4.8,
      ibu: 25,
      unitValue: 12.9,
    },
    {
      productId: 3,
      typeProductId: 1,
      name: "Stout Imperial",
      abv: 8.2,
      ibu: 45,
      unitValue: 22.9,
    },
  ]);

  const [suppliers, setSuppliers] = useState<Supplier[]>([
    {
      supplierId: 1,
      name: "Maltes Brasil",
      contact: "João Silva",
      email: "joao@maltesbrasil.com",
      phone: "(11) 98765-4321",
      nationalRegister: "71526455000193",
    },
    {
      supplierId: 2,
      name: "Lúpulos Premium",
      contact: "Maria Santos",
      email: "maria@lupulospremium.com",
      phone: "(11) 97654-3210",
      nationalRegister: "67328084000168",
    },
  ]);

  const [ingredients, setIngredients] = useState<Ingredient[]>([
    {
      ingredientId: 1,
      name: "Malte Pilsen",
      type: { id: 1, text: "Malte" },
      unitValue: 500,
    }, // Tratando unitValue como a quantidade/estoque para manter coerência visual
    {
      ingredientId: 2,
      name: "Lúpulo Cascade",
      type: { id: 2, text: "Lúpulo" },
      unitValue: 50,
    },
    {
      ingredientId: 3,
      name: "Levedura Ale",
      type: { id: 3, text: "Levedura" },
      unitValue: 100,
    },
  ]);

  const [orders, setOrders] = useState<Order[]>([
    {
      orderId: 1,
      timeStampOrder: new Date("2026-05-10"),
      status: { statusId: 3, statusText: "Entregue" },
      client: {
        clientId: 1,
        typeClientId: 2,
        nationalRegister: "123",
        name: "Bar do Zé",
      },
      productList: [{ productId: 1, quantity: 24, unitValue: 18.9 }],
    },
    {
      orderId: 2,
      timeStampOrder: new Date("2026-05-12"),
      status: { statusId: 1, statusText: "Pendente" },
      client: {
        clientId: 2,
        typeClientId: 2,
        nationalRegister: "456",
        name: "Restaurante Bom Sabor",
      },
      productList: [{ productId: 2, quantity: 48, unitValue: 12.9 }],
    },
    {
      orderId: 3,
      timeStampOrder: new Date("2026-05-13"),
      status: { statusId: 2, statusText: "Em Produção" },
      client: {
        clientId: 3,
        typeClientId: 2,
        nationalRegister: "789",
        name: "Empório da Cerveja",
      },
      productList: [{ productId: 3, quantity: 12, unitValue: 22.9 }],
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <a
        href="/"
        className="fixed top-4 right-4 z-50 bg-white text-gray-700 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
      >
        ← Voltar para o Site
      </a>

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
          <ProductList beers={beers} setBeers={setBeers} />
        )}
        {activeTab === "suppliers" && (
          <SupplierList suppliers={suppliers} setSuppliers={setSuppliers} />
        )}
        {activeTab === "ingredients" && (
          <IngredientList
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        )}
        {activeTab === "orders" && (
          <OrderList orders={orders} setOrders={setOrders} beers={beers} />
        )}
        {activeTab === "reports" && (
          <OrderReport orders={orders} beers={beers} />
        )}
      </div>
    </div>
  );
}
