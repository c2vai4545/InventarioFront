import React, { useState } from 'react';
import LoginModal from '../components/LoginModal';

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-4 select-none">
      <div className="mb-8">
        <img src="/assets/imgs/logo_solo.png" alt="Logo" className="h-24 mb-4" />
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
      >
        Iniciar Sesión
      </button>
      <LoginModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default LandingPage;