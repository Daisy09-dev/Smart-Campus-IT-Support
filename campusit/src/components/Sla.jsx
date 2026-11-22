import { useNow } from "@/lib/hooks";
import { M, H } from "@/lib/data";
import { cn } from "@/lib/utils";

const p2 = (n) => String(n).padStart(2, "0");
export const fmt = (d, long) => {
  const h = Math.floor(d / H), m = Math.floor((d % H) / M), s = Math.floor((d % M) / 1e3);
  return long ? `${p2(h)}:${p2(m)}:${p2(s)}` : h ? `${h}h ${p2(m)}m` : `${m}m`;
};
export const health = (end) => { const d = end - Date.now(); return d < 0 ? "Breached" : d < 30 * M ? "At Risk" : "Healthy"; };

/** Live countdown. Amber under 30 min (▲), red when overdue. */
export function Sla({ end, long }) {
  const d = end - useNow();
  const over = d < 0, risk = !over && d < 30 * M;
  return <b className={cn("font-semibold", over && "text-er", risk && "text-wr", long && "text-lg")}>{over ? "Overdue" : (risk ? "▲ " : "") + fmt(d, long)}</b>;
}
export function SlaBar({ end, total }) {
  const d = end - useNow(), f = Math.max(0, Math.min(1, d / total));
  return (
    <div className="h-1 min-w-12 flex-1 overflow-hidden rounded bg-b2">
      <div className={cn("h-full rounded transition-all", d < 0 ? "bg-er" : d < 30 * M ? "bg-wr" : "bg-tx")} style={{ width: f * 100 + "%" }} />
    </div>
  );
}
export function Health({ end }) {
  useNow();
  const h = health(end);
  return <span className={h === "Breached" ? "text-er" : h === "At Risk" ? "text-wr" : "text-ok"}>{h}</span>;
}
