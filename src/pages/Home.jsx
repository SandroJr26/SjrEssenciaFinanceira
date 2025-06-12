import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DebtAnalysisForm from '@/components/DebtAnalysisForm';

const Home = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-essencia-green" />,
      title: "Crescimento Financeiro",
      description: "Aprenda estratégias comprovadas para fazer seu dinheiro trabalhar para você e construir riqueza de forma consistente."
    },
    {
      icon: <Shield className="h-8 w-8 text-essencia-green" />,
      title: "Segurança e Planejamento",
      description: "Desenvolva um plano financeiro sólido que protege você e sua família contra imprevistos e garante um futuro tranquilo."
    },
    {
      icon: <Users className="h-8 w-8 text-essencia-green" />,
      title: "Consultoria Personalizada",
      description: "Receba orientação especializada adaptada à sua realidade financeira, com acompanhamento contínuo e suporte dedicado."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnóstico Financeiro",
      description: "Analisamos sua situação atual e identificamos oportunidades de melhoria."
    },
    {
      number: "02",
      title: "Plano Personalizado",
      description: "Criamos uma estratégia sob medida para seus objetivos e perfil financeiro."
    },
    {
      number: "03",
      title: "Acompanhamento Contínuo",
      description: "Oferecemos suporte constante para garantir que você alcance seus objetivos."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-essencia-green to-essencia-cyan text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforme Sua{' '}
              <span className="gold-detail">Vida Financeira</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              Aprenda a organizar suas finanças, quitar dívidas e construir um futuro próspero 
              com nossa consultoria especializada em educação financeira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-essencia-green text-white hover:bg-essencia-green-light font-semibold px-8 py-4 text-lg"
              >
                <Link to="/planos">
                  Conheça Nossos Planos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-essencia-green font-semibold px-8 py-4 text-lg"
              >
                <Link to="/contato">
                  Fale Conosco
                </Link>
              </Button>
            </div>
            <p className="text-sm text-gray-200 mt-6">
              ✓ Primeira consulta gratuita • ✓ Atendimento personalizado • ✓ Resultados comprovados
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por Que Escolher a Essência Financeira?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa abordagem única combina educação financeira prática com consultoria personalizada 
              para garantir resultados duradouros.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona Nossa Metodologia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo simples e eficaz que já transformou a vida financeira de centenas de pessoas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-essencia-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Análise de Endividamento */}
      <DebtAnalysisForm />

      {/* CTA Section */}
      <section className="py-20 bg-essencia-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme Seu Conhecimento em Resultados
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Que tal colocar em prática tudo que você aprendeu? Conheça nossos 
            planos de consultoria personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-essencia-green hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
            >
              <Link to="/planos">
                Ver Nossos Planos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-essencia-green font-semibold px-8 py-4 text-lg"
            >
              <Link to="/blog">
                Ler Nosso Blog
              </Link>
            </Button>
          </div>
          <p className="text-sm text-gray-200 mt-6">
            <strong>Aviso Legal:</strong> Este serviço não constitui recomendação de investimento. 
            Para produtos financeiros específicos, consulte um profissional credenciado.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

