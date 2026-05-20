import { montserrat } from "@/app/fonts";

export default function AnnouncementBar() {
  return (
    <div
      className={`${montserrat.className} flex h-7 items-center justify-center gap-2 bg-[#fff1f5] px-4 text-[0.72rem] font-medium text-[#4f4f4f]`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="size-4 shrink-0 text-[#d4516c]"
      >
        <path
          d="M3.5 6.5H15.5V16H3.5V6.5Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
        <path
          d="M15.5 10H18.5L21 12.8V16H15.5V10Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
        <path
          d="M7 18.5C8.10457 18.5 9 17.6046 9 16.5C9 15.3954 8.10457 14.5 7 14.5C5.89543 14.5 5 15.3954 5 16.5C5 17.6046 5.89543 18.5 7 18.5Z"
          fill="#fff1f5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M18 18.5C19.1046 18.5 20 17.6046 20 16.5C20 15.3954 19.1046 14.5 18 14.5C16.8954 14.5 16 15.3954 16 16.5C16 17.6046 16.8954 18.5 18 18.5Z"
          fill="#fff1f5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>

      <p className="whitespace-nowrap">Free Delivery on Orders Over &#8369;50</p>

      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="size-3.5 shrink-0 text-[#d4516c]"
      >
        <path d="M12 20.2C9.8 18.2 8 16.5 6.6 15.1C5.2 13.7 4.2 12.5 3.6 11.4C3 10.4 2.7 9.4 2.7 8.4C2.7 6.9 3.2 5.7 4.1 4.8C5.1 3.8 6.3 3.4 7.7 3.4C8.5 3.4 9.3 3.6 10 4C10.7 4.4 11.4 5 12 5.8C12.6 5 13.3 4.4 14 4C14.7 3.6 15.5 3.4 16.3 3.4C17.7 3.4 18.9 3.8 19.9 4.8C20.8 5.7 21.3 6.9 21.3 8.4C21.3 9.4 21 10.4 20.4 11.4C19.8 12.5 18.8 13.7 17.4 15.1C16 16.5 14.2 18.2 12 20.2Z" />
      </svg>
    </div>
  );
}
