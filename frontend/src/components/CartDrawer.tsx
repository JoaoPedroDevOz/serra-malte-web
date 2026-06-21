import { useState } from "react";
import { useCart } from "../Context/CartContext";

export default function CartDrawer() {
  const [open, setOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const { items, increaseQty, decreaseQty, removeItem, count, checkout } = useCart();

  const handleCheckout = () => {
    if (!customerName.trim()) {
      alert("Informe seu nome para finalizar o pedido.");
      return;
    }
    if (items.length === 0) return;
    checkout(customerName);
    setCustomerName("");
    setOpen(false);
    alert("Pedido enviado! Acompanhe no painel administrativo.");
  };

  return (
    <>
      {/* Ícone flutuante */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9998,
          backgroundColor: "#e8820c",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "1.5rem",
          boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          cursor: "pointer",
        }}
      >
        🛒
        {count > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-4px",
              right: "-4px",
              backgroundColor: "#e74c3c",
              color: "#fff",
              borderRadius: "50%",
              width: "22px",
              height: "22px",
              fontSize: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {count}
          </span>
        )}
      </button>

      {/* Painel lateral */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "100%",
            maxWidth: "380px",
            height: "100%",
            backgroundColor: "#fff",
            boxShadow: "-4px 0 24px rgba(0,0,0,0.2)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h2 style={{ margin: 0, color: "#1a1a1a" }}>Seu Carrinho</h2>
            <button
              onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", fontSize: "1.3rem", cursor: "pointer" }}
            >
              ✕
            </button>
          </div>

          {items.length === 0 ? (
            <p style={{ color: "#888" }}>Seu carrinho está vazio.</p>
          ) : (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
                {items.map((item) => (
                  <div
                    key={item.beerId}
                    style={{
                      borderBottom: "1px solid #eee",
                      paddingBottom: "0.75rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600 }}>{item.beerName}</div>
                      <div style={{ color: "#e8820c", fontWeight: 600 }}>{item.price}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <button
                        onClick={() => decreaseQty(item.beerId)}
                        style={{ padding: "0.25rem 0.6rem", border: "1px solid #ddd", borderRadius: "6px", cursor: "pointer", background: "#fafafa" }}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item.beerId)}
                        style={{ padding: "0.25rem 0.6rem", border: "1px solid #ddd", borderRadius: "6px", cursor: "pointer", background: "#fafafa" }}
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.beerId)}
                        style={{ padding: "0.25rem 0.5rem", border: "none", borderRadius: "6px", cursor: "pointer", background: "transparent", color: "#e74c3c" }}
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "1.5rem" }}>
                <label style={{ fontSize: "0.85rem", color: "#555" }}>Seu nome</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Digite seu nome"
                  style={{
                    width: "100%",
                    padding: "0.6rem",
                    marginTop: "0.3rem",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                  }}
                />

                <button
                  onClick={handleCheckout}
                  style={{
                    width: "100%",
                    marginTop: "1rem",
                    padding: "0.85rem",
                    backgroundColor: "#e8820c",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Finalizar Pedido
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}