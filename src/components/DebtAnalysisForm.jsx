import React, { useState } from 'react';
import { Calculator, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const DebtAnalysisForm = () => {
  const [formData, setFormData] = useState({
    income: '',
    totalDebt: '',
    monthlyExpenses: '',
    debtType: '',
    urgency: ''
  });
  const [result, setResult] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar formulário quando rolar para baixo
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition > windowHeight * 0.5 && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const analyzeDebt = () => {
    const income = parseFloat(formData.income) || 0;
    const totalDebt = parseFloat(formData.totalDebt) || 0;
    const monthlyExpenses = parseFloat(formData.monthlyExpenses) || 0;
    
    const availableForDebt = income - monthlyExpenses;
    const debtToIncomeRatio = (totalDebt / income) * 100;
    const monthsToPayOff = totalDebt / Math.max(availableForDebt, 1);

    let analysis = {
      level: '',
      color: '',
      icon: null,
      title: '',
      message: '',
      recommendations: []
    };

    if (debtToIncomeRatio <= 30 && availableForDebt > 0) {
      analysis = {
        level: 'baixo',
        color: 'text-green-600',
        icon: <CheckCircle className="h-6 w-6 text-green-600" />,
        title: 'Situação Controlada',
        message: 'Sua situação financeira está relativamente estável. Continue assim!',
        recommendations: [
          'Mantenha o controle dos gastos',
          'Considere criar uma reserva de emergência',
          'Avalie oportunidades de investimento'
        ]
      };
    } else if (debtToIncomeRatio <= 50) {
      analysis = {
        level: 'moderado',
        color: 'text-yellow-600',
        icon: <AlertTriangle className="h-6 w-6 text-yellow-600" />,
        title: 'Atenção Necessária',
        message: 'Suas dívidas estão em um nível que requer atenção e planejamento.',
        recommendations: [
          'Organize suas dívidas por prioridade',
          'Negocie melhores condições de pagamento',
          'Reduza gastos não essenciais'
        ]
      };
    } else {
      analysis = {
        level: 'alto',
        color: 'text-red-600',
        icon: <TrendingDown className="h-6 w-6 text-red-600" />,
        title: 'Situação Crítica',
        message: 'Suas dívidas estão em um nível preocupante. É importante buscar ajuda profissional.',
        recommendations: [
          'Busque renegociação imediata das dívidas',
          'Considere aumentar sua renda',
          'Procure orientação financeira especializada'
        ]
      };
    }

    setResult({
      ...analysis,
      debtToIncomeRatio: debtToIncomeRatio.toFixed(1),
      monthsToPayOff: monthsToPayOff.toFixed(1),
      availableForDebt: availableForDebt.toFixed(2)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    analyzeDebt();
  };

  if (!isVisible) return null;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Calculator className="h-12 w-12 text-essencia-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Análise Rápida de Endividamento
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Descubra sua situação financeira atual e receba orientações personalizadas
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Avalie Sua Situação Financeira
              </CardTitle>
              <CardDescription className="text-center">
                Preencha os dados abaixo para uma análise gratuita e imediata
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="income">Renda Mensal (R$)</Label>
                    <Input
                      id="income"
                      type="number"
                      placeholder="Ex: 3000"
                      value={formData.income}
                      onChange={(e) => handleInputChange('income', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="totalDebt">Total de Dívidas (R$)</Label>
                    <Input
                      id="totalDebt"
                      type="number"
                      placeholder="Ex: 15000"
                      value={formData.totalDebt}
                      onChange={(e) => handleInputChange('totalDebt', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthlyExpenses">Gastos Mensais Fixos (R$)</Label>
                    <Input
                      id="monthlyExpenses"
                      type="number"
                      placeholder="Ex: 2000"
                      value={formData.monthlyExpenses}
                      onChange={(e) => handleInputChange('monthlyExpenses', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="debtType">Principal Tipo de Dívida</Label>
                    <Select onValueChange={(value) => handleInputChange('debtType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cartao">Cartão de Crédito</SelectItem>
                        <SelectItem value="financiamento">Financiamento</SelectItem>
                        <SelectItem value="emprestimo">Empréstimo Pessoal</SelectItem>
                        <SelectItem value="cheque">Cheque Especial</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Nível de Urgência</Label>
                  <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Como você se sente em relação às suas dívidas?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tranquilo">Tranquilo, consigo pagar</SelectItem>
                      <SelectItem value="preocupado">Preocupado, mas ainda controlo</SelectItem>
                      <SelectItem value="desesperado">Desesperado, não sei o que fazer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-essencia-green hover:bg-essencia-green-light text-white font-semibold py-3 text-lg"
                >
                  Analisar Minha Situação
                </Button>
              </form>

              {result && (
                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center mb-4">
                    {result.icon}
                    <h3 className={`text-xl font-bold ml-3 ${result.color}`}>
                      {result.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {result.message}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white dark:bg-gray-700 rounded">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Dívida/Renda</p>
                      <p className={`text-2xl font-bold ${result.color}`}>
                        {result.debtToIncomeRatio}%
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-gray-700 rounded">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Disponível/Mês</p>
                      <p className="text-2xl font-bold text-essencia-green">
                        R$ {result.availableForDebt}
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-gray-700 rounded">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tempo p/ Quitar</p>
                      <p className="text-2xl font-bold text-essencia-cyan">
                        {result.monthsToPayOff} meses
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Recomendações Imediatas:
                    </h4>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-essencia-green mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-essencia-green text-white p-4 rounded-lg text-center">
                    <p className="mb-3">
                      <strong>Quer uma análise mais detalhada e um plano personalizado?</strong>
                    </p>
                    <p className="text-sm mb-4">
                      Entre em contato conosco no WhatsApp para uma consultoria gratuita!
                    </p>
                    <Button 
                      asChild
                      variant="secondary"
                      className="bg-white text-essencia-green hover:bg-gray-100"
                    >
                      <a 
                        href="https://wa.me/5577991220627?text=Olá! Fiz a análise de endividamento no site e gostaria de uma consultoria mais detalhada."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Falar no WhatsApp
                      </a>
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                    <strong>Aviso:</strong> Esta é uma análise preliminar. Para orientações específicas sobre produtos financeiros, consulte um profissional credenciado.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DebtAnalysisForm;

