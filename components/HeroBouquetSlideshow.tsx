"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const bouquetSlides = [
  {
    src: "/bouquet3.png",
    alt: "",
  },
  {
    src: "/bouquet4.png",
    alt: "",
  },
];

type HeroBouquetSlideshowProps = {
  className?: string;
};

export default function HeroBouquetSlideshow({
  className = "",
}: HeroBouquetSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % bouquetSlides.length);
    }, 10000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {bouquetSlides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          sizes="(max-width: 500px) 100vw, 500px"
          className={`object-contain object-right-bottom transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
