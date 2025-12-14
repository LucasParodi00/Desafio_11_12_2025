"use client";

import { useCart } from "@/feature/cart/hook/useCart"; // Revisa esta ruta
import { LoadingData } from "@/lib/components/common/LoadingData"; // Revisa esta ruta
import { useState } from "react";
import { useFindOneProduct } from "../hook/useProduct"; // Asegúrate de importar el hook corregido

interface ProductDetailProps {
  productId: string | number;
}

export const ProductDetail = ({ productId }: ProductDetailProps) => {
  const { product, loading, error } = useFindOneProduct(productId);

  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  // 2. Manejo de estados de carga
  if (loading) return <LoadingData />;

  // 3. Manejo de error o producto vacío
  if (error || !product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Producto no encontrado
        </h2>
        <p className="text-gray-500">
          {error
            ? error
            : `Parece que el ID ${productId} no existe en nuestro catálogo.`}
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-4 text-indigo-600 font-medium hover:underline"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  // 4. Lógica visual (UI)
  const handleAddToCart = () => {
    setIsAdding(true);
    // TypeScript ya sabe que product no es null aquí
    addToCart(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  const renderStars = (rate: number) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-5 h-5 ${
          star <= Math.round(rate) ? "text-yellow-400" : "text-gray-200"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white min-h-[80vh] py-12 animate-fadeIn">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8 uppercase tracking-wide font-medium">
          Catálogo / {product.category} /{" "}
          <span className="text-slate-900 font-bold">
            {product.title.substring(0, 20)}...
          </span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* IMAGEN (Sticky) */}
          <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-center border border-gray-100 md:sticky md:top-24 shadow-sm group">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-md h-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* INFO & ACCIONES */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex items-center gap-1">
                <div className="flex">{renderStars(product.rating.rate)}</div>
                <span className="text-gray-400 text-sm ml-2">
                  ({product.rating.count} opiniones)
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              {product.title}
            </h1>

            <div className="text-4xl font-light text-slate-900">
              ${product.price}
            </div>

            <p className="text-gray-500 text-lg leading-relaxed border-t border-b border-gray-100 py-6">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`flex-1 py-4 px-8 rounded-xl font-bold text-lg transition-all transform active:scale-[0.98] shadow-lg
                  ${
                    isAdding
                      ? "bg-green-600 text-white shadow-green-200"
                      : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200"
                  }
                `}
              >
                {isAdding ? "¡Agregado!" : "Agregar al Carrito"}
              </button>
            </div>

            {/* Garantías de confianza */}
            <div className="grid grid-cols-2 gap-4 pt-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span>🚚 Envío Express</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🛡️ Garantía Lumina</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
