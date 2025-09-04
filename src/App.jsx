import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
