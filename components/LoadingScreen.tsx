"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { classNames } from "@/lib/utils";

type Phase = "visible" | "fading" | "hidden";

const MIN_DISPLAY_MS = 900;
const FADE_MS = 450;

export default function LoadingScreen() {
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    const minTimer = window.setTimeout(() => setPhase("fading"), MIN_DISPLAY_MS);
    const onLoad = () =>
      setPhase((prev) => (prev === "visible" ? "fading" : prev));
    window.addEventListener("load", onLoad);
    return () => {
      window.clearTimeout(minTimer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  useEffect(() => {
    if (phase !== "fading") {
      return;
    }
    const timer = window.setTimeout(() => setPhase("hidden"), FADE_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      role="status"
      aria-label="Loading Pendo's Treats"
      className={classNames(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream-50 transition-opacity duration-500",
        phase === "fading" ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <Image
        src="/images/logo-192.png"
        alt="Pendo's Treats logo"
        width={192}
        height={192}
        priority
        className="h-28 w-28 animate-pulse rounded-2xl object-cover shadow-soft sm:h-36 sm:w-36"
      />
      <p className="mt-6 font-display text-xl font-bold tracking-tight text-charcoal-900 sm:text-2xl">
        PENDO&rsquo;S <span className="text-burgundy-600">TREATS</span>
      </p>
      <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal-900/50">
        Freshly made. Deliciously served.
      </p>
      <span
        className="mt-8 h-8 w-8 animate-spin rounded-full border-2 border-burgundy-200 border-t-burgundy-600"
        aria-hidden="true"
      />
    </div>
  );
}
