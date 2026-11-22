import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Section } from "@/components/ui/card";
import { BarList, Metrics } from "@/components/Metrics";

const weekly = [{ w: "W1", n: 218 }, { w: "W2", n: 246 }, { w: "W3", n: 267 }, { w: "W4", n: 294 }];
const cats = [{ c: "Wi-Fi", n: 310 }, { c: "Account", n: 262 }, { c: "Software", n: 190 }, { c: "Printing", n: 121 }, { c: "Classroom", n: 79 }];
const tick = { fontSize: 11, fill: "var(--mu)" };
const tip = { contentStyle: { background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: 8, fontSize: 12 } };

/** Restrained charts: thin lines, minimal grid, neutral colors, one accent. */
export default function Analytics() {
  return (
    <>
      <div><h1>Analytics</h1><p className="text-mu">Service desk performance, last 4 weeks.</p></div>
      <Metrics items={[["Tickets", "1,284"], ["SLA Compliance", "94.2%"], ["Resolution Time", "2h 36m"], ["AI Deflection", "38%"], ["RPA Success", "97%"]]} />
      <div className="grid gap-4 lg:grid-cols-2">
        <Section title="Weekly resolved tickets">
          <div className="h-52 px-2 py-3" role="img" aria-label="Weekly resolved tickets rising from 218 to 294">
            <ResponsiveContainer><LineChart data={weekly} margin={{ left: 8, right: 16, top: 8 }}>
              <CartesianGrid stroke="var(--bd)" vertical={false} />
              <XAxis dataKey="w" tick={tick} axisLine={false} tickLine={false} /><YAxis hide domain={[200, 310]} /><Tooltip {...tip} />
              <Line type="monotone" dataKey="n" name="Resolved" stroke="var(--ac)" strokeWidth={1.5} dot={{ r: 2.5 }} />
            </LineChart></ResponsiveContainer>
          </div>
        </Section>
        <Section title="Tickets by category">
          <div className="h-52 px-2 py-3">
            <ResponsiveContainer><BarChart data={cats} layout="vertical" margin={{ left: 8, right: 16 }}>
              <XAxis type="number" hide /><YAxis type="category" dataKey="c" width={70} tick={tick} axisLine={false} tickLine={false} /><Tooltip {...tip} cursor={{ fill: "var(--b2)" }} />
              <Bar dataKey="n" name="Tickets" fill="var(--tx)" barSize={8} radius={4} />
            </BarChart></ResponsiveContainer>
          </div>
        </Section>
        <Section title="Tickets by priority"><BarList rows={[["P1 Critical", 6], ["P2 High", 17], ["P3 Medium", 52], ["P4 Low", 31]]} /></Section>
        <Section title="By support tier"><BarList rows={[["Tier 0 (AI)", 38, "38%"], ["Tier 1", 50, "50%"], ["Tier 2", 12, "12%"]]} /></Section>
        <Section title="SLA performance"><BarList rows={[["Met", 94, "94%"], ["At risk", 4, "4%"], ["Breached", 2, "2%"]]} /></Section>
        <Section title="Agent performance">
          <BarList rows={[["M. Santos", 41], ["R. Cruz", 32], ["L. Dizon", 25]]} />
          <p className="px-4 pb-3 text-xs text-mu">Tickets resolved this week</p>
        </Section>
      </div>
    </>
  );
}
