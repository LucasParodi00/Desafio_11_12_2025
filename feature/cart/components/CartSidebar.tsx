"use client";

import { useCart } from "@/feature/cart/hook/useCart";
import { useEffect, useState } from "react";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { cart, removeFromCart } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  // Evita problemas de hidratación
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calcular el total
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  if (!isMounted) return null;

  return (
    <>
      {/* 1. Overlay Oscuro (Fondo) */}
      <div
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* 2. Panel Deslizante (Sidebar) */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* HEADER */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-slate-900">
              Tu Carrito ({cart.length})
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
            >
              ✕ {/* O usa un ícono SVG de X */}
            </button>
          </div>

          {/* BODY (Lista de productos) */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="text-6xl">🛍️</div>
                <p className="text-gray-500 font-medium">
                  Tu carrito está vacío.
                </p>
                <button
                  onClick={onClose}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Volver a la tienda
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 animate-fadeIn">
                  {/* Imagen Miniatura */}
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain p-2"
                    />
                  </div>

                  {/* Info del Item */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Cant: {item.count} x ${item.price}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-slate-900">
                        ${(item.price * item.count).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-500 font-medium hover:text-red-700 underline"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* FOOTER (Checkout) */}
          {cart.length > 0 && (
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-base font-medium text-slate-600">
                  Subtotal
                </span>
                <span className="text-2xl font-bold text-slate-900">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-[0.98] transition-all">
                Finalizar Compra
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">
                Envío calculado en el checkout.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
