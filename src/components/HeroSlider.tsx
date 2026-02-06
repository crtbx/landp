'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { banners } from '@/data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="relative w-full max-w-[1400px] mx-auto overflow-hidden">
      <div className="relative w-full h-[248px] lg:h-[230px] md:h-[200px] sm:h-[180px]">
        <button
          className="absolute top-1/2 -translate-y-1/2 left-3 md:left-2 bg-black bg-opacity-50 text-white border-none w-8 h-8 md:w-7 md:h-7 rounded-full cursor-pointer z-10 hover:bg-opacity-80 transition-all flex items-center justify-center"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <Image
              src={banner.image}
              alt={banner.alt}
              fill
              className="object-cover object-center w-full h-full"
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
              priority={index === 0}
            />
          </div>
        ))}

        <button
          className="absolute top-1/2 -translate-y-1/2 right-3 md:right-2 bg-black bg-opacity-50 text-white border-none w-8 h-8 md:w-7 md:h-7 rounded-full cursor-pointer z-10 hover:bg-opacity-80 transition-all flex items-center justify-center"
          onClick={nextSlide}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2.5 z-10 bg-white bg-opacity-80 py-0.5 px-3 rounded-[20px]">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full border-none cursor-pointer transition-colors ${
              index === currentSlide ? 'bg-primary' : 'bg-gray-300 hover:bg-primary-light'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
