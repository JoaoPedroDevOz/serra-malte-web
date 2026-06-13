import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const validate = (): boolean => {
    const newErrors = { email: "", password: "" };
    let valid = true;

    if (!email) {
      newErrors.email = "E-mail é obrigatório.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "E-mail inválido.";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Senha é obrigatória.";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    if (!validate()) return;
    const success = login(email, password);
    if (success) {
      navigate("/admin");
    } else {
      setLoginError("E-mail ou senha incorretos.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <div className="login-logo">
          <span>🍺</span>
          <span>Serra & Malte</span>
        </div>
        <p className="login-subtitle">Área Administrativa</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>E-mail</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && <span className="error-msg">{errors.password}</span>}
          </div>

          {loginError && <p className="login-error">{loginError}</p>}

          <button type="submit" className="login-btn">Entrar</button>
        </form>

      </div>
    </div>
  );
}