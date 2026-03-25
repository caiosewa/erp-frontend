import React from "react";
import Layout from "../components/Layout";
import "../styles/global.css";
import "../styles/Pages.css";

export default function Vendas() {
  const vendasData = [
    {
      id: "#1234",
      cliente: "João Silva",
      produto: "Produto A",
      valor: "R$ 1.200,00",
      data: "25/03/2024",
      status: "Concluída",
      statusType: "success"
    },
    {
      id: "#1233",
      cliente: "Maria Santos",
      produto: "Produto B",
      valor: "R$ 800,00",
      data: "24/03/2024",
      status: "Pendente",
      statusType: "warning"
    }
  ];

  return (
    <Layout>
      <div className="pageHeader">
        <div>
          <h1 className="pageTitle">Vendas</h1>
          <p className="pageSubtitle">Gerencie todas as vendas do sistema</p>
        </div>
        <div className="pageActions">
          <button className="primaryButton">
            <span className="primaryButtonIcon">➕</span>
            Nova Venda
          </button>
        </div>
      </div>

      <div className="tableCard">
        <div className="tableHeader">
          <h2 className="tableTitle">Lista de Vendas</h2>
        </div>
        <div className="tableBody">
          <table className="responsiveTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Produto</th>
                <th>Valor</th>
                <th>Data</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {vendasData.map((venda, index) => (
                <tr key={index}>
                  <td>{venda.id}</td>
                  <td>{venda.cliente}</td>
                  <td>{venda.produto}</td>
                  <td>{venda.valor}</td>
                  <td>{venda.data}</td>
                  <td>
                    <span className={`statusBadge status${venda.statusType.charAt(0).toUpperCase() + venda.statusType.slice(1)}`}>
                      {venda.status}
                    </span>
                  </td>
                  <td>
                    <div className="actionButtons">
                      <button className="actionButton">👁️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
