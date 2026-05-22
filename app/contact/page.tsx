import type { Metadata } from "next";
import Image from "next/image";

import { montserrat, serifBold, serifRegular } from "@/app/fonts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const contactCards = [
  {
    title: "Phone",
    detail: "0917 123 4567",
    icon: (
      <path
        d="M8.5 5.5 6.7 7.3c-.4.4-.5 1-.3 1.5a18 18 0 0 0 8.8 8.8c.5.2 1.1.1 1.5-.3l1.8-1.8c.4-.4.5-1 .2-1.5l-1.2-2.1c-.3-.5-.9-.7-1.4-.5l-1.6.6a11.4 11.4 0 0 1-4.5-4.5l.6-1.6c.2-.5 0-1.1-.5-1.4L10 5.3c-.5-.3-1.1-.2-1.5.2Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Email",
    detail: "hello@mumsandmom.ph",
    icon: (
      <path
        d="M5 7h14v10H5V7Zm1.6 1.5 5.4 4.1 5.4-4.1H6.6Zm10.9 7-3.4-2.7-2.1 1.6-2.1-1.6-3.4 2.7h11Zm-11-1.2 2.7-2.2-2.7-2v4.2Zm11 0v-4.2l-2.7 2 2.7 2.2Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Location",
    detail: "Lucena City, Quezon",
    icon: (
      <path
        d="M12 3.8a5.7 5.7 0 0 0-5.7 5.7c0 4.1 5.7 10.7 5.7 10.7s5.7-6.6 5.7-10.7A5.7 5.7 0 0 0 12 3.8Zm0 8a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Hours",
    detail: "8:00 AM - 8:00 PM",
    icon: (
      <path
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.8 4v3.6l2.6 1.5-.8 1.3-3.3-1.9V8h1.5Z"
        fill="currentColor"
      />
    ),
  },
];

const socialChannels = [
  {
    title: "Facebook",
    detail: "/mumsandmomflowers",
    logo: "/socials/facebook.webp",
  },
  {
    title: "Instagram",
    detail: "@mumsandmom.ph",
    logo: "/socials/instagram.svg",
  },
  {
    title: "Messenger",
    detail: "Chat with us",
    logo: "/socials/messenger.png",
  },
];

export const metadata: Metadata = {
  title: "Contact Us | Mums & Mom Flowershop",
  description: "Contact Mums & Mom Flowershop for help choosing the perfect blooms.",
};

export default function ContactPage() {
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
            Contact <span className="text-[#d4516c]">Us</span>
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

          <p className={`${montserrat.className} mx-auto mt-5 max-w-[350px] text-[0.78rem] font-medium leading-6 text-black/75 min-[501px]:mt-6 min-[501px]:max-w-[560px] min-[501px]:text-sm min-[501px]:leading-7`}>
            We&apos;d love to help you choose the perfect blooms for every
            special moment.
          </p>
        </div>
      </section>

      <section className={`${montserrat.className} bg-[#FFFDFB] px-5 pb-12 text-[#2B2B2B] min-[501px]:px-10 min-[501px]:pb-16 min-[1025px]:px-12`}>
        <div className="mx-auto grid max-w-[360px] grid-cols-1 gap-3 min-[501px]:max-w-[760px] min-[501px]:grid-cols-2 min-[501px]:gap-4 min-[1025px]:max-w-[920px]">
          {contactCards.map((card) => (
            <article
              key={card.title}
              className="flex items-center gap-4 rounded-2xl border border-[#f3cfd4] bg-white/90 px-4 py-3 text-left shadow-[0_8px_18px_rgba(212,81,108,0.07)] min-[501px]:px-5 min-[501px]:py-4"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#d4516c] text-white shadow-[0_2px_0_#bf405a] ring-2 ring-[#f7dbe0] min-[501px]:size-12">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 min-[501px]:size-6">
                  {card.icon}
                </svg>
              </div>

              <div className="min-w-0">
                <h2 className={`${serifBold.className} text-[1.08rem] font-bold leading-tight min-[501px]:text-[1.2rem]`}>
                  {card.title}
                </h2>

                <p className="mt-1 truncate text-[0.78rem] font-medium leading-5 text-black/70 min-[501px]:text-[0.84rem]">
                  {card.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${montserrat.className} bg-[#FFFDFB] px-5 pb-12 text-center text-[#2B2B2B] min-[501px]:px-10 min-[501px]:pb-16 min-[1025px]:px-12 min-[1025px]:pb-20`}>
        <div className="mx-auto max-w-[400px] min-[501px]:max-w-[900px]">
          <h2 className={`${serifRegular.className} text-[1.95rem] font-semibold leading-[1.12] text-[#2B2B2B] min-[501px]:text-[3rem] min-[1025px]:text-[3.5rem]`}>
            Connect With <span className="text-[#d4516c]">Us</span>
          </h2>

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

          <p className="mx-auto mt-5 max-w-[350px] text-[0.78rem] font-medium leading-6 text-black/75 min-[501px]:mt-6 min-[501px]:max-w-[560px] min-[501px]:text-sm min-[501px]:leading-7">
            Message us anytime on our social channels.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 min-[501px]:mt-8 min-[501px]:grid-cols-3 min-[501px]:gap-4">
            {socialChannels.map((channel) => (
              <article
                key={channel.title}
                className="flex items-center gap-4 rounded-full border border-[#f3a6b8] bg-white/90 px-4 py-3 text-left shadow-[0_8px_18px_rgba(212,81,108,0.07)] min-[501px]:gap-3 min-[501px]:px-4 min-[501px]:py-3.5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                  <Image
                    src={channel.logo}
                    alt={`${channel.title} logo`}
                    width={40}
                    height={40}
                    className="size-10 object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-[0.78rem] font-extrabold leading-5 text-[#2B2B2B]">
                    {channel.title}
                  </h3>
                  <p className="truncate text-[0.78rem] font-medium leading-5 text-black/70">
                    {channel.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
