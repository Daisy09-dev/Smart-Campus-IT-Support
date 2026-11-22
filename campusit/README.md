# CampusIT — Smart Campus IT Support (frontend prototype)

React + Vite + Tailwind CSS + shadcn-style components (Radix UI) + Lucide + React Router + Recharts.
No backend: all data is in memory (`src/store.jsx`), seeded from `src/lib/data.js`.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

## Demo flow
1. **Student** (default role): Help Center → chat "I can't connect to campus Wi-Fi" → *Still not working* → ticket form → ticket created.
2. Switch **Demo role** (top bar) to **Tier 1 Agent** → Agent Workspace → open CIT-2026-1042 → apply the AI re-rating (impact → P2, routes to Tier 2).
3. Switch to **Tier 2 Agent** → *Trigger RPA bot* → run the simulation → *Resolve & close*.
4. Switch back to **Student** → My Tickets to see the resolved status. **Admin** sees Users & Roles, Security, Analytics.

## Workflow rules (src/lib/data.js)
- Priority = Impact × Urgency (`MX`), P1–P4. P1/P2 route to Tier 2, P3/P4 to Tier 1.
- SLA targets: P1 15 min / 4 h · P2 30 min / 8 h · P3 2 h / 24 h · P4 8 h / 3 days (`RT`, `TOT`).
- Re-rating restarts the SLA from ticket creation. Escalation changes ownership, never priority.
- P3/P4 "business hours" is a label only; timers count in calendar time.
- AI suggests, the agent decides: Accept / Edit / Ignore. Nothing is sent automatically.

## Structure
```
src/
  main.jsx, App.jsx          router, layout, RBAC route guard
  store.jsx                  in-memory state + actions (tickets, audit, RPA, permissions)
  index.css                  design tokens (light + .dark) and table styles
  lib/                       data.js (rules + sample data), hooks.js, utils.js
  components/ui/             button, input, card (Section), tabs, switch, dialog
  components/                Sidebar, Topbar, Badges, Sla, Metrics, Lifecycle, ChatAssistant,
                             TicketForm, AiPanel, TicketsTable, Toaster
  pages/                     HelpCenter, MyTickets, TrackTicket, AgentWorkspace, SlaMonitor,
                             Rpa, Analytics, Security, UsersRoles
```

## Notes
- Router is `HashRouter` (works on any static host). Swap to `BrowserRouter` in `main.jsx` if you prefer clean URLs.
- Colors are CSS variables in `index.css`; Tailwind maps them in `tailwind.config.js`. Blue is for interaction/brand only; green/amber/red only for status.
- Roles: `s` student, `t` Tier 1, `u` Tier 2, `a` admin (see `NAV` and `Guard` in `App.jsx`).
