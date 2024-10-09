import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Mi App</Link>
        <div>
          <Link to="/" className="px-3 py-2 hover:bg-gray-700 rounded">Inicio</Link>
          <Link to="/inventario" className="px-3 py-2 hover:bg-gray-700 rounded">Inventario</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;