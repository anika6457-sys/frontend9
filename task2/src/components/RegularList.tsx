import { useMemo } from "react";
import { generateItems } from "../utils/generateItems";

export function RegularList({ itemCount = 10000 }: { itemCount?: number }) {
  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: 12,
            marginBottom: 8,
          }}
        >
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <p style={{ fontSize: 12, opacity: 0.7 }}>{item.category}</p>
        </div>
      ))}
    </div>
  );
}