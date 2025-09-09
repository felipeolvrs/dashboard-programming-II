import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.scss';
import { TelaLogin } from "./pages/TelaLogin";
import {Dashboard} from "./pages/Dashboard"
import { MenuProduto } from "./pages/MenuProduto"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menuprodutos" element={<MenuProduto />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/" element={<TelaLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
