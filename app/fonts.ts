import { Montserrat, Playfair_Display } from "next/font/google";

export const heroSerif = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
});

export const serifRegular = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const serifBold = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});
