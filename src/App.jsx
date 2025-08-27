import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.scss';
import { TelaLogin } from "./pages/TelaLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<TelaLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
