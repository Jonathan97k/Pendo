export function formatPrice(price: number): string {
  return `MWK ${price.toLocaleString("en-MW")}`;
}

export function formatPricePlain(price: number): string {
  return `MWK ${price.toLocaleString("en-MW")}`;
}

export function classNames(
  ...classes: (string | false | null | undefined)[]
): string {
  return classes.filter(Boolean).join(" ");
}