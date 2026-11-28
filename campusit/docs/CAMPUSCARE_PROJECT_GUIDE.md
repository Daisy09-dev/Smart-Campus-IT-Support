# CampusCare AI: Project and Demo Guide

CampusCare AI is a clickable campus IT help-desk prototype. It shows how a student gets help, how an IT team prioritizes and handles a request, and how the student confirms the fix. The project aims to reduce lab downtime, make problems easier to report, and keep a consistent support record.

## Which version is this guide for?

The main walkthrough describes the **team build** at [grgallosa/Smart-Campus-IT-Support, revision 434fc73](https://github.com/grgallosa/Smart-Campus-IT-Support/tree/434fc73a60266008a9f369fe9c152e4073195bd7/campusit). Open the team build and look for **Help Center** and the **Demo role** selector. This fork's default branch is an older snapshot, so its buttons and ticket-closing behavior may differ. This documentation change does not sync the fork or deploy anything.

**Separate QR prototype:** [PR #2](https://github.com/grgallosa/Smart-Campus-IT-Support/pull/2) demonstrates simulated student/faculty sign-in and a QR equipment-reporting flow. It is not merged into the team build described here. QR reporting and equipment maintenance were previously added in [PR #1](https://github.com/grgallosa/Smart-Campus-IT-Support/pull/1) and removed from team main by [PR #3](https://github.com/grgallosa/Smart-Campus-IT-Support/pull/3). Treat equipment history, repair costs, and QR login as designs or separate demos unless the presentation build visibly includes them.

## Who does what?

| Role | What they do |
| --- | --- |
| Student | Tries self-service, submits a ticket if needed, follows updates in **My Tickets**, and confirms the fix or reopens the ticket. |
| Tier 0 | Offers prepared troubleshooting steps in the Help Center. The student decides whether the steps solved the issue. |
| Tier 1 | Claims and triages new tickets. Handles routine issues and hands off work that needs specialist access or attention. |
| Tier 2 | Claims escalated tickets, handles specialist work, documents the fix, and marks the ticket resolved. |
| IT admin | Oversees users, roles, and audit activity. In the demo, the admin has read-only access to ticket work. |

## Five-minute demo: one Wi-Fi ticket

Use fictional data and keep the app in **one tab**. Switch roles without reloading: this prototype stores the ticket in memory.

1. **Student / Tier 0:** In **Help Center**, enter “Cannot connect to campus Wi-Fi in the demo lab.” Review the suggested fix, select **Still not working**, enter “Demo Lab,” and select **Submit ticket**. Note the new ticket ID.
2. **Tier 1:** Switch **Demo role** to **Tier 1 Agent** and open the same ticket. Select **Claim ticket** and confirm the suggested priority. For the single-user demo, flag **elevated access** and select **Escalate to Tier 2**. Explain why: assume the next diagnostic step needs permissions Tier 1 does not have.
3. **Tier 2:** Switch to **Tier 2 Agent**, open and claim the same ticket, then select **ACW summary (1-click)**. ACW means after-work documentation. Review and edit the draft as needed, select **Save**, then **Resolve & close**. The ticket is now **Resolved**, awaiting the student's confirmation.
4. **Student:** Switch back to **Student** and open the same ticket in **My Tickets**. Select **Yes, close ticket** and show the **Closed** status. If the fix did not work, **No, reopen** returns it to **In Progress** instead.
5. **Optional: IT admin.** If time allows, show **Users & Roles** or the **Security** audit view and explain why admin oversight is separate from ticket handling.

## Priority, escalation, and service targets

Every new ticket starts in Tier 1 with a suggested priority based on **impact × urgency**. Confirming P1 or P2 routes it to Tier 2. P3 and P4 normally stay with Tier 1; a claimed ticket can still be escalated without changing its priority. The demo shows escalation indicators such as a need for elevated access, wider impact, half the resolution time used, or a breached resolution target.

| Impact / urgency | High | Medium | Low |
| --- | --- | --- | --- |
| Campus-wide | P1 | P2 | P3 |
| Department or building | P2 | P3 | P4 |
| Single user | P3 | P4 | P4 |

| Priority | First response target | Resolution target |
| --- | --- | --- |
| P1 Critical | 15 minutes | 4 hours |
| P2 High | 30 minutes | 8 hours |
| P3 Medium | 2 hours | 24 hours |
| P4 Low | 8 hours | 72 hours |

Timers count calendar hours. The **At risk** indicator appears when less than 25% of the target time remains. These are demo settings, not a university service commitment.

## What is simulated?

- **AI and human review:** Tier 0 matches issues to prepared fixes. The agent-assist reply and summary use demo content; the agent reviews, edits, accepts, or ignores it. No external AI service is needed for the walkthrough.
- **Password-reset automation:** A separate eligible **Account & Password** ticket can demonstrate agent-approved, rule-based automation. The Wi-Fi ticket is not eligible. Success marks the simulation complete but leaves the ticket **In Progress**; an identity mismatch stops the simulation for human review. No real credentials change.
- **Accounts, notifications, and audit records:** Roles, data, and notices are simulated. There is no production authentication, database, real email delivery, or live campus integration. Use sample data only.

## Source and verification

- [Team README and demo instructions](https://github.com/grgallosa/Smart-Campus-IT-Support/blob/434fc73a60266008a9f369fe9c152e4073195bd7/campusit/README.md)
- [Priority and SLA settings](https://github.com/grgallosa/Smart-Campus-IT-Support/blob/434fc73a60266008a9f369fe9c152e4073195bd7/campusit/src/lib/data.js) and [ticket workflow](https://github.com/grgallosa/Smart-Campus-IT-Support/blob/434fc73a60266008a9f369fe9c152e4073195bd7/campusit/src/store.jsx)

The Wi-Fi workflow was exercised locally through student-confirmed closure on team revision `e8fec27`. The workflow source files were checked against `434fc73` and are unchanged. Rehearse once in the exact build and device you will present.
