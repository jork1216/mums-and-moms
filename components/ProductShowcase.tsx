"use client";

import { useState } from "react";

import { montserrat } from "@/app/fonts";
import ProductGrid from "@/components/ProductGrid";
import { productSections } from "@/data/products";
import type { ProductTab } from "@/data/products";

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<ProductTab>("featured");
  const activeSection =
    productSections.find((section) => section.id === activeTab) ??
    productSections[0];

  return (
    <div className={`${montserrat.className} text-[#2B2B2B]`}>
      <div className="flex items-center justify-center gap-6 text-[0.68rem] font-bold tracking-[0.12em]">
        {productSections.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`border-b-2 pb-1 transition-colors ${
                isActive
                  ? "border-[#d4516c] text-[#2B2B2B]"
                  : "border-transparent text-black/45 hover:text-[#d4516c]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <ProductGrid
        products={activeSection.products}
        gridClassName="min-[501px]:grid-cols-3 min-[501px]:gap-x-6 min-[501px]:gap-y-9 min-[1025px]:gap-x-8"
        imageSizes="(max-width: 500px) 45vw, (max-width: 1024px) 30vw, 220px"
      />
    </div>
  );
}
