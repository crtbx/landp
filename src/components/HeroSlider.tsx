'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { banners } from '@/data/products';

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
    <section className="relative w-full mx-auto overflow-hidden">
      <div className="relative w-full h-[600px] lg:h-[500px] md:h-[400px] sm:h-[300px]">
        <button
          className="absolute top-1/2 -translate-y-1/2 left-5 md:left-2.5 bg-black bg-opacity-50 text-white border-none w-12 h-12 md:w-10 md:h-10 rounded-full text-2xl md:text-xl cursor-pointer z-10 hover:bg-opacity-80 transition-all flex items-center justify-center"
          onClick={prevSlide}
        >
          ❮
        </button>

        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={banner.image}
              alt={banner.alt}
              fill
              className="object-cover"
              quality={100}
              sizes="100vw"
              unoptimized
              priority={index === 0}
            />
          </div>
        ))}

        <button
          className="absolute top-1/2 -translate-y-1/2 right-5 md:right-2.5 bg-black bg-opacity-50 text-white border-none w-12 h-12 md:w-10 md:h-10 rounded-full text-2xl md:text-xl cursor-pointer z-10 hover:bg-opacity-80 transition-all flex items-center justify-center"
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-10 bg-white bg-opacity-80 py-2.5 px-4 rounded-[20px]">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-colors ${
              index === currentSlide ? 'bg-primary' : 'bg-gray-300 hover:bg-primary-light'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
