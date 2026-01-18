import { formatCurrency } from "../utils/util";

export function Chip(content, color) {
  return (
    <span
      className={`bg-${color}-100 text-${color}-500 text-xs xl:text-sm rounded-full px-2 py-1 w-fit`}
    >
      {content}
    </span>
  );
}

export function Amount(currency, flag, amount) {
  return (
    <span className="items-center">
      {flag} {formatCurrency(amount, currency)}
    </span>
  );
}
