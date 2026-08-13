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
        "group inline-flex items-center gap-2.5",
        className,
      )}
      aria-label="Pendo's Treats - Home"
    >
      <Image
        src="/logo.png"
        alt="Pendo's Treats logo"
        width={192}
        height={192}
        className="h-10 w-10 shrink-0 rounded-xl object-cover shadow-soft transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11"
      />
      {!iconOnly && (
        <span className="leading-tight">
          <span className="block font-display text-lg font-bold tracking-tight text-charcoal-900">
            PENDO&rsquo;S <span className="text-burgundy-600">TREATS</span>
          </span>
          <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal-900/50">
            Freshly made
          </span>
        </span>
      )}
    </Link>
  );
}