export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

export type ProductTab = "featured" | "latest";

export type ProductSection = {
  id: ProductTab;
  label: string;
  products: Product[];
};

const featuredProducts: Product[] = [
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
];

const latestProducts: Product[] = [
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
];

export const productSections: ProductSection[] = [
  {
    id: "featured",
    label: "FEATURED PRODUCTS",
    products: featuredProducts,
  },
  {
    id: "latest",
    label: "LATEST PRODUCTS",
    products: latestProducts,
  },
];

export const allProducts: Product[] = [
  ...featuredProducts,
  ...latestProducts,
];
