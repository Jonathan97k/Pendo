export const BUSINESS = {
  name: "Pendo's Treats",
  tagline: "Freshly made. Deliciously served.",
  location: "Area 49, New Gulliver, Lilongwe, Malawi",
  locationShort: "Area 49, New Gulliver, Lilongwe",
  phoneDisplay: "+265 (0) 994 630 808",
  phoneHref: "tel:+265994630808",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "265994630808",
  email: "kantembe.upendo@gmail.com",
} as const;