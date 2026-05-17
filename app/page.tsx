import Image from "next/image";

import { heroSerif, montserrat, serifRegular } from "./fonts";
import Navbar from "@/components/Navbar";

export default function Home() {
  return(
    <main className="mx-auto w-full max-w-[500px]">
      <Navbar />
      <section className="hero-section overflow-hidden bg-[#fdf3f3] px-5 py-2  text-[#2B2B2B]">
        <div className="relative grid min-h-50 grid-cols-[56%_44%] items-center">
          <div className="relative z-10 space-y-4">
          <div className="space-y-4">
            <h1 className={`${heroSerif.className} text-[2.25rem] leading-[1.04] mt-3`}>
              Handcrafted
              <br />
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[2.25rem]">
                with <span className="text-[#d4516c]">Heart</span>
                <Image
                  src="/bigheart.webp"
                  alt=""
                  width={34}
                  height={34}
                  className="mt-1 shrink-0 scale-110"
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

          <p className="max-w-xs text-xs leading-6 text-black/70">
            Thoughtful blooms for life&apos;s beautiful moments.
            <br />
            Made with love, just for you.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-xl border-2 border-white bg-[#d35570] px-5 py-3 text-xs font-semibold text-white shadow-[0px_3px_0_#9ca3af]"
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
              src="/petals.png"
              alt=""
              fill
              sizes="(max-width: 500px) 44vw, 220px"
              className="z-0 translate-x-0 translate-y-2 scale-150 object-contain"
            />
            <Image
              src="/bouquet3.png"
              alt="Handcrafted floral bouquet"
              fill
              sizes="(max-width: 500px) 44vw, 220px"
              className="z-10 translate-x-0 translate-y-2 scale-180 object-contain"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#FFFDFB] px-5 py-8 text-center text-[#2B2B2B]">
        <p className={`${montserrat.className} text-[0.62rem] font-extrabold tracking-[0.16em] text-[#d4516c]`}>
          WHY CHOOSE US
        </p>

        <h2 className={`${serifRegular.className} mt-2 text-[1.50rem] font-semibold leading-[1.2]`}>
          Trusted Flower Shop for
          <br />
          <span className="font-semibold text-[#d4516c]">Meaningful Gifting</span>
        </h2>

        <div className="mx-auto mt-3 flex w-44 items-center gap-3" aria-hidden="true">
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

        <p className={`${montserrat.className} mx-auto mt-3 max-w-[360px] text-[0.68rem] font-medium leading-5 text-[#2B2B2B]/75`}>
          At Mums &amp; Mom Flower Shop, we create handcrafted bouquets
          with premium blooms and passion.
          <br />
          Every arrangement is thoughtfully designed to help you
          celebrate life&apos;s most beautiful moments.
        </p>

        <p className={`${montserrat.className} mt-6 text-xs font-extrabold tracking-[0.16em] text-[#2B2B2B]`}>
          ORDER NOW
        </p>
      </section>
    </main>
  );
}
