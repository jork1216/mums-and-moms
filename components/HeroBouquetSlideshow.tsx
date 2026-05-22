"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const heroSlides = [
  {
    petals: "/petals.png",
    bouquet: "/bouquet3.png",
  },
  {
    petals: "/petalswhite.png",
    bouquet: "/bouquet4.png",
  },
  {
    petals: "/petalsyellow.png",
    bouquet: "/bouquet5.png",
  },
];

type HeroBouquetSlideshowProps = {
  bouquetClassName?: string;
  petalsClassName?: string;
};

export default function HeroBouquetSlideshow({
  bouquetClassName = "",
  petalsClassName = "",
}: HeroBouquetSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute inset-0">
      {heroSlides.map((slide, index) => (
        <div
          key={`${slide.petals}-${slide.bouquet}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.petals}
            alt=""
            fill
            priority={index === 0}
            sizes="(max-width: 500px) 100vw, (max-width: 1024px) 1024px, 1200px"
            className={`z-0 object-contain object-right-bottom ${petalsClassName}`}
          />
          <Image
            src={slide.bouquet}
            alt=""
            fill
            priority={index === 0}
            sizes="(max-width: 500px) 100vw, (max-width: 1024px) 1024px, 1200px"
            className={`z-10 object-contain object-right-bottom ${bouquetClassName}`}
          />
        </div>
      ))}
    </div>
  );
}
