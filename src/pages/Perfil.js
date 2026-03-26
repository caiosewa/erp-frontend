import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";
import "../styles/global.css";
import "../styles/Pages.css";

export default function Perfil() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setFormData({
        name: storedUser.name || "",
        email: storedUser.email || "",
        phone: storedUser.phone || "",
        department: storedUser.department || "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar senhas se estiver alterando
    if (formData.newPassword) {
      if (formData.newPassword.length < 6) {
        alert("A nova senha deve ter pelo menos 6 caracteres!");
        return;
      }
      if (formData.newPassword !== formData.confirmPassword) {
        alert("As senhas não coincidem!");
        return;
      }
    }

    // Atualizar usuário no localStorage
    const updatedUser = {
      ...user,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      department: formData.department,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);

    // Limpar campos de senha
    setFormData(prev => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));

    alert("Perfil atualizado com sucesso!");
  };

  const getProfileLabel = (profile) => {
    const profiles = {
      admin: "Administrador",
      manager: "Gerente",
      user: "Usuário",
      vendor: "Fornecedor",
    };
    return profiles[profile] || profile;
  };

  return (
    <Layout>
      <div className="pageContainer">
        <div className="pageHeader">
          <div>
            <h1 className="pageTitle">Meu Perfil</h1>
            <p className="pageSubtitle">Gerencie suas informações pessoais</p>
          </div>
          <div className="pageActions">
            {!isEditing ? (
              <Button variant="primary" onClick={() => setIsEditing(true)}>
                Editar Perfil
              </Button>
            ) : (
              <Button variant="secondary" onClick={() => setIsEditing(false)}>
                Cancelar
              </Button>
            )}
          </div>
        </div>

        <div className="dashboardContent">
          {/* Informações do Perfil */}
          <Card title="Informações Pessoais" className="mb-4">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="formGrid">
                <div className="formGroup">
                  <label htmlFor="name" className="formLabel">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="formControl"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="email" className="formLabel">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="formControl"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="phone" className="formLabel">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="formControl"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="department" className="formLabel">Departamento</label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    className="formControl"
                    value={formData.department}
                    onChange={handleInputChange}
                    placeholder="Ex: Vendas, RH, TI..."
                  />
                </div>

                <div className="formActions">
                  <Button type="submit" variant="primary">
                    Salvar Alterações
                  </Button>
                  <Button type="button" variant="secondary" onClick={() => setIsEditing(false)}>
                    Cancelar
                  </Button>
                </div>
              </form>
            ) : (
              <div className="formGrid">
                <div className="formGroup">
                  <label className="formLabel">Nome Completo</label>
                  <p className="formValue">{user?.name || "Não informado"}</p>
                </div>

                <div className="formGroup">
                  <label className="formLabel">Email</label>
                  <p className="formValue">{user?.email || "Não informado"}</p>
                </div>

                <div className="formGroup">
                  <label className="formLabel">Perfil/Grupo</label>
                  <p className="formValue">{getProfileLabel(user?.profile)}</p>
                </div>

                <div className="formGroup">
                  <label className="formLabel">Telefone</label>
                  <p className="formValue">{user?.phone || "Não informado"}</p>
                </div>

                <div className="formGroup">
                  <label className="formLabel">Departamento</label>
                  <p className="formValue">{user?.department || "Não informado"}</p>
                </div>
              </div>
            )}
          </Card>

          {/* Alterar Senha */}
          <Card title="Alterar Senha">
            <form onSubmit={handleSubmit} className="formGrid">
              <div className="formGroup">
                <label htmlFor="currentPassword" className="formLabel">Senha Atual</label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  className="formControl"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="newPassword" className="formLabel">Nova Senha</label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  className="formControl"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  minLength={6}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="confirmPassword" className="formLabel">Confirmar Nova Senha</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="formControl"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formActions">
                <Button type="submit" variant="primary">
                  Alterar Senha
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
