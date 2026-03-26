export const login = async (email, password) => {
  // Verifica usuário mock admin
  if (email === "admin@erp.com" && password === "123456") {
    return {
      success: true,
      user: {
        id: "admin",
        name: "Administrador",
        email: email,
        profile: "admin",
      },
    };
  }

  // Verifica usuários cadastrados no localStorage
  const storedUsers = JSON.parse(localStorage.getItem("erp_users") || "[]");
  const user = storedUsers.find(u => u.email === email && u.password === password);
  
  if (user) {
    // Verifica se precisa trocar senha no primeiro login
    if (user.changePasswordOnFirstLogin && user.firstLogin) {
      return {
        success: true,
        requirePasswordChange: true,
        user: {
          id: user.id,
          name: user.email.split("@")[0],
          email: user.email,
          profile: user.profile,
        },
      };
    }
    
    return {
      success: true,
      user: {
        id: user.id,
        name: user.email.split("@")[0],
        email: user.email,
        profile: user.profile,
      },
    };
  }

  return { success: false };
};

export const changePassword = async (userId, newPassword) => {
  const storedUsers = JSON.parse(localStorage.getItem("erp_users") || "[]");
  const userIndex = storedUsers.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return { success: false, message: "Usuário não encontrado" };
  }
  
  storedUsers[userIndex].password = newPassword;
  storedUsers[userIndex].firstLogin = false;
  storedUsers[userIndex].changePasswordOnFirstLogin = false;
  
  localStorage.setItem("erp_users", JSON.stringify(storedUsers));
  
  return { success: true };
};