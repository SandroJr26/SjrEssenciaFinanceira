import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '5577991220627';
  const message = 'Olá! Gostaria de saber mais sobre os serviços da Essência Financeira.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Entrar em contato via WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      
      {/* Indicador de disponibilidade */}
      <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
      
      {/* Tooltip para desktop */}
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Fale conosco no WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;

