import React, { useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetail from '../pages/ProductDetail';

const Routers = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetail />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
};

export default Routers;
