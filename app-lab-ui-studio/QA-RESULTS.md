# Quality check — November 11, 2026

## Verified locally

- All **54 concepts** and **57 SVG screen maps** parse correctly. Each map is **1920 × 1080**, contains two **480 × 675** app previews at the 320 × 450 App Lab ratio, and has type-first camelCase IDs. IDs are unique within each app. No sketch note is truncated; the smallest sketch text is 17 px. The SVG keeps its 1920 × 1080 source dimensions while scaling to the browser viewport; a direct-open browser check at 1280 × 720 showed no horizontal or vertical scrolling.
- All 57 maps were rendered and reviewed as contact sheets, including the two-screen apps and both five-control major projects. The arrows and IDs stay outside the app previews.
- The magazine has **18 chapters**, links all 54 concepts and 57 maps, and passed a browser layout check. The new `index.html` hub connects the class launch, student reading, teacher materials, and portfolio setup. Across the local HTML files, **507 local links** resolved.
- The launch-day passport is **one US Letter page** and embeds **Geist** and **Fraunces**. The teacher run sheet and day-one ZIP links resolve.
- All **18 teacher code files** passed JavaScript syntax checks and representative input/output behavior tests. The portfolio server code passed syntax and mock tests for Classroom pagination, 54 slots per student, repeat-safe provisioning, access control, URL validation, saving, ready attempts, and the grading queue.
- The portfolio preview displayed two cards per row on a desktop screen, **54** practice cards, **16** minor-gallery cards, and **2** major-project cards. A sample app's purpose and UI list saved and appeared again in the gallery. Both ZIP archives passed integrity checks.

## Teacher-account checks still needed

The local checks cannot sign into a school Code.org or Google Workspace account. Before using later-unit templates, paste each teacher reference into App Lab, switch to Blocks, and verify any asset, Chart, Photo Select, or Canvas behavior in that account. Before deploying the portfolio, follow `Wednesday Nov 11/Portfolio Apps Script/SETUP.md` and test Classroom authorization, student identity, sharing, and iframe display with a real school account.

The portfolio package is an Apps Script web app. Google's API cannot create current native Google Sites pages, so separate student Google Sites were not provisioned.
