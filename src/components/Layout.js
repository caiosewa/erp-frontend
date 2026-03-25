import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/global.css";
import "../styles/Layout.css";

export default function Layout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const menuItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: "⚡",
      active: location.pathname === "/dashboard"
    },
    {
      path: "/vendas",
      label: "Vendas",
      icon: "🛒",
      active: location.pathname === "/vendas"
    },
    {
      path: "/clientes",
      label: "Clientes",
      icon: "👥",
      active: location.pathname === "/clientes"
    },
    {
      path: "/produtos",
      label: "Produtos",
      icon: "📦",
      active: location.pathname === "/produtos"
    },
    {
      path: "/pedidos",
      label: "Pedidos",
      icon: "📋",
      active: location.pathname === "/pedidos"
    },
    {
      path: "/relatorios",
      label: "Relatórios",
      icon: "📊",
      active: location.pathname === "/relatorios"
    },
    {
      path: "/configuracoes",
      label: "Configurações",
      icon: "⚙️",
      active: location.pathname === "/configuracoes"
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="layoutContainer">
      {/* Header */}
      <header className="layoutHeader">
        <div className="headerContent">
          <button 
            className="headerToggle"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            ☰
          </button>
          
          <a href="/dashboard" className="headerBrand">
            🏢 ERP System
          </a>

          <nav className="headerNav">
            <div className="userDropdown">
              <button 
                className="userDropdownToggle"
                onClick={toggleUserDropdown}
              >
                👤 {user?.name || "Usuário"} ▼
              </button>
              
              {userDropdownOpen && (
                <div className="userDropdownMenu">
                  <button className="dropdownItem">
                    👤 Perfil
                  </button>
                  <button className="dropdownItem">
                    ⚙️ Configurações
                  </button>
                  <div className="dropdownDivider"></div>
                  <button className="dropdownItem" onClick={handleLogout}>
                    🚪 Sair
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      <div className={`layoutContent ${sidebarCollapsed ? 'sidebarCollapsed' : ''}`}>
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarCollapsed ? 'sidebarCollapsed' : 'sidebarNotCollapsed'}`}>
          <div className="sidebarContent">
            <h6 className="sidebarTitle">Menu</h6>
            <ul className="sidebarNav">
              {menuItems.map((item, index) => (
                <li className="sidebarNavItem" key={index}>
                  <button
                    className={`sidebarNavLink ${item.active ? 'sidebarNavLinkActive' : ''}`}
                    onClick={() => handleNavigation(item.path)}
                  >
                    <span className="sidebarNavIcon">{item.icon}</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="mainContent">
          <div className="mainContentInner">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
