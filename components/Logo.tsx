import Link from "next/link";
import Image from "next/image";
import { classNames } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconOnly?: boolean;
};

export default function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={classNames(
        "group inline-flex items-center gap-2.5 sm:gap-3",
        className,
      )}
      aria-label="Pendo's Treats - Home"
    >
      <Image
        src="/images/logo.png"
        alt="Pendo's Treats emblem"
        width={192}
        height={192}
        className="h-11 w-11 shrink-0 rounded-xl object-cover shadow-soft transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14"
      />
      {!iconOnly && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[21px] font-black italic tracking-[-0.045em] text-[#790d20] sm:text-[25px]">
            Pendo&rsquo;s
          </span>
          <span className="mt-0.5 font-display text-[15px] font-extrabold uppercase tracking-[0.22em] text-[#d49b00] sm:text-[17px]">
            Treats
          </span>
          <span className="mt-1 text-[8px] font-semibold italic tracking-[0.015em] text-[#5a2428]/75 sm:text-[9px]">
            Good Food. Great Mood!
          </span>
        </span>
      )}
    </Link>
  );
}
