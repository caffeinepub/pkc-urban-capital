# Specification

## Summary
**Goal:** Make default WhatsApp contact links clean and minimal while still allowing optional prefilled messages when explicitly provided.

**Planned changes:**
- Update WhatsApp link generation so calls with no message produce `https://wa.me/<number>` (no `?text=`), and calls with an explicit message add `?text=` with proper URL encoding.
- Update all WhatsApp CTA entry points (including the floating WhatsApp button and any card-level actions using the default behavior) to use the new clean default link generation.
- Ensure all WhatsApp links continue using the centralized `CONTACT_CONFIG.whatsappPhone` number.

**User-visible outcome:** Clicking WhatsApp CTAs opens a clean `wa.me/<number>` link by default, while property/project-specific WhatsApp actions can still open with a prefilled, readable message when intentionally provided.
