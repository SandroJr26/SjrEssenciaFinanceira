import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, TrendingUp, Shield, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams();

  // Conteúdo do artigo principal
  const post = {
    title: "O Guia Gentil para Começar a Investir, Quitar Dívidas e Assumir o Controle da Sua Vida Financeira",
    author: "Sandro Júnior",
    date: "2024-12-08",
    readTime: "15 min",
    category: "Educação Financeira",
    content: `
# Introdução: Sua Jornada Financeira Começa Aqui

Você já se perguntou por que algumas pessoas parecem ter total controle sobre suas finanças enquanto outras vivem constantemente preocupadas com dinheiro? A diferença não está na quantidade de dinheiro que ganham, mas sim na forma como gerenciam e se relacionam com ele.

Este guia foi criado especialmente para você que deseja transformar sua vida financeira, mas não sabe por onde começar. Aqui, você encontrará estratégias práticas e comprovadas para organizar suas finanças, quitar dívidas de forma inteligente e dar os primeiros passos no mundo dos investimentos.

## Por Que Este Guia é Diferente?

Diferente de outros materiais que prometem fórmulas mágicas, este guia adota uma abordagem gentil e realista. Reconhecemos que cada pessoa tem sua própria realidade financeira, e por isso oferecemos estratégias adaptáveis que funcionam tanto para quem ganha um salário mínimo quanto para quem tem renda mais alta.

# Capítulo 1: Entendendo Sua Situação Financeira Atual

## O Diagnóstico Financeiro

Antes de qualquer mudança, é fundamental entender onde você está. Muitas pessoas evitam olhar para suas finanças por medo ou vergonha, mas este é o primeiro passo para a transformação.

### Passo 1: Mapeie Suas Receitas
Liste todas as suas fontes de renda:
- Salário principal
- Trabalhos extras
- Rendas passivas
- Benefícios
- Outras fontes

### Passo 2: Identifique Todos os Gastos
Categorize seus gastos em:
- **Essenciais**: moradia, alimentação, transporte, saúde
- **Importantes**: educação, seguros, reserva de emergência
- **Supérfluos**: entretenimento, compras por impulso, assinaturas desnecessárias

### Passo 3: Calcule Seu Saldo
Receitas - Gastos = Saldo mensal

Se o resultado for negativo, você está gastando mais do que ganha. Se for positivo, você tem potencial para investir e construir patrimônio.

## A Importância da Honestidade Financeira

Seja brutalmente honesto consigo mesmo. Anote todos os gastos, por menores que sejam. Aquele cafezinho diário, o aplicativo de transporte, as compras online por impulso - tudo conta.

# Capítulo 2: Estratégias Inteligentes para Quitação de Dívidas

## O Método da Bola de Neve vs. Avalanche

### Método Bola de Neve
1. Liste todas as dívidas do menor para o maior valor
2. Pague o mínimo de todas as dívidas
3. Concentre todo dinheiro extra na menor dívida
4. Quando quitá-la, use o valor que pagava nela para a próxima menor dívida

**Vantagem**: Motivação psicológica ao ver dívidas sendo quitadas rapidamente.

### Método Avalanche
1. Liste todas as dívidas da maior para a menor taxa de juros
2. Pague o mínimo de todas as dívidas
3. Concentre todo dinheiro extra na dívida com maior juros
4. Quando quitá-la, passe para a próxima com maior taxa

**Vantagem**: Economia matemática maior em juros.

## Negociação de Dívidas

### Antes de Negociar
- Tenha em mãos todos os dados da dívida
- Saiba exatamente quanto pode pagar
- Defina um limite máximo para a negociação

### Durante a Negociação
- Seja educado e profissional
- Explique sua situação financeira honestamente
- Peça desconto para pagamento à vista
- Solicite a proposta por escrito
- Não aceite a primeira oferta

### Dicas Importantes
- Negocie preferencialmente no final do mês
- Grave a conversa (informe que está gravando)
- Guarde todos os comprovantes
- Quite apenas após receber o documento de quitação

# Capítulo 3: Construindo Sua Reserva de Emergência

## Por Que Você Precisa de uma Reserva?

A reserva de emergência é sua proteção contra imprevistos como:
- Perda de emprego
- Problemas de saúde
- Reparos urgentes
- Oportunidades de investimento

## Quanto Guardar?

**Iniciante**: 3 meses de gastos essenciais
**Intermediário**: 6 meses de gastos totais
**Avançado**: 12 meses de gastos totais

## Onde Guardar Sua Reserva?

1. **Poupança**: Fácil acesso, mas baixa rentabilidade
2. **CDB com liquidez diária**: Melhor rentabilidade que a poupança
3. **Tesouro Selic**: Segurança do governo, boa liquidez
4. **Fundos DI**: Diversificação, mas verifique taxas

## Como Construir Sua Reserva

### Estratégia dos 50/30/20
- 50% da renda para gastos essenciais
- 30% para gastos pessoais
- 20% para reserva e investimentos

### Automatize o Processo
Configure uma transferência automática no dia do seu salário. Trate a reserva como uma conta obrigatória.

# Capítulo 4: Primeiros Passos no Mundo dos Investimentos

## Desmistificando os Investimentos

Investir não é privilégio de ricos. Com apenas R$ 30, você já pode começar a investir no Tesouro Direto. O importante é começar, mesmo que com pouco.

## Perfil de Investidor

### Conservador
- Prioriza segurança
- Aceita rentabilidade menor
- Investe em: Poupança, CDB, Tesouro Direto

### Moderado
- Equilibra segurança e rentabilidade
- Aceita algum risco
- Investe em: CDB, Tesouro, Fundos, algumas ações

### Arrojado
- Busca alta rentabilidade
- Aceita riscos maiores
- Investe em: Ações, fundos de ações, criptomoedas

## Investimentos para Iniciantes

### 1. Tesouro Direto
**Vantagens**: Segurança do governo, baixo valor inicial
**Tipos**:
- Tesouro Selic: Para reserva de emergência
- Tesouro IPCA+: Proteção contra inflação
- Tesouro Prefixado: Taxa fixa conhecida

### 2. CDB (Certificado de Depósito Bancário)
**Vantagens**: Garantia do FGC até R$ 250.000
**Dica**: Procure CDBs que paguem mais que 100% do CDI

### 3. Fundos de Investimento
**Vantagens**: Gestão profissional, diversificação
**Cuidado**: Verifique as taxas de administração

### 4. Ações (para quem já tem reserva)
**Vantagens**: Potencial de alta rentabilidade
**Riscos**: Volatilidade, possibilidade de perdas

## Estratégia de Diversificação

Nunca coloque todos os ovos na mesma cesta. Uma carteira equilibrada pode incluir:
- 40% Renda fixa (CDB, Tesouro)
- 30% Fundos diversificados
- 20% Ações de empresas sólidas
- 10% Investimentos alternativos

# Capítulo 5: Planejamento Financeiro de Longo Prazo

## Definindo Seus Objetivos

### Objetivos de Curto Prazo (até 2 anos)
- Quitar dívidas
- Formar reserva de emergência
- Fazer uma viagem
- Comprar um bem

### Objetivos de Médio Prazo (2 a 10 anos)
- Comprar um imóvel
- Trocar de carro
- Fazer uma especialização
- Casar

### Objetivos de Longo Prazo (mais de 10 anos)
- Aposentadoria
- Independência financeira
- Educação dos filhos
- Deixar um legado

## Calculando Seus Objetivos

Para cada objetivo, calcule:
- Valor total necessário
- Prazo para alcançar
- Valor mensal a ser investido
- Rentabilidade necessária

### Exemplo Prático
**Objetivo**: Comprar um carro de R$ 50.000 em 5 anos
**Cálculo**: Investindo R$ 650/mês a 10% ao ano, você terá R$ 50.000 em 5 anos

## A Importância da Disciplina

O sucesso financeiro não vem de grandes golpes de sorte, mas da disciplina diária. Pequenas ações consistentes geram grandes resultados ao longo do tempo.

# Capítulo 6: Educação Financeira Contínua

## Desenvolvendo Novos Hábitos

### Hábitos Financeiros Saudáveis
1. **Anote todos os gastos**: Use aplicativos ou planilhas
2. **Revise mensalmente**: Analise onde seu dinheiro foi parar
3. **Pesquise antes de comprar**: Compare preços e condições
4. **Evite compras por impulso**: Espere 24h antes de comprar
5. **Invista em conhecimento**: Leia livros, faça cursos

### Hábitos a Evitar
1. Usar cartão de crédito sem controle
2. Fazer empréstimos para consumo
3. Não ter objetivos claros
4. Seguir dicas de investimento sem estudar
5. Comparar-se financeiramente com outros

## Recursos para Continuar Aprendendo

### Livros Recomendados
- "Pai Rico, Pai Pobre" - Robert Kiyosaki
- "O Homem Mais Rico da Babilônia" - George S. Clason
- "Investimentos Inteligentes" - Gustavo Cerbasi

### Aplicativos Úteis
- Controle de gastos: GuiaBolso, Organizze
- Investimentos: Rico, XP, BTG
- Educação: B3 Educação, CVM

### Canais e Blogs
- Me Poupe! (Nathalia Arcuri)
- O Primo Rico (Thiago Nigro)
- Blog da Rico
- Portal do Investidor (CVM)

# Conclusão: Sua Nova Vida Financeira Começa Agora

Chegamos ao final deste guia, mas sua jornada financeira está apenas começando. Lembre-se de que transformar sua vida financeira é um processo gradual que exige paciência, disciplina e conhecimento contínuo.

## Seus Próximos Passos

1. **Faça seu diagnóstico financeiro** usando as ferramentas apresentadas
2. **Quite suas dívidas** seguindo as estratégias sugeridas
3. **Construa sua reserva de emergência** de forma consistente
4. **Comece a investir** mesmo que com valores pequenos
5. **Continue aprendendo** sobre educação financeira

## Lembre-se Sempre

- Não existe fórmula mágica para enriquecer rapidamente
- Pequenas ações consistentes geram grandes resultados
- Conhecimento é o melhor investimento que você pode fazer
- Sua situação financeira atual não define seu futuro
- É possível sim transformar sua vida financeira

## Um Convite Especial

Se você chegou até aqui, parabéns! Isso mostra seu comprometimento com a mudança. Mas sabemos que colocar tudo isso em prática pode ser desafiador sozinho.

Na Essência Financeira, oferecemos consultoria personalizada para ajudar você a implementar todas essas estratégias de acordo com sua realidade específica. Nossa primeira consulta é gratuita, e nossos planos são acessíveis para todos os perfis de renda.

**Lembre-se**: Este conteúdo tem caráter educativo e não constitui recomendação de investimento. Para decisões específicas sobre produtos financeiros, consulte sempre um profissional credenciado.

Sua nova vida financeira começa com uma decisão. E essa decisão é sua.

*Transforme seu conhecimento em ação. Transforme sua ação em resultados. Transforme seus resultados em liberdade financeira.*
    `
  };

  const relatedPosts = [
    {
      slug: "como-criar-reserva-emergencia",
      title: "Como Criar uma Reserva de Emergência do Zero",
      readTime: "8 min"
    },
    {
      slug: "investimentos-iniciantes-2024",
      title: "Investimentos para Iniciantes em 2024",
      readTime: "12 min"
    },
    {
      slug: "quitacao-dividas-estrategias",
      title: "Estratégias Inteligentes para Quitação de Dívidas",
      readTime: "9 min"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = window.location.href;
  const shareText = `Confira este artigo: ${post.title}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: shareText,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-essencia-green to-essencia-cyan text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-gray-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Blog
            </Link>
            
            <div className="mb-4">
              <span className="bg-essencia-gold text-essencia-black px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              <button 
                onClick={handleShare}
                className="flex items-center hover:text-white transition-colors"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  {/* Disclaimer */}
                  <div className="bg-yellow-50 border-l-4 border-essencia-gold p-4 mb-8">
                    <div className="flex">
                      <Shield className="h-5 w-5 text-essencia-gold mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-700">
                          <strong>Aviso Legal:</strong> Este conteúdo tem caráter educativo e não constitui 
                          recomendação de investimento. Para decisões específicas sobre produtos financeiros, 
                          consulte sempre um profissional credenciado.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-essencia-green prose-ul:text-gray-700 prose-ol:text-gray-700"
                    dangerouslySetInnerHTML={{ 
                      __html: post.content
                        .split('\n')
                        .map(line => {
                          if (line.startsWith('# ')) {
                            return `<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4">${line.substring(2)}</h1>`;
                          } else if (line.startsWith('## ')) {
                            return `<h2 class="text-2xl font-bold text-gray-900 mt-6 mb-3">${line.substring(3)}</h2>`;
                          } else if (line.startsWith('### ')) {
                            return `<h3 class="text-xl font-semibold text-gray-900 mt-4 mb-2">${line.substring(4)}</h3>`;
                          } else if (line.startsWith('**') && line.endsWith('**')) {
                            return `<p class="font-semibold text-essencia-green mb-2">${line.substring(2, line.length - 2)}</p>`;
                          } else if (line.startsWith('- ')) {
                            return `<li class="mb-1">${line.substring(2)}</li>`;
                          } else if (line.trim() === '') {
                            return '<br>';
                          } else {
                            return `<p class="mb-4 leading-relaxed">${line}</p>`;
                          }
                        })
                        .join('')
                    }}
                  />

                  {/* CTA dentro do artigo */}
                  <div className="bg-essencia-green text-white rounded-lg p-6 my-8">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-3">
                        Precisa de Ajuda Personalizada?
                      </h3>
                      <p className="text-gray-100 mb-4">
                        Nossa equipe pode ajudar você a colocar essas estratégias em prática 
                        de acordo com sua realidade financeira específica.
                      </p>
                      <Button 
                        asChild
                        className="bg-essencia-gold text-essencia-black hover:bg-yellow-400"
                      >
                        <Link to="/contato">
                          Agendar Consulta Gratuita
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Table of Contents */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-essencia-green" />
                    Índice do Artigo
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#introducao" className="block text-gray-600 hover:text-essencia-green transition-colors">
                      Introdução
                    </a>
                    <a href="#capitulo-1" className="block text-gray-600 hover:text-essencia-green transition-colors">
                      1. Situação Financeira Atual
                    </a>
                    <a href="#capitulo-2" className="block text-gray-600 hover:text-essencia-green transition-colors">
                      2. Quitação de Dívidas
                    </a>
                    <a href="#capitulo-3" className="block text-gray-600 hover:text-essencia-green transition-colors">
                      3. Reserva de Emergência
                    </a>
                    <a href="#capitulo-4" className="block text-gray-600 hover:text-essencia-green transition-colors">
                      4. Primeiros Investimentos
                    </a>
                    <a href="#capitulo-5" className="block text-gray-600 hover:text-essencia-green transition-colors">
                      5. Planejamento de Longo Prazo
                    </a>
                    <a href="#capitulo-6" className="block text-gray-600 hover:text-essencia-green transition-colors">
                      6. Educação Contínua
                    </a>
                  </nav>
                </div>

                {/* Related Posts */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Artigos Relacionados
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost, index) => (
                      <Link 
                        key={index}
                        to={`/blog/${relatedPost.slug}`}
                        className="block p-3 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900 mb-1 text-sm leading-tight">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {relatedPost.readTime}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-essencia-cyan text-white rounded-lg p-6 text-center">
                  <Target className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-3">
                    Transforme Conhecimento em Ação
                  </h3>
                  <p className="text-gray-100 mb-4 text-sm">
                    Que tal colocar essas estratégias em prática com nossa ajuda?
                  </p>
                  <Button 
                    asChild
                    className="bg-essencia-gold text-essencia-black hover:bg-yellow-400"
                    size="sm"
                  >
                    <Link to="/planos">
                      Ver Nossos Planos
                    </Link>
                  </Button>
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
            Gostou do Conteúdo? Continue Aprendendo!
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Explore mais artigos em nosso blog e transforme seu conhecimento 
            financeiro em resultados práticos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-essencia-gold text-essencia-black hover:bg-yellow-400 font-semibold px-8 py-4"
            >
              <Link to="/blog">
                Ver Mais Artigos
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-essencia-green font-semibold px-8 py-4"
            >
              <Link to="/contato">
                Falar com Especialista
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;

