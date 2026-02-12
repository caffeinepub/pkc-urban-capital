# Specification

## Summary
**Goal:** Replace the previous live deployment with the current build by fixing deployment blockers and ensuring publishing targets the production slug `pkcurbancapital`.

**Planned changes:**
- Update `frontend/DEPLOYMENT.md` to be valid, complete Markdown and include end-to-end publish/deployment steps, explicitly requiring the slug/subdomain to be exactly `pkcurbancapital` (no draft/random suffixes).
- Resolve remaining production build errors so the frontend compiles cleanly for production without changing any immutable frontend paths.
- Adjust publish/deployment configuration and documented steps so publishing to `pkcurbancapital` makes the current build the live site (replacing the previously-live version).

**User-visible outcome:** The live site served at the `pkcurbancapital` production slug/subdomain shows the current build (not yesterday’s version), and the project can be published successfully using the documented steps.
