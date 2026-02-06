import Link from 'next/link';
import Image from 'next/image';
import { Home, Download, Eye, Calendar } from 'lucide-react';

const tabloides = [
  {
    id: 1,
    title: 'Tabloide Janeiro 2024',
    description: 'Ofertas imperdíveis para começar o ano com economia',
    image: '/images/banners/banner-1.webp',
    validUntil: '31 de Janeiro',
    pages: 24,
  },
  {
    id: 2,
    title: 'Tabloide Dezembro 2023',
    description: 'Promoções especiais de fim de ano',
    image: '/images/banners/banner-2.webp',
    validUntil: '31 de Dezembro',
    pages: 32,
  },
  {
    id: 3,
    title: 'Tabloide Novembro 2023',
    description: 'Black Friday - Os melhores preços do ano',
    image: '/images/banners/banner-3.webp',
    validUntil: '30 de Novembro',
    pages: 28,
  },
];

export default function TabloidePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200 text-sm">
        <div className="max-w-[1400px] mx-auto px-5 flex items-center gap-2 flex-wrap">
          <Link href="/" className="text-gray-600 no-underline hover:text-primary">
            <Home className="w-5 h-5" />
          </Link>
          <span className="text-gray-400"> &gt; </span>
          <span className="text-gray-400">Tabloide</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-5">
          <h1 className="text-4xl md:text-3xl text-gray-800 mb-4 font-bold">Tabloides de Ofertas</h1>
          <p className="text-lg text-gray-600">Confira nossos catálogos com as melhores ofertas e promoções</p>
        </div>
      </section>

      {/* Current Tabloide */}
      <section className="py-10 bg-gradient-to-br from-primary to-orange-600">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96 md:h-auto">
                <Image
                  src={tabloides[0].image}
                  alt={tabloides[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                  NOVO
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{tabloides[0].title}</h2>
                <p className="text-lg text-gray-600 mb-6">{tabloides[0].description}</p>
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Válido até {tabloides[0].validUntil}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Eye className="w-5 h-5 text-primary" />
                    <span>{tabloides[0].pages} páginas de ofertas</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors">
                    <Eye className="w-5 h-5" /> Visualizar
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gray-800 text-white rounded-lg font-bold hover:bg-gray-700 transition-colors">
                    <Download className="w-5 h-5" /> Baixar PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Tabloides */}
      <section className="py-10">
        <div className="max-w-[1400px] mx-auto px-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Tabloides Anteriores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabloides.slice(1).map((tabloide) => (
              <div key={tabloide.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={tabloide.image}
                    alt={tabloide.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{tabloide.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tabloide.description}</p>
                  <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Válido até {tabloide.validUntil}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{tabloide.pages} páginas</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-1 px-4 py-2 bg-primary text-white rounded font-bold text-sm hover:bg-primary-dark transition-colors">
                      <Eye className="w-4 h-4" /> Ver
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1 px-4 py-2 bg-gray-800 text-white rounded font-bold text-sm hover:bg-gray-700 transition-colors">
                      <Download className="w-4 h-4" /> PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-[1400px] mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-4">Receba nossos tabloides por e-mail</h2>
          <p className="text-xl mb-8 opacity-90">Seja o primeiro a conhecer nossas ofertas</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded text-gray-800 outline-none"
            />
            <button className="px-6 py-3 bg-primary text-white font-bold rounded hover:bg-primary-dark transition-colors">
              Inscrever
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
