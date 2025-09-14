import React from "react";
import { Navbar } from "../Components/Navbar";
import { Aside } from "../Components/Aside/Aside";
import "./MenuProduto.scss";

export function MenuProduto() {
  const produtos = [
    { nome: "Pão de Hambúrguer", marca: "Panificadora Sul", preco: "R$ 12,50", validade: "01/11/2025" },
    { nome: "Pão de Cachorro-Quente", marca: "Trigo Puro", preco: "R$ 11,20", validade: "10/10/2025" },
    { nome: "Salsicha Hot Dog", marca: "Aurora", preco: "R$ 15,00", validade: "07/11/2025" },
    { nome: "Hambúrguer Bovino 90g", marca: "Sabor Grill", preco: "R$ 9,90", validade: "05/12/2025" },
  ];

  const handleAction = (action, produto) => {
    console.log(`${action} produto:`, produto);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Aside />
        
        <main className="content-area">
          <Navbar />
          
          <div className="page-content">
            <h1 className="page-title">Produtos</h1>
            
            <div className="table-wrapper">
              <table className="produtos-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Preço</th>
                    <th>Validade</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {produtos.map((produto, index) => (
                    <tr key={index}>
                      <td className="produto-nome">{produto.nome}</td>
                      <td className="produto-marca">{produto.marca}</td>
                      <td className="produto-preco">{produto.preco}</td>
                      <td className="produto-validade">{produto.validade}</td>
                      <td className="produto-actions">
                        <div className="action-buttons">
                          <button 
                            className="action-btn edit-btn"
                            onClick={() => handleAction('Editar', produto, index)}
                            title="Editar"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                              <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                            </svg>
                          </button>
                          <button 
                            className="action-btn delete-btn"
                            onClick={() => handleAction('Excluir', produto, index)}
                            title="Excluir"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <polyline points="3,6 5,6 21,6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                              <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                            </svg>
                          </button>
                          <button 
                            className="action-btn more-btn"
                            onClick={() => handleAction('Mais opções', produto, index)}
                            title="Mais opções"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <circle cx="12" cy="12" r="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                              <circle cx="19" cy="12" r="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                              <circle cx="5" cy="12" r="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}