import { memo, useMemo } from "react";

function calculateAnalytics(items: string[]): number {
  console.log("Calculating analytics..."); // Тяжелая операция [cite: 145]
  let result = 0;
  for (let i = 0; i < 10000000; i++) { result += Math.sqrt(i); }
  return result + items.length;
}

export const AnalyticsChart = memo(function AnalyticsChart({
  items,
}: {
  items: string[];
}) {
  console.log("AnalyticsChart render");
  const analytics = useMemo(() => calculateAnalytics(items), [items]);
  return <div>Calculated value: {analytics}</div>;
});