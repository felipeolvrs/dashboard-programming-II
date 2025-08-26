import React from "react"
import './styles/global.scss'
import { TelaLogin } from "./pages/Login"

function App() {
  return (
    <div className="pagina">
      <div className="container-principal">
        <div className="area-esquerda">
          <div className="logo">Your Logo</div>
          <div className="texto-esquerda">
            <h1 className="titulo"><b>Sign in to</b></h1>
            <h2 className="subtitulo">Lorem Ipsum is simply</h2>
            <p className="descricao">
              If you don’t have an account register<br/>
              You can <a href="/register">Register here</a>!
            </p>
          </div>
          <img src="boneco.png" alt="Ilustração" className="imagem-personagem" />
        </div>
        <div className="area-direita">
          <TelaLogin />
        </div>
      </div>
    </div>
  )
}

export default App
