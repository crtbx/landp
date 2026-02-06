export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  unit?: string;
  brand?: string;
  sku?: string;
  installmentPrice?: number;
  stock?: number;
  packageQty?: number;
  images?: string[];
  features?: Array<{
    icon: string;
    title: string;
    value: string;
  }>;
  dimensions?: Array<{
    label: string;
    value: string;
  }>;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Telha Colonial PVC Marrom 3,28x0,88m Lux Telhas',
    price: 122.46,
    image: '/images/products/telha-colonial.webp',
    rating: 5,
    unit: 'un',
    brand: 'LUX TELHAS',
    sku: '89396482',
    installmentPrice: 11.42,
    stock: 234,
    packageQty: 1,
    images: [
      '/images/products/telha-colonial.webp',
      '/images/products/telha-colonial.webp',
      '/images/products/telha-colonial.webp',
      '/images/products/telha-colonial.webp',
    ],
    features: [
      { icon: '📦', title: 'Tipo de material', value: 'PVC' },
      { icon: '🏗️', title: 'Material', value: 'PVC' },
      { icon: '📏', title: 'Espessura', value: '1,1 mm' },
      { icon: '🏠', title: 'Acabamento', value: 'Terracota' },
    ],
    dimensions: [
      { label: 'Altura', value: '5 cm' },
      { label: 'Largura', value: '88 cm' },
      { label: 'Comprimento', value: '328 cm' },
      { label: 'Peso', value: '10.5 kg' },
    ],
  },
  {
    id: '2',
    name: 'Telha Fibrocimento Ondulada 2,44x1,10m',
    price: 89.90,
    image: '/images/products/telha-ondulada-fibrocimento-webp.webp',
    rating: 4,
    unit: 'un',
  },
  {
    id: '3',
    name: 'Telha Plan Sanduíche Térmica',
    price: 145.00,
    image: '/images/products/telha-plan.webp',
    rating: 5,
    unit: 'un',
  },
  {
    id: '4',
    name: 'Telha Sanduíche Isotérmica 6m',
    price: 189.90,
    image: '/images/products/telha-sanduiche.webp',
    rating: 5,
    unit: 'un',
  },
  {
    id: '5',
    name: 'Telha Trapezoidal Metálica Galvanizada',
    price: 98.50,
    image: '/images/products/trapezodial-metalica.webp',
    rating: 4,
    unit: 'un',
  },
  {
    id: '6',
    name: 'Argamassa AC3 Cinza 20kg',
    price: 24.90,
    image: '/images/products/argamassa.webp',
    rating: 5,
    unit: 'sc',
  },
  {
    id: '7',
    name: 'Manta Líquida Impermeabilizante 18L',
    price: 159.90,
    image: '/images/products/manta-liquida.webp',
    rating: 5,
    unit: 'bd',
  },
];

export const banners = [
  {
    id: 1,
    image: '/images/banners/banner-1.webp',
    alt: 'Banner Obramax 1',
  },
  {
    id: 2,
    image: '/images/banners/banner-2.webp',
    alt: 'Banner Obramax 2',
  },
  {
    id: 3,
    image: '/images/banners/banner-3.webp',
    alt: 'Banner Obramax 3',
  },
  {
    id: 4,
    image: '/images/banners/banner-4.webp',
    alt: 'Banner Obramax 4',
  },
  {
    id: 5,
    image: '/images/banners/banner-5.webp',
    alt: 'Banner Obramax 5',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
