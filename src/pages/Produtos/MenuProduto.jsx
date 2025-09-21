import { useEffect, useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Aside } from "../../Components/Aside/Aside";
import "./MenuProduto.scss";
import { ProductService } from "../../libs/service/ProductService";

export function MenuProduto() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await ProductService.getProducts();
        setProdutos(data);
      } catch {
        setError("Não foi possível carregar os produtos.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await ProductService.deleteProduct(id);
      setProdutos((prev) => prev.filter((p) => p.id !== id));
    } catch {
      alert("Erro ao excluir produto.");
    }
  };

  const handleEdit = (produto) => {
    alert(`Editar produto: ${produto.name}`);
  };

  const handleMoreOptions = (produto) => {
    alert(`Mais opções para: ${produto.name}`);
  };

  if (loading) return <p>Carregando produtos...</p>;
  if (error) return <p>{error}</p>;

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
                  {produtos.map((produto) => (
                    <tr key={produto.id}>
                      <td className="produto-nome">{produto.name}</td>
                      <td className="produto-marca">{produto.brand}</td>
                      <td className="produto-preco">
                        R$ {produto.price.toFixed(2)}
                      </td>
                      <td className="produto-validade">
                        {new Date(produto.expirationDate).toLocaleDateString(
                          "pt-BR"
                        )}
                      </td>
                      <td className="produto-actions">
                        <div className="action-buttons">
                          <button
                            className="action-btn edit-btn"
                            onClick={() => handleEdit(produto)}
                            title="Editar"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              width="20"
                              height="20"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15.232 5.232l3.536 3.536M9 13l6-6 3 3-6 6H9v-3z"
                              />
                            </svg>
                          </button>
                          <button
                            className="action-btn delete-btn"
                            onClick={() => handleDelete(produto.id)}
                            title="Excluir"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              width="20"
                              height="20"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4a1 1 0 011 1v1H9V4a1 1 0 011-1z"
                              />
                            </svg>
                          </button>
                          <button
                            className="action-btn more-btn"
                            onClick={() => handleMoreOptions(produto)}
                            title="Mais opções"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              width="20"
                              height="20"
                            >
                              <circle cx="10" cy="3" r="2" />
                              <circle cx="10" cy="10" r="2" />
                              <circle cx="10" cy="17" r="2" />
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
