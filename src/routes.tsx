import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon" element={<PokemonDetails />} />
    </Routes>
  );
};

export default AppRoutes;
