"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/data/products";

type GalleryImage = (typeof GALLERY_IMAGES)[number];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const active: GalleryImage | null =
    activeIndex === null ? null : GALLERY_IMAGES[activeIndex];

  const close = () => setActiveIndex(null);

  const go = (dir: 1 | -1) => {
    if (activeIndex === null) {
      return;
    }
    setActiveIndex(
      (activeIndex + dir + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
    );
  };

  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {GALLERY_IMAGES.map((img, index) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-cream-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500 focus-visible:ring-offset-2"
              aria-label={`Open image: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-charcoal-900/80 backdrop-blur-sm animate-fade-in"
            onClick={close}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            className="relative w-full max-w-3xl animate-fade-in"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-charcoal-900 shadow-lift">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 90vw"
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center text-sm font-medium text-cream-100">
              {active.alt}
            </p>
            <button
              type="button"
              onClick={close}
              className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close image"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:-left-14"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:-right-14"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}