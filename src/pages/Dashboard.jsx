import React from "react";
import { Link } from "react-router-dom";
import { Aside } from "../Components/Aside/Aside";
import "./Dashboard.scss"; 

export function Dashboard() {

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

          <h1>Bem-vindo ao Dashboard</h1>
          <p>Selecione uma opção no menu lateral para começar.</p>
        </main>
      </div>
    </div>
  );
}