import React from "react";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Configuracoes() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h3 mb-0">Configurações</h1>
            <p className="text-muted mb-0">Gerencie as configurações do sistema</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="card shadow mb-4">
              <div className="card-header">
                <h6 className="m-0 font-weight-bold text-primary">Configurações Gerais</h6>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="nomeEmpresa" className="form-label">Nome da Empresa</label>
                    <input type="text" className="form-control" id="nomeEmpresa" defaultValue="ERP System" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email de Contato</label>
                    <input type="email" className="form-control" id="email" defaultValue="contato@erp.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="telefone" className="form-label">Telefone</label>
                    <input type="tel" className="form-control" id="telefone" defaultValue="(11) 1234-5678" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="endereco" className="form-label">Endereço</label>
                    <textarea className="form-control" id="endereco" rows="3" defaultValue="Rua Exemplo, 123 - São Paulo, SP"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-check-circle me-2"></i>
                    Salvar Alterações
                  </button>
                </form>
              </div>
            </div>

            <div className="card shadow">
              <div className="card-header">
                <h6 className="m-0 font-weight-bold text-primary">Configurações de Notificação</h6>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="notificacoesEmail" defaultChecked />
                      <label className="form-check-label" htmlFor="notificacoesEmail">
                        Receber notificações por email
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="notificacoesVendas" defaultChecked />
                      <label className="form-check-label" htmlFor="notificacoesVendas">
                        Notificar sobre novas vendas
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="notificacoesEstoque" defaultChecked />
                      <label className="form-check-label" htmlFor="notificacoesEstoque">
                        Alertar sobre estoque baixo
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-check-circle me-2"></i>
                    Salvar Preferências
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow">
              <div className="card-header">
                <h6 className="m-0 font-weight-bold text-primary">Informações do Sistema</h6>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <strong>Versão:</strong>
                  <p className="text-muted">v1.0.0</p>
                </div>
                <div className="mb-3">
                  <strong>Última Atualização:</strong>
                  <p className="text-muted">25/03/2024</p>
                </div>
                <div className="mb-3">
                  <strong>Licença:</strong>
                  <p className="text-muted">MIT License</p>
                </div>
                <div className="d-grid">
                  <button className="btn btn-outline-secondary">
                    <i className="bi bi-arrow-clockwise me-2"></i>
                    Verificar Atualizações
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
