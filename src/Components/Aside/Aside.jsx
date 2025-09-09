import { NavLink } from "react-router-dom";
import './Aside.scss';

const menuItems = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/pedidos", label: "Pedidos" },
  { path: "/produtos", label: "Produtos" },
  { path: "/fornecedores", label: "Fornecedores" },
  { path: "/relatorios", label: "Relatórios" },
];

export function Aside() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <NavLink to="/" className="logo">
          Meu Gestor
        </NavLink>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.label}>
              <NavLink to={item.path} className="sidebar-link">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}