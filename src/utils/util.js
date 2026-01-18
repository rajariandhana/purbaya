export function dateOnly(timestamp) {
  const date = new Date(timestamp);
  return date.toISOString().split("T")[0];
}

export function formatCurrency(amount, currency) {
  return new Intl.NumberFormat(undefined, {
    // style: "currency",
    // currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
