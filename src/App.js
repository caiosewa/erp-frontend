import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/global.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Vendas from "./pages/Vendas";
import Clientes from "./pages/Clientes";
import Produtos from "./pages/Produtos";
import Pedidos from "./pages/Pedidos";
import Relatorios from "./pages/Relatorios";
import Configuracoes from "./pages/Configuracoes";
import Admin from "./pages/Admin";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;