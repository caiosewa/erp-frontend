import React from "react";
import Layout from "../components/Layout";
import "../styles/global.css";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const statsData = [
    {
      title: "Vendas (Mês)",
      value: "R$ 12.500",
      icon: "",
      type: "primary"
    },
    {
      title: "Clientes Ativos",
      value: "32",
      icon: "",
      type: "success"
    },
    {
      title: "Pedidos Hoje",
      value: "18",
      icon: "",
      type: "info"
    },
    {
      title: "Produtos em Estoque",
      value: "247",
      icon: "",
      type: "warning"
    }
  ];

  const recentActivities = [
    {
      icon: "",
      text: "Nova venda #1234",
      time: "2 min",
      color: "text-success"
    },
    {
      icon: "",
      text: "Novo cliente cadastrado",
      time: "15 min",
      color: "text-info"
    },
    {
      icon: "",
      text: "Estoque baixo: Produto X",
      time: "1 hora",
      color: "text-warning"
    },
    {
      icon: "",
      text: "Pedido #5678 entregue",
      time: "2 horas",
      color: "text-primary"
    }
  ];

  return (
    <Layout>
      <div className="dashboardHeader">
        <div>
          <h1 className="dashboardTitle">Dashboard</h1>
          <p className="dashboardSubtitle">Bem-vindo de volta, {user?.name || "Usuário"}!</p>
        </div>
        <div className="dashboardActions">
          <button className="outlineButton">
            Exportar Relatório
          </button>
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="statsGrid">
        {statsData.map((stat, index) => (
          <div key={index} className={`statsCard statsCard${stat.type.charAt(0).toUpperCase() + stat.type.slice(1)}`}>
            <div className="statsCardContent">
              <div className="statsContent">
                <div className="statsLabel">{stat.title}</div>
                <div className="statsValue">{stat.value}</div>
              </div>
              <div className="statsIcon">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Gráficos e Atividades */}
      <div className="dashboardContent">
        <div className="contentCard">
          <div className="cardHeader">
            <h2 className="cardTitle">Vendas - Últimos 7 Dias</h2>
            <div className="cardActions">
              <button className="actionButton">⋯</button>
            </div>
          </div>
          <div className="cardBody">
            <div className="chartContainer">
              <div className="chartPlaceholder">
                <span className="chartIcon"></span>
                <p>Gráfico de vendas será implementado aqui</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contentCard">
          <div className="cardHeader">
            <h2 className="cardTitle">Atividades Recentes</h2>
          </div>
          <div className="cardBody">
            <ul className="activityList">
              {recentActivities.map((activity, index) => (
                <li key={index} className="activityItem">
                  <div className="activityContent">
                    <span className={`activityIcon ${activity.color}`}>{activity.icon}</span>
                    <span className="activityText">{activity.text}</span>
                  </div>
                  <span className="activityTime">{activity.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}