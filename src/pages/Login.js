import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import "../styles/global.css";
import "../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await login(email, password);

      if (response.success) {
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate("/dashboard");
      } else {
        alert("Credenciais inválidas");
      }
    } catch (error) {
      alert("Erro ao fazer login. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginCard">
        <div className="p-5">
          <div className="loginHeader">
            <h1 className="loginTitle">ERP System</h1>
            <p className="loginSubtitle">Faça login para continuar</p>
          </div>

          <form className="loginForm" onSubmit={handleLogin}>
            <div className="formGroup">
              <label htmlFor="email" className="formLabel">Email</label>
              <input
                id="email"
                type="email"
                className={`formControl formInputLarge ${isLoading ? 'disabled' : ''}`}
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="formGroup">
              <label htmlFor="password" className="formLabel">Senha</label>
              <input
                id="password"
                type="password"
                className={`formControl formInputLarge ${isLoading ? 'disabled' : ''}`}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <button 
              type="submit" 
              className={`loginButton ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className="loginFooter">
            <small> 2024 ERP System. Todos os direitos reservados.</small>
          </div>
        </div>
      </div>
    </div>
  );
}