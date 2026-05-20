"use client";

import { useState } from "react";

import { montserrat } from "@/app/fonts";
import ProductGrid from "@/components/ProductGrid";
import { flowerTypeOptions, products } from "@/data/products";
import type { FlowerType } from "@/data/products";

type ProductFilter = "all" | FlowerType;

const productFilterOptions: { id: ProductFilter; label: string }[] = [
  { id: "all", label: "ALL PRODUCTS" },
  ...flowerTypeOptions,
];

export default function ProductCatalog() {
  const [activeFilter, setActiveFilter] = useState<ProductFilter>("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const activeOption =
    productFilterOptions.find((option) => option.id === activeFilter) ??
    productFilterOptions[0];
  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.flowerType === activeFilter);

  return (
    <div className={`${montserrat.className} text-[#2B2B2B]`}>
      <div className="relative mx-auto inline-block text-left text-[0.68rem] font-bold tracking-[0.12em]">
        <button
          type="button"
          aria-expanded={isDropdownOpen}
          aria-haspopup="listbox"
          onClick={() => setIsDropdownOpen((open) => !open)}
          className="flex items-center gap-2 border-b-2 border-[#d4516c] pb-1 uppercase text-[#2B2B2B] transition-colors hover:text-[#d4516c]"
        >
          {activeOption.label}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={`size-3.5 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div
            role="listbox"
            aria-label="Product filter"
            className="absolute left-1/2 z-20 mt-3 w-52 -translate-x-1/2 border border-[#f0cbd2] bg-white py-2 text-[0.64rem] font-bold uppercase tracking-[0.14em] shadow-[0_10px_24px_rgba(43,43,43,0.08)]"
          >
            {productFilterOptions.map((option) => {
              const isActive = activeFilter === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveFilter(option.id);
                    setIsDropdownOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-2 text-left transition-colors hover:text-[#d4516c] ${
                    isActive ? "text-[#d4516c]" : "text-[#2B2B2B]"
                  }`}
                >
                  <span>{option.label}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className={`size-3.5 shrink-0 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <path
                      d="M5 12.5L9.5 17L19 7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                    />
                  </svg>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
