import React from "react";
import Layout from "../components/Layout";
import "../styles/global.css";
import "../styles/Components.css";

export default function Relatorios() {
  const reportsData = [
    {
      title: "Relatório de Vendas",
      description: "Relatório detalhado de vendas por período",
      icon: "📊"
    },
    {
      title: "Relatório de Clientes",
      description: "Análise do cadastro e comportamento dos clientes",
      icon: "👥"
    },
    {
      title: "Relatório de Estoque",
      description: "Controle de estoque e produtos em baixa",
      icon: "📦"
    },
    {
      title: "Relatório Financeiro",
      description: "Análise financeira e fluxo de caixa",
      icon: "💰"
    }
  ];

  return (
    <Layout>
      <div className="pageHeader">
        <div>
          <h1 className="pageTitle">Relatórios</h1>
          <p className="pageSubtitle">Visualize relatórios e análises do sistema</p>
        </div>
        <div className="pageActions">
          <button className="outlineButton">
            📥 Exportar Tudo
          </button>
        </div>
      </div>

      <div className="reportsGrid">
        {reportsData.map((report, index) => (
          <div key={index} className="reportCard">
            <div className="reportCardBody">
              <h3 className="reportTitle">{report.title}</h3>
              <p className="reportDescription">{report.description}</p>
              <button className="reportButton">
                <span className="reportButtonIcon">{report.icon}</span>
                Gerar Relatório
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
