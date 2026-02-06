'use client';

import Link from 'next/link';
import { Home, MapPin, Phone, Clock, Navigation } from 'lucide-react';

const lojas = [
  {
    id: 1,
    name: 'Obramax Praia Grande',
    address: 'Av. Presidente Kennedy, 5000 - Cidade Ocian',
    city: 'Praia Grande - SP',
    cep: '11704-000',
    phone: '(13) 3591-5000',
    whatsapp: '(13) 99999-0001',
    hours: 'Seg a Sáb: 7h às 19h | Dom: 8h às 14h',
    services: ['Estacionamento Gratuito', 'Entrega Expressa', 'Assistência Técnica'],
  },
  {
    id: 2,
    name: 'Obramax Santos',
    address: 'Av. Ana Costa, 1500 - Gonzaga',
    city: 'Santos - SP',
    cep: '11060-001',
    phone: '(13) 3234-5000',
    whatsapp: '(13) 99999-0002',
    hours: 'Seg a Sáb: 7h às 19h | Dom: 8h às 14h',
    services: ['Estacionamento Gratuito', 'Serviço de Corte', 'Projeto Grátis'],
  },
  {
    id: 3,
    name: 'Obramax São Vicente',
    address: 'Av. Tupiniquins, 2000 - Centro',
    city: 'São Vicente - SP',
    cep: '11310-000',
    phone: '(13) 3467-8000',
    whatsapp: '(13) 99999-0003',
    hours: 'Seg a Sáb: 7h às 19h | Dom: 8h às 14h',
    services: ['Estacionamento Gratuito', 'Aluguel de Ferramentas', 'Consultoria Técnica'],
  },
  {
    id: 4,
    name: 'Obramax Guarujá',
    address: 'Av. Santos Dumont, 3500 - Enseada',
    city: 'Guarujá - SP',
    cep: '11440-000',
    phone: '(13) 3355-9000',
    whatsapp: '(13) 99999-0004',
    hours: 'Seg a Sáb: 7h às 19h | Dom: 8h às 14h',
    services: ['Estacionamento Gratuito', 'Entrega Expressa', 'Cartão Fidelidade'],
  },
];

export default function LojasPage() {
  const handleNavigate = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const handleWhatsApp = (whatsapp: string, storeName: string) => {
    const phoneNumber = whatsapp.replace(/\D/g, '');
    const message = encodeURIComponent(`Olá! Gostaria de mais informações sobre os produtos da ${storeName}.`);
    window.open(`https://wa.me/55${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200 text-sm">
        <div className="max-w-[1400px] mx-auto px-5 flex items-center gap-2 flex-wrap">
          <Link href="/" className="text-gray-600 no-underline hover:text-primary">
            <Home className="w-5 h-5" />
          </Link>
          <span className="text-gray-400"> &gt; </span>
          <span className="text-gray-400">Nossas Lojas</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-5">
          <h1 className="text-4xl md:text-3xl text-gray-800 mb-4 font-bold">Nossas Lojas</h1>
          <p className="text-lg text-gray-600">Encontre a loja Obramax mais próxima de você</p>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-0">
        <div className="w-full h-96 bg-gray-300 relative">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Mapa das lojas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stores List */}
      <section className="py-10">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lojas.map((loja) => (
              <div key={loja.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{loja.name}</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700">{loja.address}</p>
                      <p className="text-gray-600 text-sm">{loja.city}</p>
                      <p className="text-gray-600 text-sm">CEP: {loja.cep}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">{loja.phone}</p>
                      <p className="text-sm text-green-600 font-medium">WhatsApp: {loja.whatsapp}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{loja.hours}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-gray-800 mb-2">Serviços disponíveis:</h3>
                  <div className="flex flex-wrap gap-2">
                    {loja.services.map((service, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        ✓ {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleNavigate(`${loja.address}, ${loja.city}`)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded font-bold hover:bg-primary-dark transition-colors"
                  >
                    <Navigation className="w-4 h-4" /> Como Chegar
                  </button>
                  <button
                    onClick={() => handleWhatsApp(loja.whatsapp, loja.name)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded font-bold hover:bg-green-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" /> WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-[1400px] mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-4">Não encontrou a loja mais próxima?</h2>
          <p className="text-xl mb-8 opacity-90">Entre em contato conosco pelo nosso SAC</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:08001234567"
              className="px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors text-center no-underline"
            >
              0800 123 4567
            </a>
            <button
              onClick={() => handleWhatsApp('(13) 99999-0000', 'Central Obramax')}
              className="px-8 py-4 bg-green-600 text-white rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
            >
              Fale no WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
