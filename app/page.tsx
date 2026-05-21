import Image from "next/image";
import Link from "next/link";

import { heroSerif, montserrat, serifRegular } from "./fonts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return(
    <main className="mx-auto w-full max-w-[500px]">
      <Navbar />
      <section className="hero-section relative min-h-[18rem] overflow-hidden bg-[#fdf3f3] px-5 pb-7 pt-4 text-[#2B2B2B]">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <Image
            src="/petals.png"
            alt=""
            fill
            sizes="(max-width: 500px) 100vw, 500px"
            className="translate-x-[0%] translate-y-3 scale-[1.1] object-contain object-right-bottom"
          />
          <Image
            src="/bouquet3.png"
            alt=""
            fill
            sizes="(max-width: 500px) 100vw, 500px"
            className="translate-x-[5%] translate-y-2 scale-[1.1] object-contain object-right-bottom"
          />
        </div>

        <div className="relative z-10 flex min-h-[16rem] w-full items-center">
          <div className="w-full space-y-4">
            <div className="space-y-3">
              <h1 className={`${heroSerif.className} mt-2 text-[2.25rem] leading-[1.04] [text-shadow:0_0_2px_#fff,0_0_6px_#fff,0_0_14px_rgba(255,255,255,0.95)]`}>
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
              <div className="flex w-40 items-center gap-3" aria-hidden="true">
                <span className="h-px flex-1 bg-[#C9828B]" />
                <Image
                  src="/heart.png"
                  alt=""
                  width={24}
                  height={17}
                  className="h-auto w-6 shrink-0"
                />
                <span className="h-px flex-1 bg-[#C9828B]" />
              </div>
            </div>

            <p className="w-3/5 text-xs leading-5 text-black/70 [text-shadow:0_0_2px_#fff,0_0_6px_#fff,0_0_14px_rgba(255,255,255,0.95)]">
              Thoughtful blooms for life&apos;s beautiful moments.
              <br />
              Made with love, just for you.
            </p>

            <Link
              href="/products"
              className="inline-flex w-fit min-w-[8.75rem] items-center justify-center gap-2.5 rounded-2xl border-2 border-white bg-[#d35570] px-5 py-2.5 text-xs font-semibold text-white shadow-[0px_2px_0_#b94861]"
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
            </Link>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#FFFDFB] px-5 py-10 text-center text-[#2B2B2B]">
        <Image
          src="/floral.png"
          alt=""
          width={960}
          height={1639}
          className="pointer-events-none absolute left-[-3.25rem] top-1/2 w-28 -translate-y-1/2 opacity-35"
          aria-hidden="true"
        />
        <Image
          src="/floral.png"
          alt=""
          width={960}
          height={1639}
          className="pointer-events-none absolute right-[-3.25rem] top-1/2 w-28 -translate-y-1/2 scale-y-[-1] opacity-35"
          aria-hidden="true"
        />
        <div className="relative mt-5 z-10">
          <p className={`${montserrat.className} text-[0.62rem] font-extrabold tracking-[0.16em] text-[#d4516c]`}>
            WHY CHOOSE US
          </p>

          <h2 className={`${serifRegular.className} mt-5 text-[1.625rem] leading-[1.18]`}>
            <span className={heroSerif.className}>Trusted Flower Shop in</span>
            <br />
            <span className="font-semibold text-[#d4516c]">Lucena City</span>
          </h2>

          <div className="mx-auto mt-3 flex w-36 items-center gap-3" aria-hidden="true">
            <span className="h-px flex-1 bg-[#C9828B]" />
            <Image
              src="/heart.png"
              alt=""
              width={24}
              height={17}
              className="h-auto w-6 shrink-0"
            />
            <span className="h-px flex-1 bg-[#C9828B]" />
          </div>

          <p className={`${montserrat.className} mx-auto mt-4 max-w-[380px] text-[0.68rem] font-medium leading-4.5 text-black/75`}>
            At Mums &amp; Mom Flower Shop, we create handcrafted bouquets
            with premium blooms and passion.
            <br />
            Every arrangement is thoughtfully designed to help you
            celebrate life&apos;s most beautiful moments.
          </p>

          <p className={`${montserrat.className} mt-12 text-xs font-extrabold tracking-[0.16em] text-[#2B2B2B]`}>
            ORDER NOW!
          </p>
        </div>
      </section>

      <section className="bg-[#FFFDFB] px-5 pb-10 text-center">
        <ProductShowcase />
      </section>

      <Footer />
    </main>
  );
}
