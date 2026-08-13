import Image from "next/image";

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading Pendo's Treats"
      className="flex min-h-[50vh] items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/images/logo-192.png"
          alt="Pendo's Treats logo"
          width={96}
          height={96}
          priority
          className="h-16 w-16 animate-pulse rounded-xl object-cover shadow-soft sm:h-20 sm:w-20"
        />
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-burgundy-200 border-t-burgundy-600" />
        <span className="sr-only">Loading Pendo&rsquo;s Treats</span>
      </div>
    </div>
  );
}
