import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";
import StatusBadge from "../components/StatusBadge";
import Table from "../components/Table";
import "../styles/global.css";
import "../styles/Pages.css";

const profiles = [
  { value: "admin", label: "Administrador" },
  { value: "manager", label: "Gerente" },
  { value: "user", label: "Usuário" },
  { value: "vendor", label: "Fornecedor" },
];

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    profile: "user",
    changePasswordOnFirstLogin: false,
  });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("erp_users") || "[]");
    setUsers(storedUsers);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      profile: "user",
      changePasswordOnFirstLogin: false,
    });
    setEditingUser(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    if (formData.password.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres!");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("erp_users") || "[]");
    
    if (editingUser) {
      const updatedUsers = storedUsers.map(user => 
        user.id === editingUser.id 
          ? { 
              ...user, 
              email: formData.email, 
              profile: formData.profile,
              changePasswordOnFirstLogin: formData.changePasswordOnFirstLogin,
              ...(formData.password && { password: formData.password })
            }
          : user
      );
      localStorage.setItem("erp_users", JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
      alert("Usuário atualizado com sucesso!");
    } else {
      const existingUser = storedUsers.find(u => u.email === formData.email);
      if (existingUser) {
        alert("Já existe um usuário com este email!");
        return;
      }

      const newUser = {
        id: Date.now().toString(),
        email: formData.email,
        password: formData.password,
        profile: formData.profile,
        changePasswordOnFirstLogin: formData.changePasswordOnFirstLogin,
        firstLogin: true,
        createdAt: new Date().toISOString(),
      };
      
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem("erp_users", JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
      alert("Usuário criado com sucesso!");
    }

    resetForm();
    setShowForm(false);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      email: user.email,
      password: "",
      confirmPassword: "",
      profile: user.profile,
      changePasswordOnFirstLogin: user.changePasswordOnFirstLogin || false,
    });
    setShowForm(true);
  };

  const handleDelete = (userId) => {
    if (!window.confirm("Tem certeza que deseja excluir este usuário?")) {
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("erp_users") || "[]");
    const updatedUsers = storedUsers.filter(user => user.id !== userId);
    localStorage.setItem("erp_users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    alert("Usuário excluído com sucesso!");
  };

  const getProfileLabel = (profile) => {
    const p = profiles.find(p => p.value === profile);
    return p ? p.label : profile;
  };

  const getProfileBadgeType = (profile) => {
    switch (profile) {
      case "admin": return "danger";
      case "manager": return "warning";
      case "vendor": return "info";
      default: return "success";
    }
  };

  const tableData = users.map(user => ({
    email: user.email,
    profile: <StatusBadge status={getProfileLabel(user.profile)} type={getProfileBadgeType(user.profile)} />,
    firstLogin: user.changePasswordOnFirstLogin ? "Sim" : "Não",
    createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR"),
  }));

  return (
    <Layout>
      <div className="pageContainer">
        <div className="pageHeader">
          <h1 className="pageTitle">Administração do Portal</h1>
          <Button 
            variant="primary" 
            icon="➕"
            onClick={() => {
              resetForm();
              setShowForm(!showForm);
            }}
          >
            {showForm ? "Cancelar" : "Novo Usuário"}
          </Button>
        </div>

        {showForm && (
          <Card 
            title={editingUser ? "Editar Usuário" : "Cadastrar Novo Usuário"}
            className="mb-4"
          >
            <form onSubmit={handleSubmit} className="formGrid">
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
                  disabled={editingUser}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="profile" className="formLabel">Perfil *</label>
                <select
                  id="profile"
                  name="profile"
                  className="formControl"
                  value={formData.profile}
                  onChange={handleInputChange}
                  required
                >
                  {profiles.map(p => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>

              <div className="formGroup">
                <label htmlFor="password" className="formLabel">
                  {editingUser ? "Nova Senha (deixe em branco para manter)" : "Senha *"}
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="formControl"
                  value={formData.password}
                  onChange={handleInputChange}
                  required={!editingUser}
                  minLength={6}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="confirmPassword" className="formLabel">
                  {editingUser ? "Confirmar Nova Senha" : "Confirmar Senha *"}
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="formControl"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required={!editingUser || formData.password !== ""}
                />
              </div>

              <div className="formGroup formGroupFull">
                <label className="formCheck">
                  <input
                    type="checkbox"
                    name="changePasswordOnFirstLogin"
                    checked={formData.changePasswordOnFirstLogin}
                    onChange={handleInputChange}
                  />
                  <span className="formCheckLabel">Forçar alteração de senha no primeiro login</span>
                </label>
              </div>

              <div className="formActions">
                <Button type="submit" variant="primary">
                  {editingUser ? "Atualizar" : "Cadastrar"}
                </Button>
                <Button 
                  type="button" 
                  variant="secondary"
                  onClick={() => {
                    resetForm();
                    setShowForm(false);
                  }}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </Card>
        )}

        <Card title="Usuários Cadastrados">
          {users.length === 0 ? (
            <div className="emptyState">
              <p>Nenhum usuário cadastrado ainda.</p>
              <p>Clique em "Novo Usuário" para começar.</p>
            </div>
          ) : (
            <Table
              headers={["Email", "Perfil", "Trocar Senha", "Criado em", "Ações"]}
              data={tableData}
              actions={(row, index) => (
                <div className="actionButtons">
                  <Button 
                    size="small" 
                    variant="secondary"
                    onClick={() => handleEdit(users[index])}
                  >
                    Editar
                  </Button>
                  <Button 
                    size="small" 
                    variant="danger"
                    onClick={() => handleDelete(users[index].id)}
                  >
                    Excluir
                  </Button>
                </div>
              )}
            />
          )}
        </Card>
      </div>
    </Layout>
  );
}
