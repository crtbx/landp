'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/data/products';
import FeatureIcon from '@/components/FeatureIcon';
import {
  Home,
  Star,
  Heart,
  Share2,
  Ruler,
  Bell,
  MapPin,
  Truck,
  Package,
  DollarSign,
  ShoppingCart,
  Link as LinkIcon,
  AlertTriangle,
  Minus,
  Plus
} from 'lucide-react';

export default function ProductPageClient({ productData }: { productData: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(3);
  const [cep, setCep] = useState('');
  const [cepChecked, setCepChecked] = useState(false);
  const { addItem, toggleCart } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: productData.id,
      name: productData.name,
      price: productData.price,
      image: productData.images?.[0] || productData.image,
      unit: productData.unit || 'un',
      quantity,
    });
    toggleCart();
  };

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleCheckCep = () => {
    if (cep.length >= 8) {
      setCepChecked(true);
    }
  };

  const totalPrice = productData.price * quantity;

  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const productImages = productData.images || [productData.image, productData.image, productData.image, productData.image];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200 text-sm">
        <div className="max-w-[1400px] mx-auto px-5 flex items-center gap-2 flex-wrap">
          <Link href="/" className="text-gray-600 no-underline hover:text-primary">
            <Home className="w-5 h-5" />
          </Link>
          <span className="text-gray-400"> &gt; </span>
          <Link href="#" className="text-gray-600 no-underline hover:text-primary">Materiais de Construção</Link>
          <span className="text-gray-400"> &gt; </span>
          <Link href="#" className="text-gray-600 no-underline hover:text-primary">Telhas e Acessórios</Link>
          <span className="text-gray-400"> &gt; </span>
          <Link href="#" className="text-gray-600 no-underline hover:text-primary">Telhas de PVC e Plásticas</Link>
          <span className="text-gray-400"> &gt; </span>
          <span className="text-gray-400">{productData.name}</span>
        </div>
      </div>

      <section className="py-10">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_400px] md:grid-cols-1 gap-10 bg-white p-10 md:p-5 rounded-lg shadow-sm">

            {/* Product Images */}
            <div className="flex flex-col">
              <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                <Image
                  src={productImages[selectedImage]}
                  alt={productData.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex gap-2.5">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    className={`w-20 h-20 border-2 rounded overflow-hidden cursor-pointer bg-white p-0 transition-colors relative ${
                      index === selectedImage ? 'border-primary' : 'border-gray-200 hover:border-primary'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={img}
                      alt={`Vista ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
              <p className="mt-2.5 text-xs text-gray-400 italic">*Imagem meramente ilustrativa</p>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-2xl text-[#003366] mb-2.5 leading-tight">{productData.name}</h1>
              <p className="text-sm text-gray-600 mb-2.5">
                Marca: <strong>{productData.brand || 'N/A'}</strong> | SKU: <strong>{productData.sku || 'N/A'}</strong>
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: productData.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <a href="#" className="text-primary underline text-sm ml-2.5">
                  avalie este produto
                </a>
              </div>
              <div className="flex gap-2.5 mb-6">
                <button className="bg-white border-2 border-gray-200 w-10 h-10 rounded-full cursor-pointer hover:border-primary hover:text-primary transition-all flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="bg-white border-2 border-gray-200 w-10 h-10 rounded-full cursor-pointer hover:border-primary hover:text-primary transition-all flex items-center justify-center">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Features */}
              {productData.features && (
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mb-8 p-5 bg-gray-50 rounded-lg">
                  {productData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2.5">
                      <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg">
                        <FeatureIcon iconName={feature.icon} className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <strong className="block text-xs text-gray-600 mb-0.5">{feature.title}</strong>
                        <p className="m-0 text-sm text-gray-800">{feature.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              {productData.description && (
                <div className="mb-8">
                  <h3 className="text-lg mb-3 text-gray-800 font-semibold">Descrição do Produto</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{productData.description}</p>
                </div>
              )}

              {/* Dimensions */}
              {productData.dimensions && (
                <div className="mb-8">
                  <h3 className="text-lg mb-4 text-gray-800">Dimensões</h3>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="p-3 text-left border-b border-gray-200 font-bold text-gray-800 bg-gray-50">
                          Medidas
                        </th>
                        <th className="p-3 text-left border-b border-gray-200 font-bold text-gray-800 bg-gray-50">
                          Com embalagem
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {productData.dimensions.map((dim, index) => (
                        <tr key={index}>
                          <td className="p-3 border-b border-gray-200 text-gray-600 flex items-center gap-2">
                            <Ruler className="w-4 h-4" /> {dim.label}
                          </td>
                          <td className="p-3 border-b border-gray-200 text-gray-600">{dim.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Questions */}
              <div className="mt-8">
                <h3 className="text-lg mb-2.5 text-gray-800">Saiba mais sobre o produto</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Pergunte sobre uso, informações técnicas e outros abaixo
                </p>
                <div className="flex gap-2.5">
                  <input
                    type="text"
                    placeholder="O que quer saber?"
                    className="flex-1 p-3 border border-gray-200 rounded text-sm outline-none focus:border-primary"
                  />
                  <button className="px-5 py-3 bg-primary text-white border-none rounded cursor-pointer text-sm hover:bg-primary-dark transition-colors flex items-center gap-2">
                    <Bell className="w-4 h-4" /> Perguntar
                  </button>
                </div>
              </div>
            </div>

            {/* Purchase Box */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 h-fit sticky top-5 lg:sticky md:static">
              <div className="mb-5 pb-5 border-b border-gray-200">
                <p className="text-xs text-gray-600 mb-2.5 flex items-center gap-1 flex-wrap">
                  Preço exclusivo: <MapPin className="w-3 h-3" /> <strong>Praia Grande</strong>{' '}
                  <a href="#" className="text-primary underline ml-1">
                    alterar localização
                  </a>
                </p>
                <div className="flex gap-2.5 items-center mb-2.5">
                  <div className="inline-block bg-primary text-white px-3 py-1 rounded text-xs font-bold">
                    À Varejo
                  </div>
                  {productData.isOnDiscount && (
                    <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">
                      Max por Menos
                    </div>
                  )}
                </div>
                {productData.originalPrice && (
                  <p className="text-sm text-gray-500 mb-2.5 line-through">
                    {formatPrice(productData.originalPrice)}
                  </p>
                )}
                <p className="text-3xl md:text-2xl font-bold text-gray-900 my-2.5">
                  {formatPrice(productData.price)}
                  <span className="text-sm text-gray-600 font-normal">/{productData.unit || 'un'}</span>
                </p>
                {productData.installmentPrice && (
                  <p className="text-sm text-gray-600 mb-2.5">
                    ou em até 12x de {formatPrice(productData.installmentPrice)}
                  </p>
                )}
                <a href="#" className="text-[13px] text-primary underline">
                  Ver opções de pagamento
                </a>
              </div>

              <div className="mb-5 pb-5 border-b border-gray-200">
                <p className="text-sm text-gray-600 mb-2.5 flex items-center gap-2">
                  <Truck className="w-4 h-4" /> Para entrega: <strong>{productData.stock || 100} {productData.unit || 'un'}</strong>
                </p>
                <button className="w-full py-2.5 bg-white border-2 border-primary text-primary rounded cursor-pointer text-sm font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                  <Package className="w-4 h-4" /> Ver estoque das lojas
                </button>
              </div>

              <div className="grid grid-cols-[auto_1fr_auto_auto] gap-2.5 items-center mb-5 p-4 bg-white rounded">
                <button
                  onClick={decreaseQty}
                  className="w-9 h-9 bg-gray-100 border-none rounded cursor-pointer flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                  className="w-16 p-2 border border-gray-200 rounded text-center text-base font-bold"
                />
                <span className="text-sm text-gray-600">{productData.unit || 'un'}</span>
                <button
                  onClick={increaseQty}
                  className="w-9 h-9 bg-gray-100 border-none rounded cursor-pointer flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <div className="col-span-4 flex justify-between items-center mt-2.5 pt-2.5 border-t border-gray-200">
                  <span className="text-sm text-gray-600 flex items-center gap-1">
                    <DollarSign className="w-4 h-4" /> Valor total
                  </span>
                  <strong className="text-xl text-gray-900">{formatPrice(totalPrice)}</strong>
                </div>
              </div>

              <div className="bg-white p-4 rounded mb-5">
                <p className="m-0 text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                  <Package className="w-4 h-4 mt-0.5" />
                  <span>
                    Na embalagem
                    <br />
                    <strong>{productData.packageQty || 1} unidade</strong>
                  </span>
                </p>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full py-5 bg-primary text-white border-none text-lg font-bold cursor-pointer mb-5 hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" /> Adicionar ao carrinho
              </button>

              <div className="pt-5 border-t border-gray-200">
                <h4 className="text-base mb-4 text-gray-800">Calcule o frete</h4>
                <div className="flex gap-2.5 mb-2.5">
                  <input
                    type="text"
                    placeholder="CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    maxLength={9}
                    className="flex-1 p-3 border border-gray-200 rounded text-sm outline-none focus:border-primary"
                  />
                  <button
                    onClick={handleCheckCep}
                    className="px-5 py-3 bg-primary text-white border-none rounded cursor-pointer text-sm font-bold hover:bg-primary-dark transition-colors"
                  >
                    Consultar
                  </button>
                </div>
                <a href="#" className="text-xs text-primary underline block mb-4 flex items-center gap-1">
                  Não sei meu CEP <LinkIcon className="w-3 h-3" />
                </a>
                {cepChecked ? (
                  <div className="bg-green-50 border border-green-500 p-3 rounded text-[13px] text-green-700 mb-2.5 flex items-start gap-2">
                    <Truck className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block mb-1">Frete Grátis</strong>
                      <span>Entrega grátis para o CEP {cep}</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#fff3cd] border border-[#ffc107] p-3 rounded text-[13px] text-[#856404] mb-2.5 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Informe um CEP disponível acima para verificar opções de frete.</span>
                  </div>
                )}
                <a href="#" className="text-[13px] text-primary underline">
                  Ver mais informações
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
