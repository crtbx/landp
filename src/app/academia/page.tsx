import Link from 'next/link';
import { Home, GraduationCap, Users, Award, Calendar } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Curso de Instalações Elétricas',
    description: 'Aprenda técnicas profissionais de instalação elétrica residencial e comercial',
    duration: '40 horas',
    level: 'Básico ao Intermediário',
    image: '⚡',
  },
  {
    id: 2,
    title: 'Curso de Pintura Profissional',
    description: 'Domine as técnicas de pintura, textura e acabamento',
    duration: '32 horas',
    level: 'Básico',
    image: '🎨',
  },
  {
    id: 3,
    title: 'Curso de Alvenaria e Construção',
    description: 'Fundamentos da construção civil, desde a fundação até o acabamento',
    duration: '60 horas',
    level: 'Básico ao Avançado',
    image: '🧱',
  },
  {
    id: 4,
    title: 'Curso de Hidráulica Residencial',
    description: 'Instalação e manutenção de sistemas hidráulicos',
    duration: '36 horas',
    level: 'Intermediário',
    image: '🚰',
  },
];

export default function AcademiaPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200 text-sm">
        <div className="max-w-[1400px] mx-auto px-5 flex items-center gap-2 flex-wrap">
          <Link href="/" className="text-gray-600 no-underline hover:text-primary">
            <Home className="w-5 h-5" />
          </Link>
          <span className="text-gray-400"> &gt; </span>
          <span className="text-gray-400">Academia de Profissionais</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-orange-600 text-white">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap className="w-16 h-16" />
            <div>
              <h1 className="text-4xl md:text-3xl font-bold mb-2">Academia de Profissionais</h1>
              <p className="text-xl opacity-90">Capacitação profissional na construção civil</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl">
            Desenvolvemos profissionais qualificados através de cursos práticos e teóricos ministrados por especialistas do mercado.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Por que estudar na Academia Obramax?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Instrutores Experientes</h3>
              <p className="text-gray-600">Profissionais com anos de experiência no mercado</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Certificação Reconhecida</h3>
              <p className="text-gray-600">Certificados válidos em todo território nacional</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Horários Flexíveis</h3>
              <p className="text-gray-600">Turmas nos períodos manhã, tarde e noite</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Nossos Cursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{course.image}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex gap-4 text-sm text-gray-500 mb-4">
                  <span>⏱️ {course.duration}</span>
                  <span>📊 {course.level}</span>
                </div>
                <button className="w-full py-3 bg-primary text-white rounded font-bold hover:bg-primary-dark transition-colors">
                  Inscreva-se
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-[1400px] mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-4">Invista em sua carreira profissional</h2>
          <p className="text-xl mb-8 opacity-90">Entre em contato e saiba mais sobre nossas turmas</p>
          <button className="px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary-dark transition-colors">
            Fale Conosco
          </button>
        </div>
      </section>
    </div>
  );
}
