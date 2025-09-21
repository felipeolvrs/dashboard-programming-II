export const authService = {
  async login(email, password) {
    try {
      const response = await fetch('https://api-node-test-6c4b0a5d4c87.herokuapp.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('E-mail ou senha inválidos');
        }
        if (response.status === 400) {
          throw new Error('Dados inválidos. Verifique e-mail e senha.');
        }
        throw new Error('Erro no servidor. Tente novamente.');
      }

      const data = await response.json();
      
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async register({ email, nomeUsuario, celular, senha }) {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(u => u.email === email)) {
      throw new Error('Usuário já cadastrado');
    }

    const newUser = {
      id: Date.now(),
      email,
      nomeUsuario,
      celular,
      senha,
      token: 'fake-token-' + Date.now()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    localStorage.setItem('user', JSON.stringify(newUser));
    localStorage.setItem('token', newUser.token);

    return newUser;
  },

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  },

  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  getToken() {
    return localStorage.getItem('token');
  },

  isAuthenticated() {
    return !!this.getToken();
  }
};
