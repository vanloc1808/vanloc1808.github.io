/* =========================================================
   DATE HELPERS
   Data files keep dates as written ("July 7, 2026",
   "Sep 12, 2026"); pages show them short and group by year.
   ========================================================= */

const MONTHS: Record<string, string> = {
  January: 'Jan', February: 'Feb', March: 'Mar', April: 'Apr', May: 'May', June: 'Jun',
  July: 'Jul', August: 'Aug', September: 'Sep', October: 'Oct', November: 'Nov', December: 'Dec',
};

/** "July 7, 2026" → "Jul 7, 2026". */
export function shortDate(date: string): string {
  return date.replace(/^([A-Z][a-z]+)/, (m) => MONTHS[m] ?? m);
}

/** "Sep 12, 2026" → "Sep 12" (the year is shown by the group heading). */
export function monthDay(date: string): string {
  return shortDate(date).replace(/,?\s*\d{4}\s*$/, '');
}

/** The four-digit year in a date string. */
export function yearOf(date: string): string {
  return date.match(/\d{4}/)?.[0] ?? '';
}

/** Group items by year, keeping the input order (newest first). */
export function groupByYear<T>(items: T[], dateOf: (item: T) => string): { year: string; items: T[] }[] {
  const groups: { year: string; items: T[] }[] = [];
  for (const item of items) {
    const year = yearOf(dateOf(item));
    const last = groups[groups.length - 1];
    if (last && last.year === year) last.items.push(item);
    else groups.push({ year, items: [item] });
  }
  return groups;
}
