"use client";

import { useState } from "react";

import { montserrat } from "@/app/fonts";
import ProductGrid from "@/components/ProductGrid";
import { flowerTypeOptions, products } from "@/data/products";
import type { FlowerType } from "@/data/products";

type ProductFilter = "all" | FlowerType;
type ProductSort = "price-asc" | "price-desc" | "name-asc";

const productFilterOptions: { id: ProductFilter; label: string }[] = [
  { id: "all", label: "ALL PRODUCTS" },
  ...flowerTypeOptions,
];

const productSortOptions: { id: ProductSort; label: string }[] = [
  { id: "price-asc", label: "PRICE ASC" },
  { id: "price-desc", label: "PRICE DESC" },
  { id: "name-asc", label: "NAME A-Z" },
];

const getPriceValue = (price: string) => Number(price.replace(/[^\d.]/g, ""));

export default function ProductCatalog() {
  const [activeFilter, setActiveFilter] = useState<ProductFilter>("all");
  const [activeSort, setActiveSort] = useState<ProductSort>("name-asc");
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const activeOption =
    productFilterOptions.find((option) => option.id === activeFilter) ??
    productFilterOptions[0];
  const activeSortOption =
    productSortOptions.find((option) => option.id === activeSort) ??
    productSortOptions[0];
  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.flowerType === activeFilter);
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (activeSort === "price-asc") {
      return getPriceValue(a.price) - getPriceValue(b.price);
    }

    if (activeSort === "price-desc") {
      return getPriceValue(b.price) - getPriceValue(a.price);
    }

    return a.name.localeCompare(b.name);
  });

  return (
    <div className={`${montserrat.className} text-[#2B2B2B]`}>
      <div className="flex items-start justify-center gap-5 min-[501px]:gap-8">
        <div className="relative inline-block text-left text-[0.66rem] font-bold tracking-[0.1em] min-[501px]:text-xs">
          <button
            type="button"
            aria-expanded={isFilterDropdownOpen}
            aria-haspopup="listbox"
            onClick={() => {
              setIsFilterDropdownOpen((open) => !open);
              setIsSortDropdownOpen(false);
            }}
            className="flex items-center gap-2 border-b-2 border-[#d4516c] pb-1 uppercase text-[#2B2B2B] transition-colors hover:text-[#d4516c]"
          >
            {activeOption.label}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className={`size-3.5 transition-transform ${
                isFilterDropdownOpen ? "rotate-180" : ""
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

          {isFilterDropdownOpen && (
            <div
              role="listbox"
              aria-label="Product filter"
              className="absolute left-1/2 z-30 mt-3 w-52 -translate-x-1/2 border border-[#f0cbd2] bg-white py-2 text-[0.64rem] font-bold uppercase tracking-[0.14em] shadow-[0_10px_24px_rgba(43,43,43,0.08)]"
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
                      setIsFilterDropdownOpen(false);
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

        <div className="relative inline-block text-left text-[0.6rem] font-bold tracking-[0.1em] min-[501px]:text-[0.68rem]">
          <button
            type="button"
            aria-expanded={isSortDropdownOpen}
            aria-haspopup="listbox"
            onClick={() => {
              setIsSortDropdownOpen((open) => !open);
              setIsFilterDropdownOpen(false);
            }}
            className="flex items-center gap-1.5 uppercase text-black/65 transition-colors hover:text-[#d4516c]"
          >
            SORT: {activeSortOption.label}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className={`size-3.5 transition-transform ${
                isSortDropdownOpen ? "rotate-180" : ""
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

          {isSortDropdownOpen && (
            <div
              role="listbox"
              aria-label="Product sort"
              className="absolute left-1/2 z-20 mt-3 w-52 -translate-x-1/2 border border-[#f0cbd2] bg-white py-2 text-[0.64rem] font-bold uppercase tracking-[0.14em] shadow-[0_10px_24px_rgba(43,43,43,0.08)]"
            >
              {productSortOptions.map((option) => {
                const isActive = activeSort === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveSort(option.id);
                      setIsSortDropdownOpen(false);
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
      </div>

      <ProductGrid
        products={sortedProducts}
        gridClassName="min-[501px]:mt-10 min-[501px]:grid-cols-3 min-[501px]:gap-x-6 min-[501px]:gap-y-9 min-[1025px]:grid-cols-4 min-[1025px]:gap-x-8 min-[1025px]:gap-y-10"
        imageSizes="(max-width: 500px) 45vw, (max-width: 1024px) 30vw, 260px"
      />
    </div>
  );
}
