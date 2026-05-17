import Image from "next/image";

import { heroSerif } from "./fonts";
import Navbar from "@/components/Navbar";

export default function Home() {
  return(
    <main className="mx-auto w-full max-w-[500px]">
      <Navbar />
      <section className="hero-section overflow-hidden bg-[#F8F5F2] px-5 py-2  text-[#2B2B2B]">
        <div className="relative grid min-h-50 grid-cols-[56%_44%] items-center">
          <div className="relative z-10 space-y-4">
          <div className="space-y-4">
            <h1 className={`${heroSerif.className} text-[2.25rem] leading-[1.04]`}>
              Handcrafted
              <br />
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[2.25rem]">
                with Heart
                <Image
                  src="/bigheart.webp"
                  alt=""
                  width={34}
                  height={34}
                  className="mt-1 shrink-0"
                />
              </span>
            </h1>
            <div className="flex w-44 items-center gap-3" aria-hidden="true">
              <span className="h-px flex-1 bg-[#C9828B]" />
              <Image
                src="/heart.png"
                alt=""
                width={22}
                height={22}
                className="shrink-0"
              />
              <span className="h-px flex-1 bg-[#C9828B]" />
            </div>
          </div>

          <p className="max-w-xs text-xs leading-7 text-[#2B2B2B]/70">
            Thoughtful blooms for life&apos;s beautiful moments.
            <br />
            Made with love, just for you.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-xl bg-[#C9828B] px-5 py-3 text-xs font-semibold text-white shadow-sm"
          >
            SHOP BLOOMS
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="size-4"
            >
              <path
                d="M5 12H19M13 6L19 12L13 18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </a>
          </div>

          <div className="relative z-0 ml-3 h-72 overflow-visible">
            <Image
              src="/bouquet.webp"
              alt="Handcrafted floral bouquet"
              fill
              sizes="(max-width: 500px) 44vw, 220px"
              className="translate-x-15 translate-y-5 scale-250 object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
