'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const { totalItems, toggleCart } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-[1400px] mx-auto px-5 flex items-center gap-8">
          <Link href="/" className="cursor-pointer no-underline flex items-center">
            <div className="relative w-[180px] h-[50px]">
              <Image
                src="/images/logo/logo.svg"
                alt="Obramax Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="flex-1 flex gap-0">
            <input
              type="text"
              placeholder="Digite sua busca aqui"
              className="flex-1 px-5 py-3 border-2 border-primary border-r-0 rounded-l focus:outline-none text-sm"
            />
            <button className="px-6 py-3 bg-primary text-white border-none rounded-r cursor-pointer hover:bg-primary-dark transition-colors flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <div className="flex flex-col">
                <p className="m-0 text-xs text-gray-800 leading-tight">Bem-vindo!</p>
                <a href="#" className="text-[11px] text-primary no-underline">Entre ou Cadastre-se</a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div className="flex flex-col">
                <p className="m-0 text-xs text-gray-800 leading-tight">Obramax</p>
                <p className="m-0 text-xs text-gray-800 leading-tight">Loja Mooca</p>
              </div>
            </div>

            <button
              onClick={toggleCart}
              className="relative bg-primary border-none px-5 py-3 rounded cursor-pointer hover:bg-primary-dark transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <nav className="bg-gray-800 text-white">
        <div className="max-w-[1400px] mx-auto px-5 flex justify-between items-center">
          <ul className="flex list-none m-0 p-0 gap-8">
            <li><a href="#" className="text-white no-underline py-4 block text-sm hover:text-primary transition-colors">☰ Todos os departamentos</a></li>
            <li><a href="#" className="text-white no-underline py-4 block text-sm hover:text-primary transition-colors">Academia de Profissionais</a></li>
            <li><a href="#" className="text-white no-underline py-4 block text-sm hover:text-primary transition-colors">Blog</a></li>
            <li><a href="#" className="text-white no-underline py-4 block text-sm hover:text-primary transition-colors">Max por Menos</a></li>
            <li><a href="#" className="text-white no-underline py-4 block text-sm hover:text-primary transition-colors">Tabloide</a></li>
            <li><a href="#" className="text-white no-underline py-4 block text-sm hover:text-primary transition-colors">Nossas Lojas</a></li>
          </ul>
          <div className="text-white text-sm">
            🎯 Orçamento <a href="#" className="text-primary underline ml-1">Clique aqui</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
