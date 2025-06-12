import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-essencia-black text-white" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre a Essência Financeira */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-essencia-gold">
              Essência Financeira
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformando vidas através da educação financeira. Oferecemos consultoria 
              especializada para ajudar você a organizar suas finanças, quitar dívidas 
              e construir um futuro próspero.
            </p>
            <p className="text-xs text-gray-400">
              <strong>Aviso Legal:</strong> Este serviço não constitui recomendação de investimento. 
              Para produtos financeiros específicos, consulte um profissional credenciado.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-essencia-gold">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-essencia-gold flex-shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:essencia.financeira.sjr@gmail.com"
                  className="text-gray-300 hover:text-essencia-gold transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-essencia-cyan rounded"
                  aria-label="Enviar email para essencia.financeira.sjr@gmail.com"
                >
                  essencia.financeira.sjr@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-essencia-gold flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+5577991220627"
                  className="text-gray-300 hover:text-essencia-gold transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-essencia-cyan rounded"
                  aria-label="Ligar para (77) 99122-0627"
                >
                  (77) 99122-0627
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-4 w-4 text-essencia-gold flex-shrink-0" aria-hidden="true" />
                <a 
                  href="https://www.linkedin.com/in/sjrperfil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-essencia-gold transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-essencia-cyan rounded"
                  aria-label="Visitar perfil no LinkedIn (abre em nova aba)"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Horário de Atendimento */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-essencia-gold">
              Atendimento
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Segunda a Sexta</p>
              <p className="text-essencia-gold">08:00 - 18:00</p>
              <p>Sábados</p>
              <p className="text-essencia-gold">08:00 - 12:00</p>
              <p className="text-xs text-gray-400 mt-4">
                Atendimento online via WhatsApp e videochamada
              </p>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Essência Financeira. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-400">
              Desenvolvido por{' '}
              <span className="text-essencia-gold font-medium">Sandro Júnior</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

