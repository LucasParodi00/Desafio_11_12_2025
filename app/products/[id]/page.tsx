"use client";

import { ProductDetail } from "@/feature/productos/componets/ProductDetail";
import { useParams } from "next/navigation";

export default function ProductPage() {
  // 1. Next.js App Router nos da el ID así
  const params = useParams();
  const id = params.id as string; // Aseguramos que sea string

  return (
    <main className="min-h-screen bg-white">
      {/* 2. Renderizamos el componente pasándole solo el ID */}
      <ProductDetail productId={id} />
    </main>
  );
}
