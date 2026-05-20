"use client";

import { useState } from "react";
import Image from "next/image";

import { montserrat } from "@/app/fonts";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

type ProductTab = "featured" | "latest";

type ProductSection = {
  id: ProductTab;
  label: string;
  products: Product[];
};

const mockProductSections: ProductSection[] = [
  {
    id: "featured",
    label: "FEATURED PRODUCTS",
    products: [
      {
        id: "featured-1",
        name: "Featured Product 1",
        price: "\u20B13,000.00",
        image: "/bouquet3.png",
      },
      {
        id: "featured-2",
        name: "Featured Product 2",
        price: "\u20B13,000.00",
        image: "/bouquet3.png",
      },
      {
        id: "featured-3",
        name: "Featured Product 3",
        price: "\u20B13,000.00",
        image: "/bouquet3.png",
      },
      {
        id: "featured-4",
        name: "Featured Product 4",
        price: "\u20B13,000.00",
        image: "/bouquet3.png",
      },
      {
        id: "featured-5",
        name: "Featured Product 5",
        price: "\u20B13,000.00",
        image: "/bouquet3.png",
      },
      {
        id: "featured-6",
        name: "Featured Product 6",
        price: "\u20B13,000.00",
        image: "/bouquet3.png",
      },
    ],
  },
  {
    id: "latest",
    label: "LATEST PRODUCTS",
    products: [
      {
        id: "latest-1",
        name: "Latest Product 1",
        price: "\u20B13,000.00",
        image: "/bouquet3.png",
      },
      {
        id: "latest-2",
        name: "Latest Product 2",
        price: "\u20B13,000.00",
        image: "/bouquet3.png",
      },
      {
        id: "latest-3",
        name: "Latest Product 3",
        price: "\u20B13,000.00",
        image: "/bouquet3.png",
      },
      {
        id: "latest-4",
        name: "Latest Product 4",
        price: "\u20B13,000.00",
        image: "/bouquet3.png",
      },
      {
        id: "latest-5",
        name: "Latest Product 5",
        price: "\u20B13,000.00",
        image: "/bouquet3.png",
      },
      {
        id: "latest-6",
        name: "Latest Product 6",
        price: "\u20B13,000.00",
        image: "/bouquet3.png",
      },
    ],
  },
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<ProductTab>("featured");
  const activeSection =
    mockProductSections.find((section) => section.id === activeTab) ??
    mockProductSections[0];

  return (
    <div className={`${montserrat.className} text-[#2B2B2B]`}>


      <div className="flex items-center justify-center gap-6 text-[0.68rem] font-bold tracking-[0.12em]">
        {mockProductSections.map((tab) => {
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

      <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-7">
        {activeSection.products.map((product) => (
          <article key={product.id} className="text-center">
            <div className="relative aspect-[1/1.32] overflow-hidden  bg-[#fdf3f3]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 500px) 45vw, 220px"
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
    </div>
  );
}
