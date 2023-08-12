import React from "react";
/* eslint-disable */
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Discounts from "./components/Discounts/Discounts.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
import Promotions from "./components/Discounts/Discounts.jsx";
/* eslint-disable */
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shipping" element={<Shipping />}></Route>
        <Route path="/promotions" element={<Promotions />}></Route>
        <Route path="/cruise/:id" element={<CardDetail />}></Route>
        <Route path="/discounts" element={<Discounts />}></Route>
      </Routes>
    </div>
  );
}


export default App;