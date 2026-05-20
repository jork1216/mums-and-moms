import type { Metadata } from "next";

import { montserrat } from "@/app/fonts";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { allProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Products | Mums & Mom Flowershop",
  description: "Browse all products from Mums & Mom Flowershop.",
};

export default function ProductsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[500px] bg-[#FFFDFB]">
      <Navbar />

      <section className="px-5 pb-10 pt-10 text-center">
        <div className={`${montserrat.className} text-[#2B2B2B]`}>
          <div className="flex items-center justify-center text-[0.68rem] font-bold tracking-[0.12em]">
            <span className="border-b-2 border-[#d4516c] pb-1">
              ALL PRODUCTS
            </span>
          </div>

          <ProductGrid products={allProducts} />
        </div>
      </section>
    </main>
  );
}
