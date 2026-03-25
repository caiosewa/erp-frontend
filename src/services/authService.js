export const login = async (email, password) => {
  // MOCK
  if (email === "admin@erp.com" && password === "123456") {
    return {
      success: true,
      user: {
        name: "Administrador",
        email: email,
      },
    };
  }

  return { success: false };
};