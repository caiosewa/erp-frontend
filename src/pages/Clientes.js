import React from "react";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Clientes() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h3 mb-0">Clientes</h1>
            <p className="text-muted mb-0">Gerencie todos os clientes do sistema</p>
          </div>
          <div>
            <button className="btn btn-primary">
              <i className="bi bi-plus-circle me-2"></i>
              Novo Cliente
            </button>
          </div>
        </div>

        <div className="card shadow">
          <div className="card-header">
            <h6 className="m-0 font-weight-bold text-primary">Lista de Clientes</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Cidade</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#001</td>
                    <td>João Silva</td>
                    <td>joao@email.com</td>
                    <td>(11) 98765-4321</td>
                    <td>São Paulo</td>
                    <td><span className="badge bg-success">Ativo</span></td>
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
                    <td>#002</td>
                    <td>Maria Santos</td>
                    <td>maria@email.com</td>
                    <td>(21) 91234-5678</td>
                    <td>Rio de Janeiro</td>
                    <td><span className="badge bg-success">Ativo</span></td>
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
