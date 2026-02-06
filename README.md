# Obramax - E-commerce de Materiais de Construção

Site de e-commerce moderno construído com **Next.js 16**, **React 19**, **TypeScript** e **Tailwind CSS**.

## 🚀 Tecnologias

- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS 3** - Framework CSS utilitário
- **Next.js Image** - Otimização automática de imagens
- **Context API** - Gerenciamento de estado do carrinho

## 🎨 Características

- ✅ **Tailwind CSS** - Todas as classes utilitárias
- ✅ **Next.js Image** - Componente otimizado para imagens
- ✅ **Dados Centralizados** - Arquivo único para produtos
- ✅ **Imagens SVG** - Imagens vetoriais na pasta `/public`
- ✅ **Cor Customizada** - Laranja #ffaa00
- ✅ **Carrinho Funcional** - Context API + localStorage
- ✅ **Design Responsivo** - Mobile, Tablet, Desktop
- ✅ **TypeScript** - Código 100% tipado

## 📦 Funcionalidades

- Homepage com slider de banners
- Navegação por departamentos
- Catálogo de produtos
- Página de produto detalhada
- Carrinho de compras funcional
- Adicionar/remover produtos
- Persistência no localStorage

## 📂 Estrutura do Projeto

```
landp/
├── public/
│   └── images/
│       ├── banners/         # Banners do slider (SVG)
│       │   ├── banner-1.svg
│       │   ├── banner-2.svg
│       │   └── banner-3.svg
│       └── products/        # Imagens de produtos (SVG)
│           ├── telha-colonial.svg
│           ├── telha-fibrocimento.svg
│           ├── telha-ceramica.svg
│           ├── telha-plastica.svg
│           ├── telha-romana.svg
│           ├── telha-metalica.svg
│           ├── telha-shingle.svg
│           └── telha-transparente.svg
├── src/
│   ├── app/                 # Páginas Next.js (App Router)
│   │   ├── layout.tsx
│   │   ├── page.tsx         # Homepage
│   │   ├── globals.css      # Tailwind directives
│   │   └── product/[id]/
│   │       └── page.tsx     # Página de produto dinâmica
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── CartModal.tsx
│   │   ├── HeroSlider.tsx
│   │   ├── Departments.tsx
│   │   └── ProductCard.tsx
│   ├── contexts/            # Context API
│   │   └── CartContext.tsx
│   └── data/               # Dados centralizados
│       └── products.ts     # Produtos e banners
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Como Executar

### Instalar dependências
```bash
pnpm install
```

### Rodar em desenvolvimento
```bash
pnpm dev
```

Acesse: **http://localhost:3000**

### Build para produção
```bash
pnpm build
pnpm start
```

## 🎨 Paleta de Cores

- **Primary**: `#ffaa00` - Laranja principal
- **Primary Dark**: `#e69900` - Hover states
- **Primary Light**: `#ffbb33` - Variações

## 📝 Configuração Tailwind

```ts
// tailwind.config.ts
colors: {
  primary: '#ffaa00',
  'primary-dark': '#e69900',
  'primary-light': '#ffbb33',
}
```

## 🖼️ Uso de Imagens

### Next.js Image Component

```tsx
import Image from 'next/image';

<Image
  src="/images/products/telha-colonial.svg"
  alt="Telha Colonial"
  fill
  className="object-cover"
/>
```

### Dados Centralizados

```ts
// src/data/products.ts
import { products } from '@/data/products';

products.map((product) => (
  <ProductCard key={product.id} {...product} />
))
```

## 🛒 Carrinho de Compras

```tsx
import { useCart } from '@/contexts/CartContext';

const { addItem, removeItem, items, totalPrice } = useCart();

addItem({
  id: '1',
  name: 'Produto',
  price: 100,
  image: '/images/product.svg',
  quantity: 1,
});
```

## 🔄 Adicionar Novos Produtos

Edite o arquivo [`src/data/products.ts`](src/data/products.ts):

```ts
export const products: Product[] = [
  {
    id: '9',
    name: 'Novo Produto',
    price: 99.90,
    image: '/images/products/novo-produto.svg',
    rating: 5,
    unit: 'un',
  },
  // ...
];
```

## 📸 Adicionar Novas Imagens

1. Crie um arquivo SVG em `/public/images/products/`
2. Referencie em `products.ts` como `/images/products/seu-arquivo.svg`
3. O Next.js otimizará automaticamente!

## 🚀 Próximos Passos

- [ ] Integração com backend/API
- [ ] Sistema de autenticação
- [ ] Filtros e busca de produtos
- [ ] Checkout e pagamento
- [ ] Painel administrativo
- [ ] Reviews de produtos
- [ ] Wishlist

## 📄 Licença

Projeto de demonstração criado para fins educacionais.

---

**Desenvolvido com Next.js 16 + Tailwind CSS 3** 🎨
# landp
