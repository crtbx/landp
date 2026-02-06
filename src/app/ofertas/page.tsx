import Link from 'next/link';
import { Home, Tag, TrendingDown, Clock } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function OfertasPage() {
  // Simula produtos em oferta (com desconto aplicado)
  const offersProducts = products.map(product => ({
    ...product,
    originalPrice: product.price * 1.3, // Preço "original" 30% maior
    discount: 30,
  }));

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200 text-sm">
        <div className="max-w-[1400px] mx-auto px-5 flex items-center gap-2 flex-wrap">
          <Link href="/" className="text-gray-600 no-underline hover:text-primary">
            <Home className="w-5 h-5" />
          </Link>
          <span className="text-gray-400"> &gt; </span>
          <span className="text-gray-400">Max por Menos</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="flex items-center gap-4 mb-6">
            <Tag className="w-16 h-16" />
            <div>
              <h1 className="text-5xl md:text-4xl font-bold mb-2">Max por Menos</h1>
              <p className="text-2xl">Economia máxima, qualidade garantida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <TrendingDown className="w-12 h-12 text-red-600 mb-2" />
              <h3 className="font-bold text-lg mb-1">Até 50% OFF</h3>
              <p className="text-sm text-gray-600">Descontos imperdíveis em produtos selecionados</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-red-600 mb-2" />
              <h3 className="font-bold text-lg mb-1">Ofertas Relâmpago</h3>
              <p className="text-sm text-gray-600">Promoções por tempo limitado</p>
            </div>
            <div className="flex flex-col items-center">
              <Tag className="w-12 h-12 text-red-600 mb-2" />
              <h3 className="font-bold text-lg mb-1">Preços Exclusivos</h3>
              <p className="text-sm text-gray-600">Condições especiais para você</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-8 bg-red-600 text-white">
        <div className="max-w-[1400px] mx-auto px-5 text-center">
          <h2 className="text-2xl font-bold mb-4">⚡ Oferta Relâmpago - Termina em:</h2>
          <div className="flex justify-center gap-4 text-center">
            <div className="bg-white text-red-600 rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold">23</div>
              <div className="text-sm">Horas</div>
            </div>
            <div className="bg-white text-red-600 rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold">45</div>
              <div className="text-sm">Minutos</div>
            </div>
            <div className="bg-white text-red-600 rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm">Segundos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-10">
        <div className="max-w-[1400px] mx-auto px-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Produtos em Oferta</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 md:gap-5 sm:gap-4">
            {offersProducts.map((product) => (
              <div key={product.id} className="relative">
                <div className="absolute top-2 left-2 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  -{product.discount}%
                </div>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                  unit={product.unit}
                  link={`/product/${product.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-[1400px] mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-4">Não perca essas ofertas!</h2>
          <p className="text-xl mb-8 opacity-90">Aproveite os melhores preços em materiais de construção</p>
          <Link
            href="/departamentos"
            className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary-dark transition-colors no-underline"
          >
            Ver Todos os Departamentos
          </Link>
        </div>
      </section>
    </div>
  );
}
