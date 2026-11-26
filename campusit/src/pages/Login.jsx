import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShieldCheck, QrCode, MonitorCheck, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { U, isRequester, useApp } from "@/store";
import { useTheme } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const details = {
  s: "Report equipment issues and track your tickets.",
  f: "Report classroom disruptions and track your requests.",
  t: "Handle routine incidents and escalate complex issues.",
  u: "Handle escalations, approved RPA, and audit records.",
  a: "Oversee operations, users, roles, and governance.",
};

export default function Login() {
  const [selected, setSelected] = useState("s");
  const { signIn } = useApp();
  const location = useLocation(), navigate = useNavigate();
  useTheme();
  const qr = location.pathname === "/report";
  const submit = (event) => {
    event.preventDefault();
    if (signIn(selected)) navigate(qr && isRequester(selected) ? location.pathname + location.search : "/", { replace: true });
  };
  return (
    <main className="min-h-screen bg-bg px-4 py-10 text-tx sm:py-16">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-7 flex items-center justify-center gap-3">
          <div className="rounded-xl bg-acs p-3"><MonitorCheck className="size-7 text-acx" /></div>
          <div><h1 className="text-xl font-semibold">CampusCare AI</h1><p className="text-xs text-mu">Smart campus IT support</p></div>
        </div>
        <form onSubmit={submit} className="space-y-4 rounded-xl border border-bd bg-sf p-5 shadow-lg sm:p-7">
          <div><h2 className="text-lg font-semibold">Sign in to your campus account</h2><p className="mt-1 text-sm text-mu">Choose a sample account for this interactive demonstration.</p></div>
          {qr && <div className="flex items-start gap-2 rounded-lg border border-ac/40 bg-acs p-3 text-sm"><QrCode className="size-5 shrink-0 text-acx" /><span>Sign in as Student or Faculty to continue your equipment report. Your QR link will be preserved.</span></div>}
          <fieldset className="space-y-2">
            <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-mu">Demo accounts</legend>
            {Object.entries(U).map(([key, [name, role]]) => (
              <label key={key} className={cn("flex cursor-pointer items-start gap-3 rounded-lg border border-bd p-3 hover:bg-b2", selected === key && "border-ac bg-acs")}>
                <input className="mt-1 accent-blue-600" type="radio" name="demo-account" value={key} checked={selected === key} onChange={() => setSelected(key)} />
                <span className="min-w-0"><span className="block font-medium">{role} · {name}</span><span className="block text-xs text-mu">{details[key]}</span></span>
              </label>
            ))}
          </fieldset>
          <Button type="submit" variant="primary" className="w-full"><LogIn className="size-4" /> Sign in as {U[selected][1]}</Button>
          <div className="flex items-start gap-2 text-xs text-mu"><ShieldCheck className="size-4 shrink-0 text-ok" /><p>Prototype only. No real credentials, password storage, or production authentication. Use fictional information only.</p></div>
        </form>
      </div>
    </main>
  );
}
