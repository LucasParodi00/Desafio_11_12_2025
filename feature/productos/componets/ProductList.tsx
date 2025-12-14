import { LoadingData } from "@/lib/components/common/LoadingData";
import { useFindAll } from "../hook/useProduct";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const { loading, data, error } = useFindAll();

  if (loading) {
    return <LoadingData />;
  }

  if (error) {
    return <p>Errro {error}</p>;
  }

  return (
    <div className="w-full">
      <h1 className="text-5xl py-5 font-extralight">Productos</h1>

      <div className="grid grid-cols-4 gap-5">
        {data.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};
