import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const featuredPost = {
    slug: "guia-gentil-investir-quitar-dividas",
    title: "O Guia Gentil para Começar a Investir, Quitar Dívidas e Assumir o Controle da Sua Vida Financeira",
    excerpt: "Um guia completo e prático para transformar sua relação com o dinheiro. Aprenda estratégias comprovadas para organizar suas finanças, quitar dívidas de forma inteligente e dar os primeiros passos no mundo dos investimentos.",
    author: "Sandro Júnior",
    date: "2024-12-08",
    readTime: "15 min",
    category: "Educação Financeira",
    featured: true
  };

  const blogPosts = [
    {
      slug: "como-criar-reserva-emergencia",
      title: "Como Criar uma Reserva de Emergência do Zero",
      excerpt: "Descubra o passo a passo para construir sua reserva de emergência, mesmo com pouco dinheiro. Estratégias práticas para proteger suas finanças.",
      author: "Sandro Júnior",
      date: "2024-12-05",
      readTime: "8 min",
      category: "Planejamento"
    },
    {
      slug: "erros-comuns-organizacao-financeira",
      title: "5 Erros Comuns na Organização Financeira",
      excerpt: "Evite os principais erros que impedem as pessoas de alcançar a estabilidade financeira. Aprenda com os erros mais comuns e como corrigi-los.",
      author: "Sandro Júnior",
      date: "2024-12-03",
      readTime: "6 min",
      category: "Dicas"
    },
    {
      slug: "investimentos-iniciantes-2024",
      title: "Investimentos para Iniciantes em 2024",
      excerpt: "Guia completo sobre os melhores investimentos para quem está começando. Conheça as opções mais seguras e rentáveis para iniciantes.",
      author: "Sandro Júnior",
      date: "2024-12-01",
      readTime: "12 min",
      category: "Investimentos"
    },
    {
      slug: "planejamento-financeiro-familiar",
      title: "Planejamento Financeiro Familiar: Por Onde Começar",
      excerpt: "Como envolver toda a família no planejamento financeiro. Estratégias para alinhar objetivos e criar um orçamento familiar eficiente.",
      author: "Sandro Júnior",
      date: "2024-11-28",
      readTime: "10 min",
      category: "Família"
    },
    {
      slug: "quitacao-dividas-estrategias",
      title: "Estratégias Inteligentes para Quitação de Dívidas",
      excerpt: "Métodos comprovados para quitar suas dívidas de forma organizada e eficiente. Aprenda a negociar e a priorizar seus pagamentos.",
      author: "Sandro Júnior",
      date: "2024-11-25",
      readTime: "9 min",
      category: "Dívidas"
    },
    {
      slug: "educacao-financeira-criancas",
      title: "Educação Financeira para Crianças",
      excerpt: "Como ensinar conceitos financeiros básicos para crianças de forma lúdica e eficaz. Construa uma base sólida desde cedo.",
      author: "Sandro Júnior",
      date: "2024-11-22",
      readTime: "7 min",
      category: "Educação"
    }
  ];

  const categories = [
    { name: "Todos", count: blogPosts.length + 1 },
    { name: "Educação Financeira", count: 2 },
    { name: "Investimentos", count: 1 },
    { name: "Planejamento", count: 2 },
    { name: "Dívidas", count: 1 },
    { name: "Dicas", count: 1 }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-essencia-green to-essencia-cyan text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog da <span className="text-essencia-gold">Essência Financeira</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Conteúdo exclusivo sobre educação financeira, investimentos e planejamento. 
            Aprenda com nossos especialistas e transforme sua vida financeira.
          </p>
        </div>
      </section>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <TrendingUp className="h-6 w-6 text-essencia-gold mr-2" />
                  Artigo em Destaque
                </h2>
                
                <article className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-essencia-gold">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-essencia-gold text-essencia-black px-3 py-1 rounded-full text-sm font-semibold">
                        {featuredPost.category}
                      </span>
                      <span className="bg-essencia-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Destaque
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(featuredPost.date)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      
                      <Button 
                        asChild
                        className="bg-essencia-green hover:bg-essencia-cyan text-white"
                      >
                        <Link to={`/blog/${featuredPost.slug}`}>
                          Ler Artigo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </div>

              {/* Blog Posts Grid */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Últimos Artigos
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <article key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                      <div className="p-6">
                        <div className="mb-3">
                          <span className="bg-essencia-cyan text-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {formatDate(post.date)}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                          
                          <Button 
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-essencia-green text-essencia-green hover:bg-essencia-green hover:text-white"
                          >
                            <Link to={`/blog/${post.slug}`}>
                              Ler Mais
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Categorias
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button className="flex items-center justify-between w-full text-left py-2 px-3 rounded-md hover:bg-gray-50 transition-colors">
                          <span className="text-gray-700 hover:text-essencia-green">
                            {category.name}
                          </span>
                          <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                            {category.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="bg-essencia-green text-white rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">
                    Newsletter
                  </h3>
                  <p className="text-gray-100 mb-4 text-sm">
                    Receba dicas exclusivas de educação financeira diretamente no seu e-mail.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Seu e-mail"
                      className="w-full px-3 py-2 rounded-md text-gray-900 text-sm"
                    />
                    <Button 
                      className="w-full bg-essencia-gold text-essencia-black hover:bg-yellow-400"
                      size="sm"
                    >
                      Inscrever-se
                    </Button>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Precisa de Ajuda?
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Fale com nossos especialistas e receba orientação personalizada.
                  </p>
                  <Button 
                    asChild
                    className="bg-essencia-cyan hover:bg-essencia-green text-white"
                    size="sm"
                  >
                    <Link to="/contato">
                      Falar Conosco
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
            Transforme Seu Conhecimento em Resultados
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Que tal colocar em prática tudo que você aprendeu? 
            Conheça nossos planos de consultoria personalizada.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-essencia-gold text-essencia-black hover:bg-yellow-400 font-semibold px-8 py-4"
          >
            <Link to="/planos">
              Ver Nossos Planos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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

export default Blog;

