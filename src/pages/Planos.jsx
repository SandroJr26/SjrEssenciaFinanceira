import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Users, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Planos = () => {
  const plans = [
    {
      category: "Pessoa Física - Baixa Renda",
      subtitle: "Até 1,5 salários mínimos",
      plans: [
        {
          name: "Sessão Avulsa",
          price: "R$ 100",
          duration: "45min a 1h",
          features: [
            "Análise rápida da situação financeira",
            "Plano de ação emergencial para dívidas",
            "Relatório entregue em até 48h"
          ],
          popular: false
        },
        {
          name: "Tranquilidade Financeira",
          price: "R$ 400",
          duration: "3 sessões + suporte",
          features: [
            "3 sessões completas",
            "Diagnóstico completo das finanças",
            "Plano personalizado para quitação de dívidas",
            "Estratégias para reserva de emergência",
            "Acompanhamento via WhatsApp por 30 dias",
            "Plano completo + material em PDF"
          ],
          popular: true,
          installments: "em até 2x"
        },
        {
          name: "Plano Mensal",
          price: "R$ 350/mês",
          duration: "Acompanhamento contínuo",
          features: [
            "2 sessões mensais (1h cada)",
            "Suporte contínuo via WhatsApp",
            "Planilha de fluxo de caixa",
            "Revisão de metas e ajustes no orçamento",
            "Educação financeira básica"
          ],
          popular: false
        }
      ]
    },
    {
      category: "Pessoa Física",
      subtitle: "Renda acima de 1,5 salários mínimos",
      plans: [
        {
          name: "Sessão Avulsa",
          price: "R$ 200",
          duration: "1h a 1h30",
          features: [
            "Orçamento detalhado",
            "Priorização de metas",
            "1 relatório personalizado (entrega em até 72h)"
          ],
          popular: false
        },
        {
          name: "Controle Financeiro",
          price: "R$ 800",
          duration: "3 sessões + workshop",
          features: [
            "3 sessões + 1 mês de suporte via WhatsApp",
            "Relatório completo",
            "Workshop exclusivo (online)",
            "Introdução a investimentos iniciais",
            "Orientações sobre Tesouro Direto e poupança"
          ],
          popular: true
        },
        {
          name: "Acompanhamento Mensal",
          price: "R$ 500/mês",
          duration: "Suporte contínuo",
          features: [
            "2 sessões mensais",
            "Relatório de evolução mensal",
            "Suporte contínuo via WhatsApp"
          ],
          popular: false
        }
      ]
    },
    {
      category: "Autônomos e MEI",
      subtitle: "Microempreendedores individuais",
      plans: [
        {
          name: "Sessão Avulsa",
          price: "R$ 400",
          duration: "Consultoria especializada",
          features: [
            "Análise do fluxo de caixa",
            "Dicas para declaração simplificada do IR",
            "Modelo de nota fiscal"
          ],
          popular: false
        },
        {
          name: "Autônomo Organizado",
          price: "R$ 1.200",
          duration: "4 sessões + suporte",
          features: [
            "4 sessões especializadas",
            "1 mês de suporte via WhatsApp",
            "Planilha de fluxo de caixa personalizada",
            "Precificação de serviços",
            "Gestão de impostos e reserva financeira",
            "Template de contrato de prestação de serviço (bônus)"
          ],
          popular: true
        },
        {
          name: "Consultoria Mensal",
          price: "R$ 750/mês",
          duration: "Acompanhamento empresarial",
          features: [
            "Ajustes periódicos de fluxo",
            "Suporte com emissão de notas fiscais",
            "Orientações contábeis básicas"
          ],
          popular: false
        }
      ]
    },
    {
      category: "Pequenas Empresas",
      subtitle: "Faturamento até R$ 80 mil/ano",
      plans: [
        {
          name: "Diagnóstico Financeiro",
          price: "R$ 900",
          duration: "2h de consultoria",
          features: [
            "Identificação de gastos desnecessários",
            "Cálculo de margem de lucro",
            "Relatório executivo (entregue em até 5 dias úteis)"
          ],
          popular: false
        },
        {
          name: "Negócio Sustentável",
          price: "R$ 1.800",
          duration: "4 sessões + relatórios",
          features: [
            "4 sessões especializadas",
            "Estratégias para lucratividade",
            "Fluxo de caixa e projeções",
            "Relatório detalhado"
          ],
          popular: true
        },
        {
          name: "Consultoria Mensal",
          price: "R$ 1.000/mês",
          duration: "Acompanhamento empresarial",
          features: [
            "Relatórios mensais",
            "Planejamento tributário básico",
            "1 call para dúvidas rápidas"
          ],
          popular: false
        }
      ]
    },
    {
      category: "Empresas",
      subtitle: "Faturamento acima de R$ 80 mil/ano",
      plans: [
        {
          name: "Sessão Estratégica",
          price: "R$ 900",
          duration: "2h de consultoria",
          features: [
            "Diagnóstico de desempenho financeiro",
            "Propostas de otimização de custos e impostos"
          ],
          popular: false
        },
        {
          name: "Negócio em Alta Performance",
          price: "R$ 2.300",
          duration: "Consultoria completa",
          features: [
            "Planejamento de crescimento",
            "Análise gratuita de 1 fornecedor estratégico",
            "Otimização de recursos e impostos",
            "Relatório gerencial personalizado"
          ],
          popular: true
        },
        {
          name: "Consultoria Mensal",
          price: "R$ 1.700/mês",
          duration: "Acompanhamento estratégico",
          features: [
            "Indicadores de desempenho",
            "Benchmarking com o mercado",
            "Planejamento estratégico contínuo"
          ],
          popular: false
        }
      ]
    }
  ];

  const specialOffers = [
    "Desconto de 10% no pagamento à vista de pacotes semestrais",
    "1 mês grátis de consultoria ao fechar pacotes de 6 meses",
    "PIX com 5% de desconto",
    "Garantia de satisfação: Se não gostar da 1ª sessão paga, devolvemos 100%"
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-essencia-green to-essencia-cyan text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Planos de <span className="text-essencia-gold">Mentoria Financeira</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            Escolha o plano ideal para sua situação financeira e comece sua jornada rumo à liberdade financeira.
          </p>
          <div className="bg-essencia-gold text-essencia-black px-6 py-3 rounded-lg inline-block font-semibold">
            🎁 1ª Sessão Gratuita para todos os planos!
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {plans.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {category.category}
                </h2>
                <p className="text-lg text-gray-600">
                  {category.subtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.plans.map((plan, planIndex) => (
                  <div 
                    key={planIndex} 
                    className={`relative bg-white rounded-lg shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                      plan.popular ? 'border-essencia-gold' : 'border-gray-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-essencia-gold text-essencia-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          Mais Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {plan.name}
                      </h3>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-essencia-green">
                          {plan.price}
                        </span>
                        {plan.installments && (
                          <span className="text-sm text-gray-600 ml-2">
                            {plan.installments}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-6">
                        {plan.duration}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="h-5 w-5 text-essencia-green mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        asChild
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-essencia-gold hover:bg-yellow-400 text-essencia-black' 
                            : 'bg-essencia-green hover:bg-essencia-cyan text-white'
                        }`}
                      >
                        <Link to="/contato">
                          Escolher Este Plano
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🎯 Ofertas Especiais
            </h2>
            <p className="text-lg text-gray-600">
              Aproveite nossas condições especiais e economize ainda mais!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specialOffers.map((offer, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-essencia-gold">
                <div className="flex items-start">
                  <div className="bg-essencia-gold rounded-full p-2 mr-4 flex-shrink-0">
                    <Check className="h-4 w-4 text-essencia-black" />
                  </div>
                  <p className="text-gray-700 font-medium">
                    {offer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-essencia-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ainda Tem Dúvidas? Fale Conosco!
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a escolher o plano ideal 
            para sua situação financeira.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-essencia-gold text-essencia-black hover:bg-yellow-400 font-semibold px-8 py-4"
            >
              <Link to="/contato">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com Consultor
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-essencia-green font-semibold px-8 py-4"
            >
              <a href="https://wa.me/5577991220627?text=Olá! Gostaria de saber mais sobre os planos da Essência Financeira." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
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

export default Planos;

