import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.scss";
import { Aside } from "../Components/Aside/Aside";

export function MenuProduto() {

  return (
    <div className="dashboard-container">
       <Aside/>

      <div className="main-content">
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </nav>

        <main className="content-area">
        <div className="cadastro-card">
                <div className="list-section">
                  <h2 className="list-title">
                    Alunos Cadastrados
                  </h2>
                  <ul className="aluno-list">
                    <li className="aluno-item">
                      <span className="aluno-info">Aluno 1 - Curso A</span>
                      <div>
                        <button className="action-btn btn-view">
                          Ver perfil
                        </button>
                        <button className="action-btn btn-edit">
                          Editar
                        </button>
                        <button className="action-btn btn-delete">
                          Deletar
                        </button>
                      </div>
                    </li>
                    <li className="aluno-item">
                      <span className="aluno-info">Aluno 2 - Curso B</span>
                      <div>
                        <button className="action-btn btn-view">
                          Ver perfil
                        </button>
                        <button className="action-btn btn-edit">
                          Editar
                        </button>
                        <button className="action-btn btn-delete">
                          Deletar
                        </button>

                        
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
        </main>
      </div>
    </div>
  );
}