import type { Metadata } from "next";
import Image from "next/image";

import { montserrat, serifRegular } from "@/app/fonts";
import Navbar from "@/components/Navbar";
import ProductCatalog from "@/components/ProductCatalog";

export const metadata: Metadata = {
  title: "Products | Mums & Mom Flowershop",
  description: "Browse all products from Mums & Mom Flowershop.",
};

export default function ProductsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[500px] bg-[#FFFDFB]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#FFFDFB] px-5 py-10 text-center text-[#2B2B2B]">
        <Image
          src="/floral.png"
          alt=""
          width={960}
          height={1639}
          className="pointer-events-none absolute left-[-8rem] top-1/2 w-52 -translate-y-1/2 opacity-20"
          aria-hidden="true"
        />
        <Image
          src="/floral.png"
          alt=""
          width={960}
          height={1639}
          className="pointer-events-none absolute right-[-8rem] top-1/2 w-52 -translate-y-1/2 scale-x-[-1] opacity-20"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-[400px]">
          <h1 className={`${serifRegular.className} text-[1.95rem] font-semibold leading-[1.12] text-[#2B2B2B]`}>
            Fresh Flowers
            <br />
            <span className="italic text-[#d4516c]">delivered</span> daily.
          </h1>

          <div className="mx-auto mt-4 flex w-36 items-center gap-3" aria-hidden="true">
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

          <p className={`${montserrat.className} mx-auto mt-5 max-w-[350px] text-[0.78rem] font-medium leading-6 text-black/75`}>
            Whether pick-up or delivery, we serve fresh and well-arranged
            flowers just for you. We deliver flowers in Lucena City and nearby
            areas in Quezon Province. You may contact us
            to discuss and customize the combinations of flowers you want
            for the arrangement.
          </p>
        </div>
      </section>

      <section className="px-5 pb-10 text-center">
        <ProductCatalog />
      </section>
    </main>
  );
}
