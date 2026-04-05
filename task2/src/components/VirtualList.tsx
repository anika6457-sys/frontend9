import { useMemo } from "react";
import { List, type RowComponentProps } from "react-window";
import { generateItems, type Item } from "../utils/generateItems";

type Props = {
  itemCount?: number;
};

type VirtualRowProps = {
  items: Item[];
};

function Row({
  index,
  style,
  ariaAttributes,
  items,
}: RowComponentProps<VirtualRowProps>) {
  const item = items[index];
  if (!item) return null;

  return (
    <div style={style} {...ariaAttributes}>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 12,
          marginRight: 8,
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontWeight: 600 }}>{item.title}</div>
        <div style={{ opacity: 0.8 }}>{item.description}</div>
        <div style={{ fontSize: 12, opacity: 0.7 }}>{item.category}</div>
      </div>
    </div>
  );
}

export function VirtualList({ itemCount = 10000 }: Props) {
  const items = useMemo(() => generateItems(itemCount), [itemCount]);
  if (items.length === 0) return <div>Нет данных</div>;

  return (
    <List
      style={{ width: "100%" }}
      rowCount={items.length}
      rowHeight={110}
      rowComponent={Row}
      rowProps={{ items }}
      defaultHeight={520}
    />
  );
}