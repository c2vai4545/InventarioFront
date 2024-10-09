import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Inicio() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/');  // Si no hay usuario, redirigimos al login
    }
  }, [navigate]);

  if (!user) return null;  // No renderizamos nada mientras verificamos el usuario

  return (
    <div>
      <h1>Bienvenido, {user.name}</h1>
      {/* Aquí puedes añadir el contenido de tu página de inicio */}
    </div>
  );
}

export default Inicio;
