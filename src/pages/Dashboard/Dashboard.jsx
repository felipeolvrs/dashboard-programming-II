import React from "react";
import { Aside } from "../../Components/Aside/Aside";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Dashboard.scss";

export function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Aside />
        <main className="content-area">
          <Navbar />
          <div className="page-content">
            <h1>Bem-vindo ao Dashboard</h1>
            <p>Selecione uma opção no menu lateral para começar.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
