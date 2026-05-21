import Image from "next/image";

import { montserrat } from "@/app/fonts";

const contactItems = [
  {
    label: "Phone",
    text: "0917 123 4567",
    icon: (
      <path
        d="M8.5 5.5 6.7 7.3c-.4.4-.5 1-.3 1.5a18 18 0 0 0 8.8 8.8c.5.2 1.1.1 1.5-.3l1.8-1.8c.4-.4.5-1 .2-1.5l-1.2-2.1c-.3-.5-.9-.7-1.4-.5l-1.6.6a11.4 11.4 0 0 1-4.5-4.5l.6-1.6c.2-.5 0-1.1-.5-1.4L10 5.3c-.5-.3-1.1-.2-1.5.2Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Email",
    text: "hello@mumsandmom.ph",
    icon: (
      <path
        d="M5 7h14v10H5V7Zm1.6 1.5 5.4 4.1 5.4-4.1H6.6Zm10.9 7-3.4-2.7-2.1 1.6-2.1-1.6-3.4 2.7h11Zm-11-1.2 2.7-2.2-2.7-2v4.2Zm11 0v-4.2l-2.7 2 2.7 2.2Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Address",
    text: "123 Quezon Avenue, Lucena City, Quezon 4301",
    icon: (
      <path
        d="M12 3.8a5.7 5.7 0 0 0-5.7 5.7c0 4.1 5.7 10.7 5.7 10.7s5.7-6.6 5.7-10.7A5.7 5.7 0 0 0 12 3.8Zm0 8a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Hours",
    text: "Mon - Sat: 8:00 AM - 8:00 PM Sun: 8:00 AM - 6:00 PM",
    icon: (
      <path
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.8 4v3.6l2.6 1.5-.8 1.3-3.3-1.9V8h1.5Z"
        fill="currentColor"
      />
    ),
  },
];

const socialItems = [
  { label: "Facebook", text: "f", className: "bg-[#31577d]" },
  { label: "Instagram", text: "ig", className: "bg-[#e93b6d]" },
  { label: "Messenger", text: "m", className: "bg-[#31577d]" },
];

export default function Footer() {
  return (
    <footer className={`${montserrat.className} overflow-hidden bg-[#fdf3f3] text-[#2B2B2B]`}>
      <div className="relative grid grid-cols-[44%_56%] gap-4 px-5 py-6">
        <Image
          src="/floral.png"
          alt=""
          width={960}
          height={1639}
          className="pointer-events-none absolute left-[-5.4rem] top-1/2 w-36 -translate-y-1/2 opacity-20"
          aria-hidden="true"
        />
        <Image
          src="/floral.png"
          alt=""
          width={960}
          height={1639}
          className="pointer-events-none absolute right-[-5.4rem] top-1/2 w-36 -translate-y-1/2 scale-x-[-1] opacity-20"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center justify-center border-r border-[#f1bac2] pr-4 text-center">
          <Image
            src="/logo-mums.jpg"
            alt="Mums & Mom Flowershop"
            width={112}
            height={112}
            className="h-16 w-24 object-contain contrast-130"
          />
          <p className="mt-3 max-w-[150px] text-[0.68rem] font-medium leading-4 text-black/70">
            Handcrafted blooms with heart, for life&apos;s beautiful moments.
          </p>
          <div className="mt-4 flex items-center gap-3" aria-label="Social media">
            {socialItems.map((item) => (
              <span
                key={item.label}
                aria-label={item.label}
                className={`${item.className} flex size-6 items-center justify-center rounded-full text-[0.85rem] font-extrabold leading-none text-white`}
                role="img"
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 py-1 pl-1">
          <h2 className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em]">
            Contact Info
          </h2>
          <ul className="mt-3 space-y-2.5">
            {contactItems.map((item) => (
              <li key={item.label} className="grid grid-cols-[1rem_1fr] gap-2 text-[0.66rem] font-medium leading-4 text-black/70">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="mt-0.5 size-4 text-[#d4516c]"
                >
                  {item.icon}
                </svg>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex min-h-10 items-center justify-center bg-[#d4516c] px-4 py-3 text-center text-[0.65rem] font-semibold leading-4 text-white">
        <span>&copy; 2025 Mums &amp; Mom Flower Shop. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
