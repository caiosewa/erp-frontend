import React from "react";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Produtos() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h3 mb-0">Produtos</h1>
            <p className="text-muted mb-0">Gerencie todos os produtos do sistema</p>
          </div>
          <div>
            <button className="btn btn-primary">
              <i className="bi bi-plus-circle me-2"></i>
              Novo Produto
            </button>
          </div>
        </div>

        <div className="card shadow">
          <div className="card-header">
            <h6 className="m-0 font-weight-bold text-primary">Lista de Produtos</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#P001</td>
                    <td>Produto A</td>
                    <td>Eletrônicos</td>
                    <td>R$ 1.200,00</td>
                    <td>25</td>
                    <td><span className="badge bg-success">Em Estoque</span></td>
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
                    <td>#P002</td>
                    <td>Produto B</td>
                    <td>Móveis</td>
                    <td>R$ 800,00</td>
                    <td>5</td>
                    <td><span className="badge bg-warning">Estoque Baixo</span></td>
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
