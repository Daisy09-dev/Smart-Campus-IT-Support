import { Section } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/Badges";
import { Metrics } from "@/components/Metrics";
import { RPA_STEPS } from "@/lib/data";
import { useApp } from "@/store";
import { cn } from "@/lib/utils";

/** Simulated, rules-based RPA workflow (password reset). No real systems are touched. */
export default function Rpa() {
  const { rpa: r, rpaId, runRpa } = useApp();
  const d = Math.floor(r.pct / 14.3), running = r.pct < 100;
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div><h1>Automation</h1><p className="text-mu">Monitor campus IT workflows.</p></div>
        <Chip c="#D97706">Simulated RPA workflow · demo data</Chip>
      </div>
      <Section title="Password reset">
        <div className="flex flex-wrap items-center gap-1 px-4 py-3">
          {RPA_STEPS.map((n, i) => (
            <span key={n} className="flex items-center gap-1">
              <span className={cn("rounded-md border border-bd2 bg-sf px-2.5 py-1 text-xs", i < d && "border-ok text-ok", i === d && running && "border-ac bg-acs text-acx")}>{n}</span>
              {i < 6 && <i className="h-px w-4 bg-bd2" />}
            </span>
          ))}
        </div>
        <div className="px-4 pb-3">
          <div className="flex gap-1">
            {RPA_STEPS.map((n, i) => {
              const w = i < d ? 100 : i === d && running ? Math.round((r.pct / 14.3 - d) * 100) : 0;
              return <div key={n} title={n} className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-b2"><div className={cn("h-full transition-all", i === d && running ? "bg-ac" : "bg-tx")} style={{ width: w + "%" }} /></div>;
            })}
          </div>
          <div className="mt-2 flex justify-between text-xs text-mu"><span>{running ? `Step ${d + 1} of 7 · ${RPA_STEPS[d]}` : "All steps completed"}</span><b className="text-tx">{r.pct}%</b></div>
        </div>
      </Section>
      <Metrics items={[["Bot status", <span key="s" className={running ? "text-ok" : ""}>{running ? "● " : "✓ "}{r.state}</span>], ["Task", "Credential Reset"], ["Triggered by", rpaId], ["Progress", r.pct + "%"]]} />
      <div><Button variant="primary" disabled={!running} onClick={runRpa}>Run simulation</Button></div>
      <Section title="Execution log">
        <div className="overflow-x-auto"><table className="tbl"><thead><tr><th>Time</th><th>Step</th><th>Detail</th><th>Result</th></tr></thead>
          <tbody>{r.log.map((l, i) => <tr key={i}><td>{l[0]}</td><td>{l[1]}</td><td className="text-mu">{l[2]}</td><td className="text-ok">Success</td></tr>)}</tbody></table></div>
      </Section>
    </>
  );
}
