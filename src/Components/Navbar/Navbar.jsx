import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../../libs/service/AuthService";
import "./Navbar.scss";

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const user = authService.getUser();
  const userName = user?.nomeUsuario || user?.name || "Usuário";

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    authService.logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://via.placeholder.com/36x36/4f46e5/ffffff?text=U"
          alt="Usuário"
          className="user-avatar"
        />
        <span className="user-greeting">Olá, {userName}</span>
      </div>

      <div className="navbar-center">
        <div className="search-box">
          <svg
            className="search-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input type="text" placeholder="Buscar..." className="search-input" />
        </div>
      </div>

      <div className="navbar-right">
        <div>
          <img
            src="https://via.placeholder.com/30x30/10b981/ffffff?text=M"
            alt="Menu"
            className="menu-avatar"
          />
        </div>
        <div className="dropdown">
          <button className="dropdown-btn label-btn" onClick={toggleDropdown}>
            Delicious Burguer
            <svg
              className={`dropdown-arrow ${isDropdownOpen ? "rotated" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/profile" className="dropdown-item">
                Perfil
              </Link>
              <Link to="/settings" className="dropdown-item">
                Configurações
              </Link>
              <hr />
              <button className="dropdown-item logout" onClick={handleLogout}>
                Sair
              </button>
            </div>
          )}
        </div>

        <button className="notification-btn">
          <svg
            className="notification-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="notification-badge">3</span>
        </button>
      </div>
    </nav>
  );
}