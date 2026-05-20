import Image from "next/image";
import Link from "next/link";

import AnnouncementBar from "@/components/AnnouncementBar";

type NavbarProps = {
  showAnnouncement?: boolean;
};

export default function Navbar({ showAnnouncement = true }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {showAnnouncement && <AnnouncementBar />}

      <nav className="flex h-16 w-full items-center justify-between px-5">
        <button
          type="button"
          aria-label="Open menu"
          className="size-9"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="size-9"
          >
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
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
    </header>
  );
}
