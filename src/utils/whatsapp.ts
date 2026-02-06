// Configuração do WhatsApp da loja
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

interface WhatsAppMessageParams {
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  unit?: string;
  sku?: string;
}

export function generateWhatsAppMessage({
  productName,
  quantity,
  unitPrice,
  totalPrice,
  unit = 'un',
  sku,
}: WhatsAppMessageParams): string {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const message = `
Olá! Gostaria de comprar o seguinte produto:

📦 *${productName}*
${sku ? `SKU: ${sku}\n` : ''}
🔢 Quantidade: ${quantity} ${unit}
💵 Preço unitário: ${formatPrice(unitPrice)}
💰 *Valor Total: ${formatPrice(totalPrice)}*

Gostaria de mais informações sobre este produto e formas de pagamento.
  `.trim();

  return encodeURIComponent(message);
}

export function openWhatsApp(message: string): void {
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(whatsappURL, '_blank');
}

export function sendProductToWhatsApp(params: WhatsAppMessageParams): void {
  const message = generateWhatsAppMessage(params);
  openWhatsApp(message);
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
}

export function generateCartWhatsAppMessage(items: CartItem[]): string {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const productsText = items
    .map(
      (item, index) =>
        `${index + 1}. 📦 *${item.name}*
   Quantidade: ${item.quantity} ${item.unit}
   Preço unitário: ${formatPrice(item.price)}
   Subtotal: ${formatPrice(item.price * item.quantity)}`
    )
    .join('\n\n');

  const message = `
Olá! Gostaria de comprar os seguintes produtos:

${productsText}

💰 *VALOR TOTAL: ${formatPrice(totalPrice)}*

Gostaria de mais informações sobre formas de pagamento e entrega.
  `.trim();

  return encodeURIComponent(message);
}

export function sendCartToWhatsApp(items: CartItem[]): void {
  const message = generateCartWhatsAppMessage(items);
  openWhatsApp(message);
}
