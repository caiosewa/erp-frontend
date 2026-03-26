import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/global.css";
import "../styles/Pages.css";

export default function Configuracoes() {
  const { darkMode, setDarkModeValue } = useTheme();
  
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    orderNotifications: true,
    stockNotifications: true,
    reportNotifications: false,
    sidebarCompact: false,
    highContrast: false,
    language: "pt-BR",
    currency: "BRL",
    dateFormat: "DD/MM/YYYY",
    timeFormat: "24h",
    autoLogout: true,
    autoLogoutTime: "30",
    twoFactorAuth: false,
  });

  useEffect(() => {
    const storedSettings = JSON.parse(localStorage.getItem("erp_settings"));
    if (storedSettings) {
      setSettings(storedSettings);
      // darkMode é gerenciado pelo ThemeContext, não precisa setar aqui
    }
  }, []);

  const handleToggle = (key) => {
    if (key === "darkMode") {
      setDarkModeValue(!darkMode);
    } else {
      setSettings(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    const settingsToSave = {
      ...settings,
      darkMode: darkMode,
    };
    localStorage.setItem("erp_settings", JSON.stringify(settingsToSave));
    alert("Configurações salvas com sucesso!");
  };

  const handleReset = () => {
    if (window.confirm("Deseja restaurar todas as configurações para o padrão?")) {
      const defaultSettings = {
        emailNotifications: true,
        pushNotifications: true,
        orderNotifications: true,
        stockNotifications: true,
        reportNotifications: false,
        sidebarCompact: false,
        highContrast: false,
        language: "pt-BR",
        currency: "BRL",
        dateFormat: "DD/MM/YYYY",
        timeFormat: "24h",
        autoLogout: true,
        autoLogoutTime: "30",
        twoFactorAuth: false,
      };
      setSettings(defaultSettings);
      setDarkModeValue(false);
      localStorage.setItem("erp_settings", JSON.stringify({ ...defaultSettings, darkMode: false }));
      alert("Configurações restauradas para o padrão!");
    }
  };

  return (
    <Layout>
      <div className="pageContainer">
        <div className="pageHeader">
          <div>
            <h1 className="pageTitle">Configurações do Portal</h1>
            <p className="pageSubtitle">Personalize as preferências do sistema</p>
          </div>
          <div className="pageActions">
            <Button variant="secondary" onClick={handleReset}>
              Restaurar Padrão
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Salvar Configurações
            </Button>
          </div>
        </div>

        <div className="dashboardContent">
          <Card title="Notificações" className="mb-4">
            <div className="settingsGroup">
              <div className="settingItem">
                <div className="settingInfo">
                  <h4 className="settingTitle">Notificações por Email</h4>
                  <p className="settingDescription">Receba atualizações importantes no seu email</p>
                </div>
                <label className="toggleSwitch">
                  <input
                    type="checkbox"
                    checked={settings.emailNotifications}
                    onChange={() => handleToggle("emailNotifications")}
                  />
                  <span className="toggleSlider"></span>
                </label>
              </div>

              <div className="settingItem">
                <div className="settingInfo">
                  <h4 className="settingTitle">Notificações Push</h4>
                  <p className="settingDescription">Alertas em tempo real no navegador</p>
                </div>
                <label className="toggleSwitch">
                  <input
                    type="checkbox"
                    checked={settings.pushNotifications}
                    onChange={() => handleToggle("pushNotifications")}
                  />
                  <span className="toggleSlider"></span>
                </label>
              </div>

              <div className="settingItem">
                <div className="settingInfo">
                  <h4 className="settingTitle">Notificações de Pedidos</h4>
                  <p className="settingDescription">Alertas sobre novos pedidos e status</p>
                </div>
                <label className="toggleSwitch">
                  <input
                    type="checkbox"
                    checked={settings.orderNotifications}
                    onChange={() => handleToggle("orderNotifications")}
                  />
                  <span className="toggleSlider"></span>
                </label>
              </div>

              <div className="settingItem">
                <div className="settingInfo">
                  <h4 className="settingTitle">Alertas de Estoque</h4>
                  <p className="settingDescription">Avisos quando produtos estiverem acabando</p>
                </div>
                <label className="toggleSwitch">
                  <input
                    type="checkbox"
                    checked={settings.stockNotifications}
                    onChange={() => handleToggle("stockNotifications")}
                  />
                  <span className="toggleSlider"></span>
                </label>
              </div>

              <div className="settingItem">
                <div className="settingInfo">
                  <h4 className="settingTitle">Relatórios Automáticos</h4>
                  <p className="settingDescription">Receba relatórios diários/semanais</p>
                </div>
                <label className="toggleSwitch">
                  <input
                    type="checkbox"
                    checked={settings.reportNotifications}
                    onChange={() => handleToggle("reportNotifications")}
                  />
                  <span className="toggleSlider"></span>
                </label>
              </div>
            </div>
          </Card>

          <Card title="Aparência" className="mb-4">
            <div className="settingsGroup">
              <div className="settingItem">
                <div className="settingInfo">
                  <h4 className="settingTitle">Modo Escuro</h4>
                  <p className="settingDescription">Interface com tema escuro para reduzir fadiga visual</p>
                </div>
                <label className="toggleSwitch">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => handleToggle("darkMode")}
                  />
                  <span className="toggleSlider"></span>
                </label>
              </div>

              <div className="settingItem">
                <div className="settingInfo">
                  <h4 className="settingTitle">Menu Lateral Compacto</h4>
                  <p className="settingDescription">Reduzir o tamanho da barra lateral</p>
                </div>
                <label className="toggleSwitch">
                  <input
                    type="checkbox"
                    checked={settings.sidebarCompact}
                    onChange={() => handleToggle("sidebarCompact")}
                  />
                  <span className="toggleSlider"></span>
                </label>
              </div>

              <div className="settingItem">
                <div className="settingInfo">
                  <h4 className="settingTitle">Alto Contraste</h4>
                  <p className="settingDescription">Melhor visibilidade para acessibilidade</p>
                </div>
                <label className="toggleSwitch">
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={() => handleToggle("highContrast")}
                  />
                  <span className="toggleSlider"></span>
                </label>
              </div>
            </div>
          </Card>

          <Card title="Idioma e Região" className="mb-4">
            <div className="formGrid">
              <div className="formGroup">
                <label htmlFor="language" className="formLabel">Idioma</label>
                <select
                  id="language"
                  name="language"
                  className="formControl"
                  value={settings.language}
                  onChange={handleSelectChange}
                >
                  <option value="pt-BR">Português (Brasil)</option>
                  <option value="en-US">English (United States)</option>
                  <option value="es-ES">Español</option>
                </select>
              </div>

              <div className="formGroup">
                <label htmlFor="currency" className="formLabel">Moeda</label>
                <select
                  id="currency"
                  name="currency"
                  className="formControl"
                  value={settings.currency}
                  onChange={handleSelectChange}
                >
                  <option value="BRL">Real (R$)</option>
                  <option value="USD">Dollar ($)</option>
                  <option value="EUR">Euro (€)</option>
                </select>
              </div>

              <div className="formGroup">
                <label htmlFor="dateFormat" className="formLabel">Formato de Data</label>
                <select
                  id="dateFormat"
                  name="dateFormat"
                  className="formControl"
                  value={settings.dateFormat}
                  onChange={handleSelectChange}
                >
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>

              <div className="formGroup">
                <label htmlFor="timeFormat" className="formLabel">Formato de Hora</label>
                <select
                  id="timeFormat"
                  name="timeFormat"
                  className="formControl"
                  value={settings.timeFormat}
                  onChange={handleSelectChange}
                >
                  <option value="24h">24 horas</option>
                  <option value="12h">12 horas (AM/PM)</option>
                </select>
              </div>
            </div>
          </Card>

          <Card title="Segurança">
            <div className="settingsGroup">
              <div className="settingItem">
                <div className="settingInfo">
                  <h4 className="settingTitle">Logout Automático</h4>
                  <p className="settingDescription">Desconectar após período de inatividade</p>
                </div>
                <label className="toggleSwitch">
                  <input
                    type="checkbox"
                    checked={settings.autoLogout}
                    onChange={() => handleToggle("autoLogout")}
                  />
                  <span className="toggleSlider"></span>
                </label>
              </div>

              {settings.autoLogout && (
                <div className="formGroup formGroupFull">
                  <label htmlFor="autoLogoutTime" className="formLabel">
                    Tempo para Logout Automático (minutos)
                  </label>
                  <select
                    id="autoLogoutTime"
                    name="autoLogoutTime"
                    className="formControl"
                    value={settings.autoLogoutTime}
                    onChange={handleSelectChange}
                    style={{ maxWidth: "200px" }}
                  >
                    <option value="5">5 minutos</option>
                    <option value="15">15 minutos</option>
                    <option value="30">30 minutos</option>
                    <option value="60">1 hora</option>
                  </select>
                </div>
              )}

              <div className="settingItem">
                <div className="settingInfo">
                  <h4 className="settingTitle">Autenticação de Dois Fatores</h4>
                  <p className="settingDescription">Adicione uma camada extra de segurança</p>
                </div>
                <label className="toggleSwitch">
                  <input
                    type="checkbox"
                    checked={settings.twoFactorAuth}
                    onChange={() => handleToggle("twoFactorAuth")}
                  />
                  <span className="toggleSlider"></span>
                </label>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
