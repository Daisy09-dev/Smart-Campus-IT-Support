import { useEffect, useState } from "react";
import { Section, Body } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/input";
import { AiBadge, Chip, PriorityBadge } from "./Badges";
import { IMP, MX } from "@/lib/data";
import { useApp } from "@/store";

const DEFAULT_REPLY = "Thanks for reporting this. We’re looking into it.";

/** AI Agent-Assist: AI recommends, the agent decides (Accept / Edit / Ignore). Nothing is sent automatically. */
export default function AiPanel({ t }) {
  const { acceptAi, ignoreAi, rerate } = useApp();
  const [edit, setEdit] = useState(false), [reply, setReply] = useState(t.rep || DEFAULT_REPLY);
  useEffect(() => { setReply(t.rep || DEFAULT_REPLY); setEdit(false); }, [t.id]); // eslint-disable-line
  const rec = t.rec !== undefined && t.imp !== t.rec;
  return (
    <Section title="AI Agent-Assist" action={<AiBadge>AI-generated</AiBadge>} className="border-l-2 border-l-ac bg-b2">
      <Body>
        <p>{t.sug || "Collect device details, then check the knowledge base."}</p>
        <p className="text-xs text-mu">Confidence 87% · Article: Campus Wi-Fi Troubleshooting</p>
        <p className="text-xs text-mu">Steps: 1) forget CampusWiFi 2) reconnect with campus credentials 3) check other reports from the same building.</p>
        <p className="text-xs text-mu">Similar resolved: CIT-2026-0988 (Dorm B auth failure) · CIT-2026-0951 (Wi-Fi profile loop)</p>
        <div>
          <b>Recommended: </b>
          {rec ? (
            <>raise impact to {IMP[t.rec]} (3 similar tickets in Dorm B today) → <PriorityBadge p={MX[t.rec][t.urg]} short /> routes to Tier 2{" "}
              <Button size="sm" className="ml-1" onClick={() => rerate(t.id, t.rec, t.urg)}>Apply</Button></>
          ) : <>keep <PriorityBadge p={t.p} short /> escalate only if the criteria below are met</>}
        </div>
        <p className="text-xs font-medium text-mu">Suggested reply</p>
        {edit ? <Textarea rows={4} value={reply} onChange={(e) => setReply(e.target.value)} /> : <p className="rounded-lg border border-bd bg-sf px-3 py-2">{reply}</p>}
        {t.ai === "pending" && t.st !== "Resolved" ? (
          <div className="flex gap-2">
            <Button size="sm" variant="primary" onClick={() => { acceptAi(t.id, reply); setEdit(false); }}>{edit ? "Send edited" : "Accept"}</Button>
            <Button size="sm" onClick={() => setEdit(!edit)}>Edit</Button>
            <Button size="sm" onClick={() => ignoreAi(t.id)}>Ignore</Button>
          </div>
        ) : <div><Chip c={t.ai === "accepted" ? "#16A34A" : "#DC2626"}>Agent {t.ai}</Chip></div>}
        <p className="text-xs text-mu">AI suggests; you decide. Nothing is sent automatically.</p>
      </Body>
    </Section>
  );
}
