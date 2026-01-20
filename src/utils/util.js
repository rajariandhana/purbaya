import { months } from "./constants";

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

export function getCurrentMonthYear() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  // console.log(year, month);
  return { year, month };
}

export function getCurrentPeriod() {
  const { year, month } = getCurrentMonthYear();
  const yearId = String(year);
  const monthId = String(month).padStart(2, "0");
  return `${yearId}-${monthId}`;
}

export function getPeriodOptions() {
  const result = [];
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  const stopYear = year - 1;
  const stopMonth = month === 11 ? 0 : month + 1;
  while (!(year === stopYear && month < stopMonth)) {
    const monthId = String(month + 1).padStart(2, "0");
    result.push({
      id: `${year}-${monthId}`,
      name: months[month].name,
    });
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
  }
  // console.log(result);
  return result.reverse();
}
