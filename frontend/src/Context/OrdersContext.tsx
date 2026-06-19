import React, { createContext, useContext, useState, useEffect } from "react";

export interface OrderItem {
  orderId: number;
  customerName: string;
  beerName: string;
  price: string;
  quantity: number;
  date: string;
  status: string;
}

interface OrdersContextType {
  orders: OrderItem[];
  addOrder: (order: Omit<OrderItem, "orderId" | "date" | "status">) => void;
  updateOrderStatus: (orderId: number, status: string) => void;
  removeOrder: (orderId: number) => void;
}

const OrdersContext = createContext<OrdersContextType>({} as OrdersContextType);

export function OrdersProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<OrderItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("serra_malte_orders");
    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("serra_malte_orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order: Omit<OrderItem, "orderId" | "date" | "status">) => {
    const newOrder: OrderItem = {
      ...order,
      orderId: Date.now(),
      date: new Date().toLocaleString("pt-BR"),
      status: "Pendente",
    };
    setOrders((prev) => [...prev, newOrder]);
  };

  const updateOrderStatus = (orderId: number, status: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.orderId === orderId ? { ...o, status } : o))
    );
  };

  const removeOrder = (orderId: number) => {
    setOrders((prev) => prev.filter((o) => o.orderId !== orderId));
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder, updateOrderStatus, removeOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrdersContext);
}