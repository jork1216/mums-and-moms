export type ProductTag = "featured" | "latest";
export type FlowerType =
  | "sunflower"
  | "dried flowers"
  | "others"
  | "roses"
  | "lilies"
  | "tulips";

export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  flowerType: FlowerType;
  tags: ProductTag[];
};

export type ProductTab = ProductTag;

export type ProductSection = {
  id: ProductTab;
  label: string;
  products: Product[];
};

export type FlowerTypeOption = {
  id: FlowerType;
  label: string;
};

export const flowerTypeOptions: FlowerTypeOption[] = [
  { id: "dried flowers", label: "DRIED FLOWERS" },
  { id: "lilies", label: "LILIES" },
  { id: "roses", label: "ROSES" },
  { id: "sunflower", label: "SUNFLOWER" },
  { id: "tulips", label: "TULIPS" },
  { id: "others", label: "OTHERS" },
];

export const products: Product[] = [
  {
    id: "product-1",
    name: "Roses 1",
    price: "\u20B11,250.00",
    image: "/bouquet3.png",
    flowerType: "roses",
    tags: ["featured"],
  },
  {
    id: "product-2",
    name: "Sunflower 1",
    price: "\u20B1850.00",
    image: "/bouquet3.png",
    flowerType: "sunflower",
    tags: ["featured"],
  },
  {
    id: "product-3",
    name: "Dried Flowers 1",
    price: "\u20B11,100.00",
    image: "/bouquet3.png",
    flowerType: "dried flowers",
    tags: ["featured"],
  },
  {
    id: "product-4",
    name: "Tulips 1",
    price: "\u20B11,450.00",
    image: "/bouquet3.png",
    flowerType: "tulips",
    tags: ["featured"],
  },
  {
    id: "product-5",
    name: "Lilies 1",
    price: "\u20B1750.00",
    image: "/bouquet3.png",
    flowerType: "lilies",
    tags: ["featured"],
  },
  {
    id: "product-6",
    name: "Others 1",
    price: "\u20B1600.00",
    image: "/bouquet3.png",
    flowerType: "others",
    tags: ["featured"],
  },
  {
    id: "product-7",
    name: "Tulips 2",
    price: "\u20B11,350.00",
    image: "/bouquet3.png",
    flowerType: "tulips",
    tags: ["latest"],
  },
  {
    id: "product-8",
    name: "Roses 2",
    price: "\u20B1900.00",
    image: "/bouquet3.png",
    flowerType: "roses",
    tags: ["latest"],
  },
  {
    id: "product-9",
    name: "Sunflower 2",
    price: "\u20B11,500.00",
    image: "/bouquet3.png",
    flowerType: "sunflower",
    tags: ["latest"],
  },
  {
    id: "product-10",
    name: "Lilies 2",
    price: "\u20B11,050.00",
    image: "/bouquet3.png",
    flowerType: "lilies",
    tags: ["latest"],
  },
  {
    id: "product-11",
    name: "Others 2",
    price: "\u20B1500.00",
    image: "/bouquet3.png",
    flowerType: "others",
    tags: ["latest"],
  },
  {
    id: "product-12",
    name: "Dried Flowers 2",
    price: "\u20B11,200.00",
    image: "/bouquet3.png",
    flowerType: "dried flowers",
    tags: ["latest"],
  },
];

const getProductsByTag = (tag: ProductTag) =>
  products.filter((product) => product.tags.includes(tag));

export const productSections: ProductSection[] = [
  {
    id: "featured",
    label: "FEATURED PRODUCTS",
    products: getProductsByTag("featured"),
  },
  {
    id: "latest",
    label: "LATEST PRODUCTS",
    products: getProductsByTag("latest"),
  },
];

export const allProducts: Product[] = products;
