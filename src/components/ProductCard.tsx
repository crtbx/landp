'use client';

import { MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating?: number;
  unit?: string;
  link?: string;
  isOnDiscount?: boolean;
  originalPrice?: number;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  rating = 5,
  unit = 'un',
  link = '#',
  isOnDiscount = false,
  originalPrice,
}: ProductCardProps) {
  const { addItem, toggleCart } = useCart();

  const handleAddToCart = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id,
      name,
      price,
      image,
      unit,
    });
    toggleCart();
  };

  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const renderStars = (count: number) => {
    return Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <Link
      href={link}
      className="bg-white rounded-lg p-5 no-underline flex flex-col shadow-md hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer relative"
    >
      {isOnDiscount && (
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-2.5 py-1 rounded text-xs font-bold z-10">
          Max por Menos
        </div>
      )}
      <div className="w-full aspect-square flex items-center justify-center mb-4 bg-gray-50 rounded-lg overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          fill
          className="image-container"
          sizes="(max-width: 768px) 200px, (max-width: 1024px) 240px, 280px"
        />
      </div>
      <h3 className="text-[15px] md:text-sm text-gray-800 mb-2.5 leading-snug min-h-[42px] md:min-h-[40px] overflow-hidden line-clamp-2">
        {name}
      </h3>
      <div className="flex items-center gap-1 mb-2.5">{renderStars(rating)}</div>
      {originalPrice && (
        <p className="text-sm text-gray-500 mb-1 line-through">
          {formatPrice(originalPrice)}
        </p>
      )}
      <p className="text-2xl md:text-xl font-bold text-gray-800 mb-4">
        {formatPrice(price)}
        <span className="text-sm font-normal text-gray-600">/{unit}</span>
      </p>
      <button
        className="w-full py-3 md:py-2.5 bg-primary text-white border-none text-sm font-bold cursor-pointer hover:bg-primary-dark transition-colors mt-auto flex items-center justify-center gap-2"
        onClick={handleAddToCart}
      >
        <ShoppingCart className="w-4 h-4" />
        Adicionar ao carrinho
      </button>
    </Link>
  );
}
