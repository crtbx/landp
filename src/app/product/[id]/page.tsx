import { products, getProductById } from '@/data/products';
import ProductPageClient from './ProductPageClient';

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productData = getProductById(id) || getProductById('1')!;

  return <ProductPageClient productData={productData} />;
}
