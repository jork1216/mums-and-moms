import Image from "next/image";

import type { Product } from "@/data/products";

type ProductGridProps = {
  products: Product[];
  gridClassName?: string;
  imageSizes?: string;
};

export default function ProductGrid({
  products,
  gridClassName = "",
  imageSizes = "(max-width: 500px) 45vw, 220px",
}: ProductGridProps) {
  return (
    <div className={`mt-7 grid grid-cols-2 gap-x-5 gap-y-7 ${gridClassName}`}>
      {products.map((product) => (
        <article key={product.id} className="text-center">
          <div className="relative aspect-[1/1.32] overflow-hidden bg-[#fdf3f3]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes={imageSizes}
              className="scale-[1.28] object-contain"
            />
          </div>

          <h3 className="mx-auto mt-4 min-h-10 max-w-40 text-[0.95rem] font-medium leading-5">
            {product.name}
          </h3>
          <p className="mb-2 text-[1rem] font-extrabold text-[#d4516c]">
            {product.price}
          </p>
        </article>
      ))}
    </div>
  );
}
