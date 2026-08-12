import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { classNames } from "@/lib/utils";
import { BUSINESS } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  label?: string;
  text?: string;
  className?: string;
  size?: "md" | "lg";
};

export default function WhatsAppButton({
  label = "Order on WhatsApp",
  text = "Hello Pendo's Treats! 👋 I would like to place an order.",
  className,
  size = "md",
}: WhatsAppButtonProps) {
  return (
    <Link
      href={buildWhatsAppUrl(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(
        "btn-whatsapp",
        size === "lg" ? "px-8 py-4 text-base" : "",
        className,
      )}
    >
      <MessageCircle className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
      {label}
      <span className="sr-only">Opens WhatsApp to order from {BUSINESS.name}</span>
    </Link>
  );
}