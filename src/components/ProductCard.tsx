'use client';

import { MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating?: number;
  unit?: string;
  link?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  rating = 5,
  unit = 'un',
  link = '#',
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
    return '⭐'.repeat(count);
  };

  return (
    <Link
      href={link}
      className="bg-white rounded-lg p-5 no-underline flex flex-col shadow-md hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer"
    >
      <div className="w-full aspect-square flex items-center justify-center mb-4 bg-gray-50 rounded-lg overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 200px, (max-width: 1024px) 240px, 280px"
        />
      </div>
      <h3 className="text-[15px] md:text-sm text-gray-800 mb-2.5 leading-snug min-h-[42px] md:min-h-[40px] overflow-hidden line-clamp-2">
        {name}
      </h3>
      <div className="text-sm mb-2.5">{renderStars(rating)}</div>
      <p className="text-2xl md:text-xl font-bold text-primary mb-4">
        {formatPrice(price)}
        <span className="text-sm font-normal text-gray-600">/{unit}</span>
      </p>
      <button
        className="w-full py-3 md:py-2.5 bg-primary text-white border-none rounded text-sm font-bold cursor-pointer hover:bg-primary-dark transition-colors mt-auto"
        onClick={handleAddToCart}
      >
        Adicionar ao carrinho
      </button>
    </Link>
  );
}
