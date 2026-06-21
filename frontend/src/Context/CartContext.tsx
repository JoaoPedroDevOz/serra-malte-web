import React, { createContext, useContext, useState } from "react";
import { useOrders } from "./OrdersContext";

export interface CartItem {
  beerId: number;
  beerName: string;
  price: string; // ex: "R$ 18,90"
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (beerId: number, beerName: string, price: string) => void;
  increaseQty: (beerId: number) => void;
  decreaseQty: (beerId: number) => void;
  removeItem: (beerId: number) => void;
  clearCart: () => void;
  count: number;
  checkout: (customerName: string) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

function parsePrice(price: string): number {
  return parseFloat(price.replace("R$", "").replace(",", ".").trim());
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const { addOrder } = useOrders();

  const addItem = (beerId: number, beerName: string, price: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.beerId === beerId);
      if (existing) {
        return prev.map((i) =>
          i.beerId === beerId ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { beerId, beerName, price, quantity: 1 }];
    });
  };

  const increaseQty = (beerId: number) => {
    setItems((prev) =>
      prev.map((i) => (i.beerId === beerId ? { ...i, quantity: i.quantity + 1 } : i)),
    );
  };

  const decreaseQty = (beerId: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.beerId === beerId ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0),
    );
  };

  const removeItem = (beerId: number) => {
    setItems((prev) => prev.filter((i) => i.beerId !== beerId));
  };

  const clearCart = () => setItems([]);

  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  const checkout = (customerName: string) => {
    items.forEach((item) => {
      addOrder({
        customerName,
        beerName: item.beerName,
        price: item.price,
        quantity: item.quantity,
      });
    });
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, increaseQty, decreaseQty, removeItem, clearCart, count, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}