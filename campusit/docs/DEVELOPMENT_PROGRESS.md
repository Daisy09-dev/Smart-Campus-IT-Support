# CampusCare AI — Development Progress Report

**Reporting date:** November 28, 2026 (PHT)  
**Project:** NextGen IT-BPM intelligent campus support prototype

## 1. Purpose
CampusCare AI demonstrates campus IT incident reporting, self-service, tiered support, escalation and documented resolution. This report distinguishes the team build from the personal fork and separate feature branches.

## 2. Development chronology
| Date (PHT) | Milestone | Evidence |
|---|---|---|
| Nov 22 | Initial repository commit | [5ca36f3](https://github.com/Daisy09-dev/Smart-Campus-IT-Support/commit/5ca36f38bd958ba515094e72f4593812a301df62) |
| Nov 23 | Two data.js updates and Sidebar.jsx update | [Fork history](https://github.com/Daisy09-dev/Smart-Campus-IT-Support/commits/main) |
| Nov 26 | QR reporting, ticket lifecycle and asset maintenance integrated into team main | [PR #1](https://github.com/grgallosa/Smart-Campus-IT-Support/pull/1) |
| Nov 26 | QR/maintenance integration reverted | [Revert commit](https://github.com/grgallosa/Smart-Campus-IT-Support/commit/b4e7cbbb3a3798f25e8b517a55c74426ef911918) |
| Nov 27 | Team feature updates integrated | [Merge commit](https://github.com/grgallosa/Smart-Campus-IT-Support/commit/e8fec27302843a92d552f3914cbc707dbf2ec616) |
| Nov 28 | SLA warning wording aligned to 25% rule; RA 10173 principles added to Security page | [434fc73](https://github.com/grgallosa/Smart-Campus-IT-Support/commit/434fc73a60266008a9f369fe9c152e4073195bd7) |
| Nov 28 | Project and demo guide submitted for review | [Documentation PR #1](https://github.com/Daisy09-dev/Smart-Campus-IT-Support/pull/1) |

## 3. Current prototype status
Based on the existing project guide for team revision 434fc73:
- Student Help Center, Tier 0 prepared troubleshooting, ticket creation and My Tickets are documented.
- Tier 1 claims, prioritizes and escalates tickets; Tier 2 handles specialist resolution and after-work summaries; students confirm closure or reopen.
- IT admin oversees users, roles and audit activity with read-only ticket access in the demo.
- Impact/urgency priority matrix and SLA indicators are documented; AI assistance and eligible password-reset automation are simulations.
- QR sign-in, logout and RBAC are a separate unmerged [PR #2](https://github.com/grgallosa/Smart-Campus-IT-Support/pull/2). QR asset reporting, maintenance history and repair cost features must not be represented as active in team main after the revert without fresh verification.

## 4. Verification and limitations
The existing guide reports a local Wi-Fi workflow test through student-confirmed closure on e8fec27, with relevant workflow files checked against 434fc73. This report did not independently rerun that test. No production authentication, persistent database, live AI or campus integration is claimed. The personal fork main remains at a05a3bb in the inspected history; it is older than team main. No overall completion percentage is assigned because acceptance tests and full rubric coverage have not been verified.

## 5. Next actions before presentation
1. Agree with the group which revision will be demonstrated and whether QR features should be integrated.
2. Rehearse student-to-Tier-2 ticket handling and student closure on the exact presentation build.
3. Test priority/SLA indicators, role boundaries and simulated automation with fictional data.
4. Review documentation and merge only after team approval; capture screenshots and actual test outcomes.

See [CAMPUSCARE_PROJECT_GUIDE.md](CAMPUSCARE_PROJECT_GUIDE.md) for the detailed workflow, priority matrix, SLA targets and demo script.
