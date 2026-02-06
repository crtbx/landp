import Link from 'next/link';
import Image from 'next/image';
import { Home, Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Como escolher a telha ideal para sua obra',
    excerpt: 'Descubra os diferentes tipos de telhas disponíveis no mercado e qual a melhor opção para seu projeto.',
    image: '/images/products/telha-colonial.webp',
    author: 'João Silva',
    date: '15 Jan 2024',
    category: 'Dicas de Construção',
  },
  {
    id: 2,
    title: '10 erros comuns em instalações elétricas',
    excerpt: 'Evite problemas futuros conhecendo os erros mais frequentes em instalações elétricas residenciais.',
    image: '/images/department/material-eletrico.webp',
    author: 'Maria Santos',
    date: '10 Jan 2024',
    category: 'Elétrica',
  },
  {
    id: 3,
    title: 'Guia completo de impermeabilização',
    excerpt: 'Tudo que você precisa saber sobre impermeabilização de lajes, banheiros e áreas externas.',
    image: '/images/products/manta-liquida.webp',
    author: 'Carlos Oliveira',
    date: '05 Jan 2024',
    category: 'Impermeabilização',
  },
  {
    id: 4,
    title: 'Tendências em pisos e revestimentos para 2024',
    excerpt: 'Conheça as principais tendências em pisos e revestimentos que estão transformando os ambientes.',
    image: '/images/department/piso.webp',
    author: 'Ana Paula',
    date: '28 Dez 2023',
    category: 'Acabamentos',
  },
  {
    id: 5,
    title: 'Passo a passo para pintura de paredes',
    excerpt: 'Aprenda a preparar e pintar suas paredes como um profissional com este guia completo.',
    image: '/images/department/tintas.webp',
    author: 'Roberto Lima',
    date: '20 Dez 2023',
    category: 'Pintura',
  },
  {
    id: 6,
    title: 'Segurança na obra: equipamentos essenciais',
    excerpt: 'Conheça os EPIs obrigatórios e boas práticas para manter a segurança no canteiro de obras.',
    image: '/images/department/cameras.webp',
    author: 'Fernanda Costa',
    date: '15 Dez 2023',
    category: 'Segurança',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200 text-sm">
        <div className="max-w-[1400px] mx-auto px-5 flex items-center gap-2 flex-wrap">
          <Link href="/" className="text-gray-600 no-underline hover:text-primary">
            <Home className="w-5 h-5" />
          </Link>
          <span className="text-gray-400"> &gt; </span>
          <span className="text-gray-400">Blog</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-5">
          <h1 className="text-4xl md:text-3xl text-gray-800 mb-4 font-bold">Blog Obramax</h1>
          <p className="text-lg text-gray-600">Dicas, tutoriais e novidades do mundo da construção civil</p>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.length > 0 && (
        <section className="py-10 bg-white border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-5">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-sm text-primary font-bold mb-2">{blogPosts[0].category}</span>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" /> {blogPosts[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {blogPosts[0].date}
                    </span>
                  </div>
                  <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                    Ler mais <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-10">
        <div className="max-w-[1400px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Artigos Recentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-bold">{post.category}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                  </div>
                  <button className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-[1400px] mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-4">Receba nossas novidades</h2>
          <p className="text-lg mb-8 opacity-90">Inscreva-se e receba dicas exclusivas direto no seu e-mail</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded text-gray-800 outline-none"
            />
            <button className="px-6 py-3 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors">
              Inscrever
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
