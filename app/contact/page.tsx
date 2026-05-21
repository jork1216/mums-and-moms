import type { Metadata } from "next";
import Image from "next/image";

import { montserrat, serifRegular } from "@/app/fonts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact Us | Mums & Mom Flowershop",
  description: "Contact Mums & Mom Flowershop for help choosing the perfect blooms.",
};

export default function ContactPage() {
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
            Contact <span className="text-[#d4516c]">Us</span>
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
            We&apos;d love to help you choose the perfect blooms for every
            special moment.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
