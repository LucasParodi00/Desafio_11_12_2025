import { IProduct } from "../types/product.types";

export const productService = {
  findAll: async (): Promise<IProduct[]> => {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Ocurrio un error : ${err} `);
    }

    return response.json() as Promise<IProduct[]>;
  },

  findOne: async (id: string): Promise<IProduct> => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const err: string = await response.text();
      throw new Error(`Error interno. - ${err}`);
    }

    return response.json() as Promise<IProduct>;
  },
};
