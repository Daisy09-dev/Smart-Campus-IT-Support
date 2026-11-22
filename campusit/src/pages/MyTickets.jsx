import { Section } from "@/components/ui/card";
import TicketsTable from "@/components/TicketsTable";
import { useApp } from "@/store";

export default function MyTickets() {
  const { tickets } = useApp();
  return (
    <>
      <div><h1>My tickets</h1><p className="text-mu">Open one to see its status, conversation and SLA.</p></div>
      <Section><TicketsTable rows={tickets.filter((t) => t.who === "G. Reyes")} /></Section>
    </>
  );
}
