import Link from 'next/link';
import Image from 'next/image';
import { Home } from 'lucide-react';

const departments = [
  { id: 1, image: '/images/department/material.webp', name: 'Materiais de Construção', slug: 'materiais-de-construcao', description: 'Cimento, areia, tijolo e muito mais' },
  { id: 2, image: '/images/department/piso.webp', name: 'Pisos e Revestimentos', slug: 'pisos-e-revestimentos', description: 'Cerâmicas, porcelanatos e pisos laminados' },
  { id: 3, image: '/images/department/ar-condicionado.webp', name: 'Climatização e Ventilação', slug: 'climatizacao-e-ventilacao', description: 'Ar-condicionado, ventiladores e exaustores' },
  { id: 4, image: '/images/department/material-eletrico.webp', name: 'Materiais Elétricos', slug: 'materiais-eletricos', description: 'Fios, cabos, disjuntores e tomadas' },
  { id: 5, image: '/images/department/dry-wall.webp', name: 'Drywall e Steel-frame', slug: 'drywall-e-steel-frame', description: 'Placas, perfis e acessórios' },
  { id: 6, image: '/images/department/privada.webp', name: 'Banheiros e Acessórios', slug: 'banheiros-e-acessorios', description: 'Metais, louças e acessórios' },
  { id: 7, image: '/images/department/tintas.webp', name: 'Tintas e Acessórios', slug: 'tintas-e-acessorios', description: 'Tintas, pincéis, rolos e solventes' },
  { id: 8, image: '/images/department/portas.webp', name: 'Portas e Janelas', slug: 'portas-e-janelas', description: 'Portas, janelas e ferragens' },
  { id: 9, image: '/images/department/cameras.webp', name: 'Segurança', slug: 'seguranca', description: 'Câmeras, alarmes e cercas elétricas' },
  { id: 10, image: '/images/department/telhado.webp', name: 'Telhas e Calhas', slug: 'telhas-e-calhas', description: 'Telhas, calhas e rufos' },
];

export default function DepartamentosPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200 text-sm">
        <div className="max-w-[1400px] mx-auto px-5 flex items-center gap-2 flex-wrap">
          <Link href="/" className="text-gray-600 no-underline hover:text-primary">
            <Home className="w-5 h-5" />
          </Link>
          <span className="text-gray-400"> &gt; </span>
          <span className="text-gray-400">Todos os Departamentos</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-5">
          <h1 className="text-4xl md:text-3xl text-gray-800 mb-4 font-bold">Todos os Departamentos</h1>
          <p className="text-lg text-gray-600">Explore todos os nossos departamentos e encontre os melhores produtos para sua obra</p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-10">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <Link
                key={dept.id}
                href={`/category/${dept.slug}`}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 no-underline group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden relative bg-gray-100 flex-shrink-0">
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">
                      {dept.name}
                    </h2>
                    <p className="text-sm text-gray-600">{dept.description}</p>
                  </div>
                </div>
                <div className="text-sm text-primary font-medium">Ver produtos →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
