import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#1a1a2e", minHeight: "100vh", color: "#fff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ color: "#f5a623" }}>🍺 Painel Administrativo</h1>
        <div>
          <span style={{ marginRight: "1rem", color: "#aaa" }}>{user?.email}</span>
          <button
            onClick={handleLogout}
            style={{
              padding: "0.5rem 1.2rem",
              background: "#e74c3c",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Sair
          </button>
        </div>
      </div>
      <p style={{ color: "#aaa", marginTop: "1rem" }}>
        Bem-vindo, {user?.email}! Os CRUDs serão implementados aqui.
      </p>
    </div>
  );
}