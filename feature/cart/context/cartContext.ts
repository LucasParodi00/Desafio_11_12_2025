"use client";
import { createContext } from "react";
import { ICart } from "@/feature/type/cart.type";
import { IProduct } from "@/feature/productos/types/product.types";

interface CartContextType {
  cart: ICart[];
  addToCart: (product: IProduct) => void;
  // Cambiamos a recibir solo el ID, es más limpio
  removeFromCart: (id: number) => void;
  totalItems: number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
