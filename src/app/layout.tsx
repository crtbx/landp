import type { Metadata } from 'next';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import CartModal from '@/components/CartModal';
import './globals.css';

export const metadata: Metadata = {
  title: 'Obramax - Atacado de Construção',
  description: 'Materiais de construção com os melhores preços',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
          <Header />
          <CartModal />
          <main className="min-h-[calc(100vh-200px)]">{children}</main>
          <footer className="bg-gray-800 text-white pt-16 pb-8 mt-20">
            <div className="max-w-[1400px] mx-auto px-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                <div>
                  <h3 className="text-2xl text-primary mb-2.5">OBRAMAX</h3>
                  <p className="text-xs text-gray-300">Atacado de Construção</p>
                </div>
                <div>
                  <h4 className="text-lg mb-4">Atendimento</h4>
                  <ul className="list-none p-0">
                    <li className="mb-2.5">
                      <a href="#" className="text-gray-300 no-underline text-sm hover:text-primary transition-colors">
                        Central de Ajuda
                      </a>
                    </li>
                    <li className="mb-2.5">
                      <a href="#" className="text-gray-300 no-underline text-sm hover:text-primary transition-colors">
                        Fale Conosco
                      </a>
                    </li>
                    <li className="mb-2.5">
                      <a href="#" className="text-gray-300 no-underline text-sm hover:text-primary transition-colors">
                        Trocas e Devoluções
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg mb-4">Institucional</h4>
                  <ul className="list-none p-0">
                    <li className="mb-2.5">
                      <a href="#" className="text-gray-300 no-underline text-sm hover:text-primary transition-colors">
                        Sobre a Obramax
                      </a>
                    </li>
                    <li className="mb-2.5">
                      <a href="#" className="text-gray-300 no-underline text-sm hover:text-primary transition-colors">
                        Trabalhe Conosco
                      </a>
                    </li>
                    <li className="mb-2.5">
                      <a href="#" className="text-gray-300 no-underline text-sm hover:text-primary transition-colors">
                        Política de Privacidade
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-center pt-8 border-t border-gray-600 text-gray-400 text-sm">
                © 2026 Obramax - Todos os direitos reservados
              </p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
