import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-mail",
      content: "essencia.financeira.sjr@gmail.com",
      link: "mailto:essencia.financeira.sjr@gmail.com",
      description: "Resposta em até 24 horas"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      content: "(77) 99122-0627",
      link: "tel:+5577991220627",
      description: "WhatsApp disponível"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      content: "Sandro Júnior",
      link: "https://www.linkedin.com/in/sjrperfil/",
      description: "Conecte-se conosco"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horário de Atendimento",
      content: "Seg-Sex: 08:00-18:00",
      link: null,
      description: "Sáb: 08:00-12:00"
    }
  ];

  const faqs = [
    {
      question: "Como funciona a primeira consulta gratuita?",
      answer: "A primeira consulta é uma conversa inicial de 30-45 minutos onde apresentamos nossa metodologia, identificamos seus principais desafios financeiros e definimos objetivos. Não há compromisso de contratação."
    },
    {
      question: "Qual a diferença entre os planos?",
      answer: "Nossos planos são segmentados por perfil de renda e necessidades. Desde sessões avulsas para orientações pontuais até acompanhamentos mensais completos com suporte contínuo via WhatsApp."
    },
    {
      question: "Vocês oferecem garantia?",
      answer: "Sim! Oferecemos garantia de satisfação. Se não gostar da primeira sessão paga, devolvemos 100% do valor investido."
    },
    {
      question: "O atendimento é presencial ou online?",
      answer: "Oferecemos atendimento online via videochamada e WhatsApp, proporcionando flexibilidade e comodidade para nossos clientes em qualquer lugar do Brasil."
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-essencia-green to-essencia-cyan text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="text-essencia-gold">Contato</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Estamos aqui para ajudar você a transformar sua vida financeira. 
            Entre em contato conosco e dê o primeiro passo rumo à liberdade financeira.
          </p>
        </div>
      </section>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Envie sua Mensagem
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Mensagem Enviada com Sucesso!
                  </h3>
                  <p className="text-green-700">
                    Obrigado pelo seu contato. Retornaremos em até 24 horas.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 bg-essencia-green hover:bg-essencia-cyan"
                  >
                    Enviar Nova Mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-essencia-cyan focus:border-transparent transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-essencia-cyan focus:border-transparent transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-essencia-cyan focus:border-transparent transition-colors"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-essencia-cyan focus:border-transparent transition-colors"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="consulta-gratuita">Consulta Gratuita</option>
                        <option value="planos">Informações sobre Planos</option>
                        <option value="duvidas">Dúvidas Gerais</option>
                        <option value="parcerias">Parcerias</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-essencia-cyan focus:border-transparent transition-colors resize-vertical"
                      placeholder="Conte-nos sobre sua situação financeira atual e como podemos ajudar..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-essencia-green hover:bg-essencia-cyan text-white font-semibold py-4 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-gray-600">
                    * Campos obrigatórios. Seus dados estão protegidos e não serão compartilhados.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informações de Contato
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                    <div className="bg-essencia-green text-white p-3 rounded-lg flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-essencia-green hover:text-essencia-cyan font-medium transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium">
                          {info.content}
                        </p>
                      )}
                      <p className="text-sm text-gray-600 mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Perguntas Frequentes
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="bg-white border border-gray-200 rounded-lg">
                      <summary className="p-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-50 transition-colors">
                        {faq.question}
                      </summary>
                      <div className="p-4 pt-0 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-essencia-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prefere Falar Diretamente Conosco?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Entre em contato via WhatsApp e receba atendimento imediato!
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-essencia-gold text-essencia-black hover:bg-yellow-400 font-semibold px-8 py-4"
          >
            <a 
              href="https://wa.me/5577991220627?text=Olá! Gostaria de agendar minha consulta gratuita na Essência Financeira." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Phone className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </a>
          </Button>
          <p className="text-sm text-gray-200 mt-6">
            <strong>Aviso Legal:</strong> Este serviço não constitui recomendação de investimento. 
            Para produtos financeiros específicos, consulte um profissional credenciado.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contato;

