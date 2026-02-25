'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const departments = [
  { id: 1, image: '/images/department/material.webp', name: 'Materiais de Construção', slug: 'materiais-de-construcao' },
  { id: 2, image: '/images/department/piso.webp', name: 'Pisos e Revestimentos', slug: 'pisos-e-revestimentos' },
  { id: 3, image: '/images/department/ar-condicionado.webp', name: 'Climatização e Ventilação', slug: 'climatizacao-e-ventilacao' },
  { id: 4, image: '/images/department/material-eletrico.webp', name: 'Materiais Elétricos', slug: 'materiais-eletricos' },
  { id: 5, image: '/images/department/dry-wall.webp', name: 'Drywall e Steel-frame', slug: 'drywall-e-steel-frame' },
  { id: 6, image: '/images/department/privada.webp', name: 'Banheiros e Acessórios', slug: 'banheiros-e-acessorios' },
  { id: 7, image: '/images/department/tintas.webp', name: 'Tintas e Acessórios', slug: 'tintas-e-acessorios' },
  { id: 8, image: '/images/department/portas.webp', name: 'Portas e Janelas', slug: 'portas-e-janelas' },
  { id: 9, image: '/images/department/cameras.webp', name: 'Segurança', slug: 'seguranca' },
  { id: 10, image: '/images/department/telhado.webp', name: 'Telhas e Calhas', slug: 'telhas-e-calhas' },
];

export default function Departments() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-[1400px] mx-auto px-5">
        <h2 className="text-2xl text-gray-700 mb-8 text-left pb-3 border-b border-gray-300 inline-block flex items-center gap-2">
          Compre por departamento <ShoppingCart className="w-6 h-6" />
        </h2>
        <div className="relative px-10 sm:px-12 md:px-16">
          <button
            className="absolute top-1/2 -translate-y-1/2 left-0 bg-primary text-white border-none w-12 h-12 md:w-10 md:h-10 rounded-full cursor-pointer z-10 shadow-lg hover:bg-primary-dark transition-colors flex items-center justify-center"
            onClick={() => scroll(-1)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth py-5 scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {departments.map((dept) => (
              <Link
                key={dept.id}
                href={`/category/${dept.slug}`}
                className="flex flex-col items-center gap-3 min-w-[100px] md:min-w-[90px] no-underline group"
              >
                <div className="w-[100px] h-[100px] md:w-[90px] md:h-[90px] bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all group-hover:-translate-y-1 overflow-hidden relative">
                  <Image
                    src={dept.image}
                    alt={dept.name}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
                <p className="m-0 text-center text-sm text-gray-700 font-medium leading-tight max-w-[100px] md:max-w-[90px]">
                  {dept.name}
                </p>
              </Link>
            ))}
          </div>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-0 bg-primary text-white border-none w-12 h-12 md:w-10 md:h-10 rounded-full cursor-pointer z-10 shadow-lg hover:bg-primary-dark transition-colors flex items-center justify-center"
            onClick={() => scroll(1)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
