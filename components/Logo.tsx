import Link from "next/link";
import { ChefHat } from "lucide-react";
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
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-burgundy-600 text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
        <ChefHat className="h-5 w-5" aria-hidden="true" />
      </span>
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