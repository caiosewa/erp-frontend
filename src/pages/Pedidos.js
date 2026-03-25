import React from "react";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Pedidos() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h3 mb-0">Pedidos</h1>
            <p className="text-muted mb-0">Gerencie todos os pedidos do sistema</p>
          </div>
          <div>
            <button className="btn btn-primary">
              <i className="bi bi-plus-circle me-2"></i>
              Novo Pedido
            </button>
          </div>
        </div>

        <div className="card shadow">
          <div className="card-header">
            <h6 className="m-0 font-weight-bold text-primary">Lista de Pedidos</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Produtos</th>
                    <th>Valor Total</th>
                    <th>Data</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#5678</td>
                    <td>João Silva</td>
                    <td>Produto A (2x)</td>
                    <td>R$ 2.400,00</td>
                    <td>25/03/2024</td>
                    <td><span className="badge bg-success">Entregue</span></td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-1">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        <i className="bi bi-pencil"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#5677</td>
                    <td>Maria Santos</td>
                    <td>Produto B (1x)</td>
                    <td>R$ 800,00</td>
                    <td>24/03/2024</td>
                    <td><span className="badge bg-info">Em Transporte</span></td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-1">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        <i className="bi bi-pencil"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
