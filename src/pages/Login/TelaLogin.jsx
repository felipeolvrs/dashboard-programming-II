import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../libs/service/AuthService";
import "./TelaLogin.scss";

export function TelaLogin() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
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
    if (error) setError("");
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (isLogin) {
      if (!formData.email.trim()) {
        setError("Por favor, preencha o e-mail.");
        setLoading(false);
        return;
      }

      if (!formData.senha.trim()) {
        setError("Por favor, preencha a senha.");
        setLoading(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Por favor, digite um e-mail válido.");
        setLoading(false);
        return;
      }

      try {
        await authService.login(formData.email, formData.senha);
        navigate("/dashboard");
      } catch (err) {
        setError(err.message || "E-mail ou senha inválidos");
      } finally {
        setLoading(false);
      }
    } else {
      const { email, nomeUsuario, celular, senha, confirmarSenha } = formData;

      if (!email.trim()) {
        setError("Por favor, preencha o e-mail.");
        setLoading(false);
        return;
      }

      if (!nomeUsuario.trim()) {
        setError("Por favor, preencha o nome de usuário.");
        setLoading(false);
        return;
      }

      if (!celular.trim()) {
        setError("Por favor, preencha o celular.");
        setLoading(false);
        return;
      }

      if (!senha.trim()) {
        setError("Por favor, preencha a senha.");
        setLoading(false);
        return;
      }

      if (!confirmarSenha.trim()) {
        setError("Por favor, confirme a senha.");
        setLoading(false);
        return;
      }

      if (senha !== confirmarSenha) {
        setError("As senhas não coincidem.");
        setLoading(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Por favor, digite um e-mail válido.");
        setLoading(false);
        return;
      }

      try {
        await authService.register({ email, nomeUsuario, celular, senha });
        alert("Cadastro realizado com sucesso!");
        navigate("/dashboard");
      } catch (err) {
        setError(err.message || "Erro ao realizar cadastro. Tente novamente.");
      } finally {
        setLoading(false);
      }
    }
  };

  const alternarModo = () => {
    setIsLogin(!isLogin);
    setError("");
    setFormData({
      email: "",
      nomeUsuario: "",
      celular: "",
      senha: "",
      confirmarSenha: "",
    });
  };

  const renderLoginFields = () => (
    <>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleInputChange}
        className="form-input"
        required
        disabled={loading}
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={formData.senha}
        onChange={handleInputChange}
        className="form-input"
        required
        disabled={loading}
      />
      <p className="forgot-password">Esqueceu sua senha?</p>
    </>
  );

  const renderCadastroFields = () => (
    <>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleInputChange}
        className="form-input"
        required
        disabled={loading}
      />
      <input
        type="text"
        name="nomeUsuario"
        placeholder="Crie um nome de usuário"
        value={formData.nomeUsuario}
        onChange={handleInputChange}
        className="form-input"
        required
        disabled={loading}
      />
      <input
        type="tel"
        name="celular"
        placeholder="Número de celular"
        value={formData.celular}
        onChange={handleInputChange}
        className="form-input"
        required
        disabled={loading}
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={formData.senha}
        onChange={handleInputChange}
        className="form-input"
        required
        disabled={loading}
      />
      <input
        type="password"
        name="confirmarSenha"
        placeholder="Confirme a senha"
        value={formData.confirmarSenha}
        onChange={handleInputChange}
        className="form-input"
        required
        disabled={loading}
      />
    </>
  );

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
                    disabled={loading}
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
                    disabled={loading}
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
              {isLogin ? renderLoginFields() : renderCadastroFields()}

              <button 
                type="submit" 
                className="submit-button"
                disabled={loading}
              >
                {loading 
                  ? (isLogin ? "Entrando..." : "Cadastrando...") 
                  : (isLogin ? "Login" : "Cadastrar")
                }
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
