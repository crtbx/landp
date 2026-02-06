export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category?: string;
  unit?: string;
  brand?: string;
  sku?: string;
  installmentPrice?: number;
  stock?: number;
  packageQty?: number;
  description?: string;
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
    category: 'telhas-e-calhas',
    unit: 'un',
    brand: 'LUX TELHAS',
    sku: '89396482',
    installmentPrice: 11.42,
    stock: 234,
    packageQty: 1,
    description: 'Telha colonial em PVC de alta resistência, perfeita para coberturas residenciais que buscam o charme do estilo colonial com a praticidade e durabilidade do PVC. Resistente aos raios UV, não desbota, não trinca e oferece excelente isolamento termoacústico. Mais leve que as telhas de cerâmica tradicionais, facilita o manuseio e reduz a carga sobre a estrutura. Dispensa manutenção constante e possui vida útil superior a 15 anos.',
    images: [
      '/images/products/telha-colonial.webp',
      '/images/products/telha-colonial.webp',
      '/images/products/telha-colonial.webp',
      '/images/products/telha-colonial.webp',
    ],
    features: [
      { icon: 'package', title: 'Tipo de material', value: 'PVC' },
      { icon: 'construction', title: 'Material', value: 'PVC' },
      { icon: 'ruler', title: 'Espessura', value: '1,1 mm' },
      { icon: 'home', title: 'Acabamento', value: 'Terracota' },
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
    category: 'telhas-e-calhas',
    unit: 'un',
    brand: 'ETERNIT',
    sku: '78542693',
    installmentPrice: 8.38,
    stock: 156,
    packageQty: 1,
    description: 'Telha ondulada de fibrocimento de alta qualidade, ideal para coberturas residenciais, comerciais e industriais. Oferece excelente resistência às intempéries, durabilidade superior e ótimo custo-benefício. Fabricada em fibrocimento, proporciona isolamento térmico natural e é de fácil instalação.',
    features: [
      { icon: 'package', title: 'Tipo de material', value: 'Fibrocimento' },
      { icon: 'construction', title: 'Aplicação', value: 'Residencial e Comercial' },
      { icon: 'ruler', title: 'Espessura', value: '6 mm' },
      { icon: 'home', title: 'Acabamento', value: 'Natural' },
    ],
    dimensions: [
      { label: 'Comprimento', value: '244 cm' },
      { label: 'Largura', value: '110 cm' },
      { label: 'Espessura', value: '6 mm' },
      { label: 'Peso', value: '18 kg' },
    ],
  },
  {
    id: '3',
    name: 'Telha Plan Sanduíche Térmica',
    price: 145.00,
    image: '/images/products/telha-plan.webp',
    rating: 5,
    category: 'telhas-e-calhas',
    unit: 'un',
    brand: 'ISOPOR',
    sku: '92847561',
    installmentPrice: 13.52,
    stock: 89,
    packageQty: 1,
    description: 'Telha sanduíche térmica com núcleo de poliuretano expandido (EPS), ideal para projetos que exigem isolamento termoacústico superior. Perfeita para galpões industriais, frigoríficos, centros de distribuição e áreas que necessitam controle de temperatura. Estrutura em aço galvanizado com pintura eletrostática de alta durabilidade.',
    features: [
      { icon: 'package', title: 'Tipo', value: 'Sanduíche Térmica' },
      { icon: 'construction', title: 'Núcleo', value: 'Poliuretano (EPS)' },
      { icon: 'ruler', title: 'Espessura total', value: '30 mm' },
      { icon: 'home', title: 'Revestimento', value: 'Aço galvanizado pintado' },
    ],
    dimensions: [
      { label: 'Comprimento', value: '600 cm' },
      { label: 'Largura útil', value: '100 cm' },
      { label: 'Espessura', value: '30 mm' },
      { label: 'Peso', value: '8.5 kg/m²' },
    ],
  },
  {
    id: '4',
    name: 'Telha Sanduíche Isotérmica 6m',
    price: 189.90,
    image: '/images/products/telha-sanduiche.webp',
    rating: 5,
    category: 'telhas-e-calhas',
    unit: 'un',
    brand: 'METALPROF',
    sku: '64829173',
    installmentPrice: 17.71,
    stock: 45,
    packageQty: 1,
    description: 'Telha sanduíche isotérmica de 6 metros com excelente desempenho termoacústico. Composta por duas chapas de aço galvanizado pré-pintado com núcleo em poliestireno expandido (EPS) de alta densidade. Ideal para grandes vãos em coberturas industriais, comerciais e agrícolas. Reduz significativamente a transferência de calor e ruídos externos.',
    features: [
      { icon: 'package', title: 'Tipo', value: 'Isotérmica Premium' },
      { icon: 'construction', title: 'Núcleo', value: 'EPS Alta Densidade' },
      { icon: 'ruler', title: 'Espessura', value: '50 mm' },
      { icon: 'home', title: 'Comprimento', value: '6 metros' },
    ],
    dimensions: [
      { label: 'Comprimento', value: '600 cm' },
      { label: 'Largura útil', value: '98 cm' },
      { label: 'Espessura', value: '50 mm' },
      { label: 'Peso', value: '11 kg/m²' },
    ],
  },
  {
    id: '5',
    name: 'Telha Trapezoidal Metálica Galvanizada',
    price: 98.50,
    image: '/images/products/trapezodial-metalica.webp',
    rating: 4,
    category: 'telhas-e-calhas',
    unit: 'un',
    brand: 'BRASILIT',
    sku: '53719482',
    installmentPrice: 9.18,
    stock: 203,
    packageQty: 1,
    description: 'Telha metálica trapezoidal em aço galvanizado de alta resistência. Design moderno e versátil, ideal para coberturas industriais, comerciais, galpões e garagens. Oferece excelente relação custo-benefício, fácil instalação e grande resistência a cargas. Acabamento galvanizado protege contra corrosão e intempéries.',
    features: [
      { icon: 'package', title: 'Material', value: 'Aço Galvanizado' },
      { icon: 'construction', title: 'Perfil', value: 'Trapezoidal 40' },
      { icon: 'ruler', title: 'Espessura', value: '0.5 mm' },
      { icon: 'home', title: 'Acabamento', value: 'Galvanizado' },
    ],
    dimensions: [
      { label: 'Comprimento', value: '300 cm' },
      { label: 'Largura total', value: '100 cm' },
      { label: 'Largura útil', value: '95 cm' },
      { label: 'Peso', value: '4.8 kg/m²' },
    ],
  },
  {
    id: '6',
    name: 'Argamassa AC3 Cinza 20kg',
    price: 24.90,
    image: '/images/products/argamassa.webp',
    rating: 5,
    category: 'materiais-de-construcao',
    unit: 'sc',
    brand: 'QUARTZOLIT',
    sku: '41729583',
    installmentPrice: 2.32,
    stock: 587,
    packageQty: 1,
    description: 'Argamassa colante AC3 de uso externo e interno, ideal para assentamento de porcelanatos, cerâmicas e pedras naturais. Produto de alta aderência, resistente à umidade e variações térmicas. Formulação especial garante excelente trabalhabilidade e tempo em aberto prolongado. Indicada para áreas úmidas como banheiros, cozinhas e fachadas.',
    features: [
      { icon: 'package', title: 'Tipo', value: 'AC3 - Uso Externo' },
      { icon: 'construction', title: 'Aplicação', value: 'Porcelanatos e Cerâmicas' },
      { icon: 'ruler', title: 'Rendimento', value: '5 a 6 kg/m²' },
      { icon: 'home', title: 'Cor', value: 'Cinza' },
    ],
    dimensions: [
      { label: 'Peso líquido', value: '20 kg' },
      { label: 'Tempo em aberto', value: '20 minutos' },
      { label: 'Tempo de cura', value: '14 dias' },
      { label: 'Espessura da camada', value: '3 a 8 mm' },
    ],
  },
  {
    id: '7',
    name: 'Manta Líquida Impermeabilizante 18L',
    price: 159.90,
    image: '/images/products/manta-liquida.webp',
    rating: 5,
    category: 'materiais-de-construcao',
    unit: 'bd',
    brand: 'VEDACIT',
    sku: '29583746',
    installmentPrice: 14.91,
    stock: 124,
    packageQty: 1,
    description: 'Manta líquida impermeabilizante acrílica de alta elasticidade, ideal para impermeabilização de lajes, terraços, coberturas, banheiros e áreas úmidas. Forma uma película flexível e resistente que acompanha as movimentações da estrutura. Fácil aplicação com rolo, pincel ou trincha. Excelente aderência sobre concreto, argamassa e cerâmica. Resistente a raios UV e intempéries.',
    features: [
      { icon: 'package', title: 'Base', value: 'Acrílica' },
      { icon: 'construction', title: 'Aplicação', value: 'Lajes e Áreas Úmidas' },
      { icon: 'ruler', title: 'Rendimento', value: '0.8 a 1.2 kg/m²' },
      { icon: 'home', title: 'Cor', value: 'Branco/Terracota' },
    ],
    dimensions: [
      { label: 'Volume', value: '18 litros' },
      { label: 'Peso aproximado', value: '20 kg' },
      { label: 'Secagem ao toque', value: '2 horas' },
      { label: 'Cura total', value: '7 dias' },
    ],
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

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}
