"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { montserrat } from "@/app/fonts";
import AnnouncementBar from "@/components/AnnouncementBar";

type NavbarProps = {
  showAnnouncement?: boolean;
};

export default function Navbar({ showAnnouncement = true }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuTopClass = showAnnouncement ? "top-[5.75rem]" : "top-16";
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {showAnnouncement && <AnnouncementBar />}

      <nav className="flex h-16 w-full items-center justify-between px-5">
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="size-9"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="size-9"
          >
            {isMenuOpen ? (
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            )}
          </svg>
        </button>

        <Link
          href="/"
          aria-label="Go to homepage"
          className="h-14 w-28 overflow-hidden"
        >
          <Image
            src="/logo-mums.jpg"
            alt="Mums & Mom Flowershop"
            width={112}
            height={112}
            priority
            className="h-full w-full scale-[1.45] object-contain contrast-130"
          />
        </Link>

        <div className="size-9" aria-hidden="true" />
      </nav>

      {isMenuOpen && (
        <div
          className={`${menuTopClass} fixed inset-x-0 bottom-0 z-[40] overflow-y-auto bg-white px-8 pt-9 text-[#2B2B2B]`}
        >
          <nav aria-label="Main menu" className={montserrat.className}>
            <ul className="space-y-6 text-left text-[0.92rem] font-extrabold uppercase tracking-[0.16em]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className={`inline-block pb-1 transition-colors ${
                        isActive
                          ? "text-[#d4516c]"
                          : "text-[#2B2B2B] hover:text-[#d4516c]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <span
                  aria-disabled="true"
                  className="inline-block cursor-not-allowed pb-1 text-[#2B2B2B]"
                >
                  Contacts
                </span>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
