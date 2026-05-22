import type { Metadata } from "next";
import Image from "next/image";

import { montserrat, serifRegular } from "@/app/fonts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCatalog from "@/components/ProductCatalog";

export const metadata: Metadata = {
  title: "Products | Mums & Mom Flowershop",
  description: "Browse all products from Mums & Mom Flowershop.",
};

export default function ProductsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[500px] bg-[#FFFDFB] min-[501px]:max-w-[1024px] min-[1025px]:max-w-none">
      <Navbar />

      <section className="relative overflow-hidden bg-[#FFFDFB] px-5 py-10 text-center text-[#2B2B2B] min-[501px]:px-10 min-[501px]:py-16 min-[1025px]:px-12 min-[1025px]:py-20">
        <Image
          src="/floral.png"
          alt=""
          width={960}
          height={1639}
          className="pointer-events-none absolute left-[-8rem] top-1/2 w-52 -translate-y-1/2 opacity-20 min-[501px]:left-[-6rem] min-[501px]:w-60 min-[1025px]:left-[-3rem] min-[1025px]:w-72"
          aria-hidden="true"
        />
        <Image
          src="/floral.png"
          alt=""
          width={960}
          height={1639}
          className="pointer-events-none absolute right-[-8rem] top-1/2 w-52 -translate-y-1/2 scale-x-[-1] opacity-20 min-[501px]:right-[-6rem] min-[501px]:w-60 min-[1025px]:right-[-3rem] min-[1025px]:w-72"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-[400px] min-[501px]:max-w-[620px] min-[1025px]:max-w-[720px]">
          <h1 className={`${serifRegular.className} text-[1.95rem] font-semibold leading-[1.12] text-[#2B2B2B] min-[501px]:text-[3rem] min-[1025px]:text-[3.5rem]`}>
            Fresh Flowers
            <br />
            <span className="italic text-[#d4516c]">delivered</span> daily.
          </h1>

          <div className="mx-auto mt-4 flex w-36 items-center gap-3 min-[501px]:mt-5 min-[501px]:w-52" aria-hidden="true">
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

          <p className={`${montserrat.className} mx-auto mt-5 max-w-[350px] text-[0.78rem] font-medium leading-6 text-black/75 min-[501px]:mt-6 min-[501px]:max-w-[560px] min-[501px]:text-sm min-[501px]:leading-7 min-[1025px]:max-w-[640px]`}>
            Whether pick-up or delivery, we serve fresh and well-arranged
            flowers just for you. We deliver flowers in Lucena City and nearby
            areas in Quezon Province. You may contact us
            to discuss and customize the combinations of flowers you want
            for the arrangement.
          </p>
        </div>
      </section>

      <section className="px-5 pb-10 text-center min-[501px]:px-10 min-[501px]:pb-16 min-[1025px]:px-12 min-[1025px]:pb-20">
        <div className="mx-auto max-w-[1120px]">
          <ProductCatalog />
        </div>
      </section>

      <Footer />
    </main>
  );
}
