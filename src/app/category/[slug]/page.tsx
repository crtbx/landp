'use client';

import { use } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';
import { Home } from 'lucide-react';

const categoryNames: { [key: string]: string } = {
  'materiais-de-construcao': 'Materiais de Construção',
  'pisos-e-revestimentos': 'Pisos e Revestimentos',
  'climatizacao-e-ventilacao': 'Climatização e Ventilação',
  'materiais-eletricos': 'Materiais Elétricos',
  'drywall-e-steel-frame': 'Drywall e Steel-frame',
  'banheiros-e-acessorios': 'Banheiros e Acessórios',
  'tintas-e-acessorios': 'Tintas e Acessórios',
  'portas-e-janelas': 'Portas e Janelas',
  'seguranca': 'Segurança',
  'telhas-e-calhas': 'Telhas e Calhas',
};

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const products = getProductsByCategory(slug);
  const categoryName = categoryNames[slug] || 'Categoria';

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200 text-sm">
        <div className="max-w-[1400px] mx-auto px-5 flex items-center gap-2 flex-wrap">
          <Link href="/" className="text-gray-600 no-underline hover:text-primary">
            <Home className="w-5 h-5" />
          </Link>
          <span className="text-gray-400"> &gt; </span>
          <span className="text-gray-400">{categoryName}</span>
        </div>
      </div>

      {/* Category Header */}
      <section className="py-8 bg-white">
        <div className="max-w-[1400px] mx-auto px-5">
          <h1 className="text-3xl md:text-2xl text-gray-800 mb-2">{categoryName}</h1>
          <p className="text-gray-600">
            {products.length} {products.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10">
        <div className="max-w-[1400px] mx-auto px-5">
          {products.length > 0 ? (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 md:gap-5 sm:gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                  unit={product.unit}
                  link={`/product/${product.id}`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg mb-4">
                Nenhum produto encontrado nesta categoria ainda.
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark transition-colors no-underline"
              >
                Voltar para a página inicial
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
