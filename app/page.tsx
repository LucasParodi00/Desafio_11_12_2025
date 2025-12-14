import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION: Impacto Visual */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        {/* Fondo abstracto con gradientes animados */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium mb-6 tracking-wide">
            🚀 Envíos gratis a todo el país desde $50.000
          </span>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            LUMINA <br /> STORE
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
            Tecnología, moda y accesorios en un solo lugar. Calidad premium
            curada para tu estilo de vida moderno.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products" // Asumiendo que esta es tu ruta de productos
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:scale-105 active:scale-95"
            >
              Ver Catálogo Completo
            </Link>
            <button className="px-8 py-4 bg-transparent border border-gray-700 hover:border-white text-white rounded-full font-bold text-lg transition-all">
              Conocer más
            </button>
          </div>
        </div>
      </section>

      {/* 2. CATEGORÍAS (Bento Grid Style) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">
                Explora por Categoría
              </h2>
              <p className="text-gray-500">
                Todo lo que necesitas, organizado para ti.
              </p>
            </div>
            <Link
              href="/products"
              className="text-indigo-600 font-semibold hover:underline mt-4 md:mt-0"
            >
              Ver todo &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[500px]">
            {/* Card Grande - Tecnología */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl bg-black">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                alt="Tecnología"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-1">
                  Tecnología
                </h3>
                <p className="text-gray-300 text-sm">
                  Lo último en gadgets y setups.
                </p>
              </div>
            </div>

            {/* Card Mediana - Moda Hombre */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl bg-black">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
                alt="Moda"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Moda</h3>
              </div>
            </div>

            {/* Card Mediana - Joyería */}
            <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-2xl bg-black">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop"
                alt="Joyería"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Accesorios</h3>
                <p className="text-gray-300 text-sm">Detalles que importan.</p>
              </div>
            </div>

            {/* Card Pequeña - Extras */}
            <div className="md:col-span-1 md:row-span-1 bg-indigo-600 rounded-2xl p-6 flex flex-col justify-center items-center text-center text-white cursor-pointer hover:bg-indigo-700 transition-colors">
              <span className="text-4xl mb-2">+</span>
              <span className="font-bold">Ver más</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST SECTION (Garantías) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
              🚀
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Envío Rápido
            </h3>
            <p className="text-gray-500 text-sm px-8">
              Recibe tus productos en 24/48 horas en las principales ciudades.
            </p>
          </div>
          <div>
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
              🛡️
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Garantía Asegurada
            </h3>
            <p className="text-gray-500 text-sm px-8">
              30 días para cambios o devoluciones sin preguntas extrañas.
            </p>
          </div>
          <div>
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
              💳
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Pagos Seguros
            </h3>
            <p className="text-gray-500 text-sm px-8">
              Aceptamos todas las tarjetas y plataformas de pago digital.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
