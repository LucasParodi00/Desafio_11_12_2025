"use client";
import { CartSidebar } from "@/feature/cart/components/CartSidebar";
import { useCart } from "@/feature/cart/hook/useCart";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href={"/"}>
            <div className="text-2xl font-black tracking-tighter text-slate-900 cursor-pointer">
              LUMINA
            </div>
          </Link>

          <div className=" flex flex-row gap-10 justify-center items-center">
            <Link href={"products"}>Productos</Link>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-slate-700 group-hover:text-indigo-600 transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 5.407c.49 2.1 1.054 4.106.51 5.438-.544 1.332-2.19 1.95-4.48 1.95H7.102c-2.29 0-3.937-.618-4.48-1.95-.544-1.332.02-3.338.51-5.438l1.263-5.407a1 1 0 0 1 .976-.77H14.777a1 1 0 0 1 .977.77Z"
                />
              </svg>

              {/* Badge Contador */}
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Renderizamos el Sidebar fuera del nav, pero controlado por el estado */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
