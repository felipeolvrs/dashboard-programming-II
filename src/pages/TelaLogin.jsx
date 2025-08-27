import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function TelaLogin() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const enviarLogin = (e) => {
    e.preventDefault();
  
    if (!usuario.trim() || !senha.trim()) {
      setError("Por favor, preencha usuário e senha.");
      return;
    }
  
    setError("");
    localStorage.setItem("usuario", usuario);
    console.log({usuario, senha})
    navigate("/dashboard")
  };

  return (
    <div className="pagina">
      <div className="container-principal">
        <div className="area-esquerda">
          <div>
            <img src="logo.png" className="logo" alt="Logo" />
          </div>

          <div className="texto-esquerda">
            <h1 className="titulo">
              <b>Faça seu Login em</b>
            </h1>
            <h2 className="subtitulo">
              <span className="meu">Meu</span>
              <span className="gestor">Gestor</span>
            </h2>
            <p className="descricao">
              Se você ainda não tem uma conta<br />
              Você pode se <a href="/register">registrar aqui</a>
            </p>
          </div>

          <img
            src="boneco.png"
            alt="Ilustração"
            className="imagem-personagem"
          />
        </div>

        <div className="area-direita">
          <div className="caixa-login">
            <h3 className="titulo-form">Entrar</h3>

            <form onSubmit={enviarLogin} className="formulario-login">
              <input
                type="text"
                placeholder="Digite seu e-mail ou nome de usuário"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="campo-texto"
              />

              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="campo-texto"
              />

              <p className="link-esqueci-senha">Esqueceu a senha?</p>

              <button type="submit" className="botao-entrar">
                Entrar
              </button>

              <p className="texto-ou">ou continue com</p>

              <div className="area-redes">
                <img src="facebook.png" alt="Facebook" className="icone-rede" />
                <img src="apple.png" alt="Apple" className="icone-rede" />
                <img src="google.png" alt="Google" className="icone-rede" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
