import React from "react";
import "./App.css";
import Navebar from "./components/Navebar";
import CardData from "./components/DataCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navebar />
        <Routes>
          <Route path="/" element={<CardData />} />
          <Route path="/cart-page" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
