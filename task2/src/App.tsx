import { useMemo, useState } from "react";
import { VirtualList } from "./components/VirtualList";
import { RegularList } from "./components/RegularList";

function App() {
  const [mode, setMode] = useState<"virtual" | "regular">("virtual");
  const [itemCount, setItemCount] = useState(10000);
  const [lastRenderMs, setLastRenderMs] = useState<number | null>(null);

  const header = useMemo(() => {
    return mode === "virtual"
      ? "Виртуализация (react-window)"
      : "Обычный список (без виртуализации)";
  }, [mode]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Сравнение производительности</h1>

      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: 12,
        }}
      >
        <button
          onClick={() => setMode("virtual")}
          disabled={mode === "virtual"}
        >
          Virtual
        </button>
        <button
          onClick={() => setMode("regular")}
          disabled={mode === "regular"}
        >
          Regular
        </button>

        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          Items:
          <input
            type="number"
            min={1000}
            step={1000}
            value={itemCount}
            onChange={(e) => setItemCount(Number(e.target.value) || 0)}
            style={{ width: 120 }}
          />
        </label>

        <button
          onClick={() => {
            const t0 = performance.now();
            setMode((m) => (m === "virtual" ? "regular" : "virtual"));
            requestAnimationFrame(() => {
              const t1 = performance.now();
              setLastRenderMs(t1 - t0);
            });
          }}
        >
          Toggle + measure
        </button>

        <div style={{ opacity: 0.8 }}>
          Last toggle:{" "}
          {lastRenderMs == null ? "—" : `${lastRenderMs.toFixed(1)} ms`}
        </div>
      </div>

      <h2>{header}:</h2>
      {mode === "virtual" ? (
        <VirtualList itemCount={itemCount} />
      ) : (
        <RegularList itemCount={itemCount} />
      )}
    </div>
  );
}

export default App;