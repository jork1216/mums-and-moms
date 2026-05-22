// Breakpoints: mobile 0-500px, tablet 501-1024px, desktop 1025px+.

import Image from "next/image";
import Link from "next/link";

import { heroSerif, montserrat, serifRegular } from "./fonts";
import Footer from "@/components/Footer";
import HeroBouquetSlideshow from "@/components/HeroBouquetSlideshow";
import Navbar from "@/components/Navbar";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return(
    <main className="mx-auto w-full max-w-[500px] bg-[#FFFDFB] min-[501px]:max-w-[1024px] min-[1025px]:max-w-none">
      <Navbar />
      <section className="hero-section relative min-h-[18rem] overflow-hidden bg-[#fdf3f3] px-5 pb-7 pt-4 text-[#2B2B2B] min-[501px]:min-h-[27rem] min-[501px]:px-10 min-[501px]:pb-12 min-[501px]:pt-8 min-[1025px]:min-h-[34rem] min-[1025px]:px-12 min-[1025px]:pb-16 min-[1025px]:pt-12">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <HeroBouquetSlideshow
            petalsClassName="translate-x-[0%] translate-y-3 scale-[1.1] min-[501px]:translate-x-[0%] min-[501px]:scale-[1.05] min-[1025px]:translate-x-[0%] min-[1025px]:translate-y-4 min-[1025px]:scale-[1]"
            bouquetClassName="translate-x-[5%] translate-y-2 scale-[1.1] min-[501px]:translate-x-[0%] min-[501px]:scale-[1.08] min-[1025px]:translate-x-[0%] min-[1025px]:translate-y-4 min-[1025px]:scale-[1.02]"
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[16rem] w-full max-w-[1200px] items-center min-[501px]:min-h-[23rem] min-[1025px]:min-h-[28rem]">
          <div className="w-full space-y-4 min-[501px]:max-w-[31rem] min-[501px]:space-y-5 min-[1025px]:max-w-[35rem] min-[1025px]:space-y-6">
            <div className="space-y-3 min-[501px]:space-y-4">
              <h1 className={`${heroSerif.className} mt-2 text-[2.25rem] leading-[1.04] [text-shadow:0_0_2px_#fff,0_0_6px_#fff,0_0_14px_rgba(255,255,255,0.95)] min-[501px]:text-[4rem] min-[1025px]:text-[5rem]`}>
                Handcrafted
                <br />
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[2.25rem] min-[501px]:gap-2 min-[501px]:text-[4rem] min-[1025px]:text-[5rem]">
                  with <span className="text-[#d4516c]">Heart</span>
                  <Image
                    src="/bigheart.webp"
                    alt=""
                    width={34}
                    height={34}
                    className="mt-1 h-[34px] w-[34px] shrink-0 scale-110 min-[501px]:h-12 min-[501px]:w-12 min-[1025px]:h-14 min-[1025px]:w-14"
                  />
                </span>
              </h1>
              <div className="flex w-40 items-center gap-3 min-[501px]:w-56 min-[1025px]:w-64" aria-hidden="true">
                <span className="h-px flex-1 bg-[#C9828B]" />
                <Image
                  src="/heart.png"
                  alt=""
                  width={24}
                  height={17}
                  className="h-auto w-6 shrink-0 min-[501px]:w-8"
                />
                <span className="h-px flex-1 bg-[#C9828B]" />
              </div>
            </div>

            <p className="w-3/5 text-xs leading-5 text-black/70 [text-shadow:0_0_2px_#fff,0_0_6px_#fff,0_0_14px_rgba(255,255,255,0.95)] min-[501px]:w-full min-[501px]:max-w-[24rem] min-[501px]:text-sm min-[501px]:leading-7 min-[1025px]:max-w-[28rem] min-[1025px]:text-base min-[1025px]:leading-8">
              Thoughtful blooms for life&apos;s beautiful moments.
              <br />
              Made with love, just for you.
            </p>

            <Link
              href="/products"
              className="inline-flex w-full max-w-[12rem] items-center justify-center gap-2.5 rounded-2xl border-2 border-white bg-[#d35570] px-5 py-2.5 text-xs font-semibold text-white shadow-[0px_2px_0_#b94861] min-[501px]:max-w-[14rem] min-[501px]:px-6 min-[501px]:py-3 min-[501px]:text-sm min-[1025px]:max-w-[18rem]"
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
      <section className="relative overflow-hidden bg-[#FFFDFB] px-5 py-10 text-center text-[#2B2B2B] min-[501px]:px-10 min-[501px]:py-16 min-[1025px]:px-12 min-[1025px]:py-20">
        <Image
          src="/floral.png"
          alt=""
          width={960}
          height={1639}
          className="pointer-events-none absolute left-[-3.25rem] top-1/2 w-28 -translate-y-1/2 opacity-35 min-[501px]:left-[-6rem] min-[501px]:w-52 min-[1025px]:left-[-3rem] min-[1025px]:w-64"
          aria-hidden="true"
        />
        <Image
          src="/floral.png"
          alt=""
          width={960}
          height={1639}
          className="pointer-events-none absolute right-[-3.25rem] top-1/2 w-28 -translate-y-1/2 scale-y-[-1] opacity-35 min-[501px]:right-[-6rem] min-[501px]:w-52 min-[1025px]:right-[-3rem] min-[1025px]:w-64"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto mt-5 max-w-[760px] min-[501px]:mt-0">
          <p className={`${montserrat.className} text-[0.62rem] font-extrabold tracking-[0.16em] text-[#d4516c] min-[501px]:text-xs`}>
            WHY CHOOSE US
          </p>

          <h2 className={`${serifRegular.className} mt-5 text-[1.625rem] leading-[1.18] min-[501px]:text-[2.5rem] min-[1025px]:text-[3rem]`}>
            <span className={heroSerif.className}>Trusted Flower Shop in</span>
            <br />
            <span className="font-semibold text-[#d4516c]">Lucena City</span>
          </h2>

          <div className="mx-auto mt-3 flex w-36 items-center gap-3 min-[501px]:mt-5 min-[501px]:w-52" aria-hidden="true">
            <span className="h-px flex-1 bg-[#C9828B]" />
            <Image
              src="/heart.png"
              alt=""
              width={24}
              height={17}
              className="h-auto w-6 shrink-0 min-[501px]:w-8"
            />
            <span className="h-px flex-1 bg-[#C9828B]" />
          </div>

          <p className={`${montserrat.className} mx-auto mt-4 max-w-[380px] text-[0.68rem] font-medium leading-4.5 text-black/75 min-[501px]:mt-6 min-[501px]:max-w-[600px] min-[501px]:text-sm min-[501px]:leading-7 min-[1025px]:max-w-[680px]`}>
            At Mums &amp; Mom Flower Shop, we create handcrafted bouquets
            with premium blooms and passion.
            <br />
            Every arrangement is thoughtfully designed to help you
            celebrate life&apos;s most beautiful moments.
          </p>

          <p className={`${montserrat.className} mt-12 text-xs font-extrabold tracking-[0.16em] text-[#2B2B2B] min-[501px]:mt-16 min-[501px]:text-sm`}>
            ORDER NOW!
          </p>
        </div>
      </section>

      <section className="bg-[#FFFDFB] px-5 pb-10 text-center min-[501px]:px-10 min-[501px]:pb-16 min-[1025px]:px-12 min-[1025px]:pb-20">
        <div className="mx-auto max-w-[680px] min-[1025px]:max-w-[860px]">
          <ProductShowcase />
        </div>
      </section>

      <Footer />
    </main>
  );
}
