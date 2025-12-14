import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../types/product.types";
import { formatPrice } from "@/lib/utils/formatPrice";
import { renderStars } from "@/lib/utils/renderStars";
import { useCart } from "@/feature/cart/hook/useCart";

interface IProductCard {
  product: IProduct;
}

export const ProductCard = ({ product }: IProductCard) => {
  const { id, title, price, description, category, image, rating } = product;
  const { rate, count } = rating;

  const { addToCart } = useCart();

  return (
    <div className="group relative flex w-full max-w-sm flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
      <span className="absolute left-3 top-3 z-10 rounded-full bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm capitalize">
        {category}
      </span>

      <Link
        href={`/products/${id}`}
        className="relative block h-64 overflow-hidden bg-gray-100"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3">
          <Link href={`/products/${id}`}>
            <h3 className="text-lg font-bold text-gray-900 line-clamp-1 hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </Link>
          <div className="mt-1 flex items-center gap-2">
            {renderStars(rate)}
            <span className="text-xs text-gray-500">({count} reviews)</span>
          </div>
        </div>

        <p className="mb-4 text-sm text-gray-500 line-clamp-2 flex-1">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(price)}
          </span>

          <button
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart size={18} />
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};
