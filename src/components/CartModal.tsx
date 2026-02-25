'use client';

import { useCart } from '@/contexts/CartContext';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { sendCartToWhatsApp } from '@/utils/whatsapp';

export default function CartModal() {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, toggleCart } = useCart();

  if (!isCartOpen) return null;

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleCheckout = () => {
    sendCartToWhatsApp(items);
    // Opcional: limpar o carrinho após enviar
    // clearCart();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
        onClick={toggleCart}
      />
      <div className="fixed top-0 right-0 w-[450px] max-w-[90%] h-screen bg-white shadow-2xl z-[1000] flex flex-col animate-slide-in">
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="m-0 text-xl text-gray-800">Carrinho de Compras</h2>
          <button
            className="bg-transparent border-none cursor-pointer text-gray-600 leading-none p-0 w-8 h-8 hover:text-gray-800 flex items-center justify-center"
            onClick={toggleCart}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="text-center py-16 px-5 text-gray-400">
              <p className="m-0 text-base">Seu carrinho está vazio</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 py-4 border-b border-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded bg-gray-100"
                />
                <div className="flex-1">
                  <h3 className="m-0 mb-2 text-sm text-gray-800 leading-snug">{item.name}</h3>
                  <p className="m-0 mb-2 text-base font-bold text-primary">
                    {formatPrice(item.price)}/{item.unit}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-100 border-none w-9 h-9 rounded cursor-pointer flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="min-w-[30px] text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-100 border-none w-9 h-9 rounded cursor-pointer flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right flex flex-col justify-between">
                  <p className="m-0 text-base font-bold text-gray-800">{formatPrice(item.price * item.quantity)}</p>
                  <button
                    className="bg-transparent border-none cursor-pointer text-lg p-1 opacity-60 hover:opacity-100 transition-opacity text-red-500"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t-2 border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center mb-4 text-lg">
              <span>Total:</span>
              <strong className="text-primary text-2xl">{formatPrice(totalPrice)}</strong>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full py-4 bg-orange-500 text-white border-none rounded font-bold text-base cursor-pointer hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </>
  );
}
