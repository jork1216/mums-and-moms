import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex h-18 w-full items-center justify-between bg-background px-5">
      <button
        type="button"
        aria-label="Open menu"
        className="size-10"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="size-10"
        >
          <path
            d="M4 7H20M4 12H20M4 17H20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </svg>
      </button>

      <div className="h-15 w-28 overflow-hidden ">
        <Image
          src="/logo-mums.jpg"
          alt="Mums & Mom Flowershop"
          width={112}
          height={112}
          priority
          className="h-full w-full scale-150 object-contain"
        />
      </div>

      <div className="size-10" aria-hidden="true" />
    </nav>
  );
}
