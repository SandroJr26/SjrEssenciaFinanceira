import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTAModal = ({ onClose }) => {
  // Fechar modal ao pressionar Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Fechar modal ao clicar fora
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cta-title"
      aria-describedby="cta-description"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Botão de fechar */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Fechar modal"
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Conteúdo do modal */}
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-essencia-green rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl text-white">💰</span>
          </div>
          
          <h2 id="cta-title" className="text-xl font-bold text-gray-900">
            Transforme Sua Vida Financeira!
          </h2>
          
          <p id="cta-description" className="text-gray-600 leading-relaxed">
            Sua nova vida financeira começa com um clique — priorize suas dívidas já!
          </p>
          
          <div className="space-y-3 pt-4">
            <Button 
              asChild
              className="w-full bg-essencia-green hover:bg-essencia-cyan text-white font-medium py-3"
            >
              <a href="/planos">
                Ver Nossos Planos
              </a>
            </Button>
            
            <Button 
              variant="outline"
              onClick={onClose}
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Talvez mais tarde
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            <strong>Aviso:</strong> Este serviço não constitui recomendação de investimento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTAModal;

