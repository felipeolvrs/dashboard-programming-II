import { useState } from "react";
import "./TelaLogin.scss";

export function TelaLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    usuario: "",
    email: "",
    nomeUsuario: "",
    celular: "",
    senha: "",
    confirmarSenha: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      if (!formData.usuario.trim() || !formData.senha.trim()) {
        setError("Por favor, preencha usuário e senha.");
        return;
      }
      console.log("Login:", {
        usuario: formData.usuario,
        senha: formData.senha,
      });
      alert("Login realizado com sucesso!");
    } else {
      const { email, nomeUsuario, celular, senha, confirmarSenha } = formData;

      if (
        !email.trim() ||
        !nomeUsuario.trim() ||
        !celular.trim() ||
        !senha.trim() ||
        !confirmarSenha.trim()
      ) {
        setError("Por favor, preencha todos os campos.");
        return;
      }

      if (senha !== confirmarSenha) {
        setError("As senhas não coincidem.");
        return;
      }

      console.log("Cadastro:", { email, nomeUsuario, celular, senha });
      alert("Cadastro realizado com sucesso!");
    }
  };

  const alternarModo = () => {
    setIsLogin(!isLogin);
    setError("");
    setFormData({
      usuario: "",
      email: "",
      nomeUsuario: "",
      celular: "",
      senha: "",
      confirmarSenha: "",
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="logo-container">
          <img src="logo.png" className="logo" alt="MeuGestor Logo" />
        </div>
        <div className="auth-left">
          <div className="content-text">
            <h1 className="main-title">
              {isLogin ? "Faça seu login em" : "Faça seu cadastro no"}
            </h1>
            <h2 className="brand-title">
              <span className="meu">Meu</span>
              <span className="gestor">Gestor</span>
            </h2>
            <p className="description">
              {isLogin ? (
                <>
                  Se você ainda não tem uma conta
                  <br />
                  Você pode se{" "}
                  <button
                    type="button"
                    onClick={alternarModo}
                    className="link-button"
                  >
                    Registrar aqui!
                  </button>
                </>
              ) : (
                <>
                  Se você já tem cadastro.
                  <br />
                  Faça seu{" "}
                  <button
                    type="button"
                    onClick={alternarModo}
                    className="link-button"
                  >
                    Login aqui!
                  </button>
                </>
              )}
            </p>
          </div>

          <div className="character-container">
            <img
              src="boneco.png"
              alt="Ilustração"
              className="character-image"
            />
          </div>
        </div>

        <div className="auth-right">
          <div className="form-container">
            <h3 className="form-title">{isLogin ? "Login" : "Cadastro"}</h3>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={enviarFormulario} className="auth-form">
              {isLogin ? (
                <>
                  <input
                    type="text"
                    name="usuario"
                    placeholder="E-mail"
                    value={formData.usuario}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={formData.senha}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <p className="forgot-password">Esqueceu sua senha?</p>
                </>
              ) : (
                <>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <input
                    type="text"
                    name="nomeUsuario"
                    placeholder="Crie um nome de usuário"
                    value={formData.nomeUsuario}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <input
                    type="tel"
                    name="celular"
                    placeholder="Número de celular"
                    value={formData.celular}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={formData.senha}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <input
                    type="password"
                    name="confirmarSenha"
                    placeholder="Confirme a senha"
                    value={formData.confirmarSenha}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </>
              )}

              <button type="submit" className="submit-button">
                {isLogin ? "Login" : "Cadastrar"}
              </button>

              <p className="divider-text">
                ou {isLogin ? "continue" : "se cadastre"} com
              </p>

              <div className="social-buttons">
                <img
                  src="facebook.png"
                  alt="Facebook"
                  className="social-icon"
                />
                <img src="apple.png" alt="Apple" className="social-icon" />
                <img src="google.png" alt="Google" className="social-icon" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
