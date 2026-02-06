import Image from 'next/image';
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
      <section className="relative w-full my-10">
        <Image
          src="/mid-banner.webp"
          alt="Banner Promocional"
          width={1920}
          height={300}
          className="w-full h-auto object-cover"
          priority
        />
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
