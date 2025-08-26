import { useState } from "react"

export function TelaLogin() {
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")

  const enviarLogin = (e) => {
    e.preventDefault()
    console.log("Usuário:", usuario, "Senha:", senha)
  }

  return (
    <div className="caixa-login">
      <h3 className="titulo-form">Sign in</h3>
      <form onSubmit={enviarLogin} className="formulario-login">
        <input
          type="text"
          placeholder="Enter email or user name"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="campo-texto"
        />
        <input
          type="password"
          placeholder="Password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="campo-texto"
        />
        <p className="link-esqueci-senha">Forgot password ?</p>
        <button type="submit" className="botao-entrar">Login</button>
        <p className="texto-ou">or continue with</p>
        <div className="area-redes">
          <img src="facebook.png" alt="Facebook" className="icone-rede" />
          <img src="apple.png"    alt="Apple"    className="icone-rede" />
          <img src="google.png"   alt="Google"   className="icone-rede" />
        </div>
      </form>
    </div>
  )
}
