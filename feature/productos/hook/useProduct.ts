"use client";

import { useEffect, useState } from "react";
import { IProduct } from "../types/product.types"; // Asegúrate que esta ruta sea correcta
import { productService } from "../services/product.services"; // Asegúrate que esta ruta sea correcta

export const useFindAll = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await productService.findAll();
        setData(data);
      } catch (err: any) {
        setError(`Ocurrio un error interno - ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

// CORREGIDO: Ahora recibe el ID como parámetro
export const useFindOneProduct = (id: string | number) => {
  const [data, setData] = useState<IProduct | null>(null); // Inicializa como null, no array vacío
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      setError(""); // Limpiar errores previos
      try {
        // Convertimos a string por seguridad
        const productData = await productService.findOne(String(id));
        setData(productData);
      } catch (err: any) {
        setError(`Ocurrio un error interno - ${err}`);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // Se ejecuta cada vez que cambia el ID

  return {
    product: data, // Renombramos 'data' a 'product' para mayor claridad
    loading,
    error,
  };
};
