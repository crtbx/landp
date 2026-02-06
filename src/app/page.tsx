import HeroSlider from '@/components/HeroSlider';
import Departments from '@/components/Departments';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Departments />

      {/* Promotional Banner */}
      <section className="bg-gradient-to-br from-[#003366] to-[#005599] py-16 my-10">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left gap-5">
            <div>
              <h2 className="text-4xl md:text-3xl sm:text-2xl m-0 leading-tight">TUDO PARA SUA OBRA</h2>
              <p className="text-xl md:text-base sm:text-sm mt-1">MAIS DE 16 MIL PRODUTOS DE QUALIDADE</p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-8 sm:gap-4 text-lg md:text-base sm:text-sm">
              <div className="flex items-center gap-2.5">
                <span className="text-primary text-base">▶</span> Menor preço
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-primary text-base">▶</span> Entrega rápida
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-5">
          <h2 className="text-3xl md:text-2xl text-gray-800 mb-10 text-center">Telha seguro e resistente</h2>
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
        </div>
      </section>
    </>
  );
}
