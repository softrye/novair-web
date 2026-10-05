# NOVAIR Demo E-commerce Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished static NOVAIR optical storefront demo for Vercel.

**Architecture:** A self-contained static HTML/CSS/JS storefront with local brand assets and SVG product illustrations. JavaScript powers filtering, search, favorites, quick-view modal, and mobile menu; no backend is required for the presentation version.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node built-in test runner, Vercel static hosting.

**Spec:** `docs/superpowers/specs/2026-10-01-novair-demo-design.md`

## Global Constraints
- Use only NOVAIR brand palette and official logo/isotype.
- Do not copy GMO brand assets or product names.
- Minimum 12 invented demo products.
- Responsive desktop/mobile presentation.

## Review Focus
- Navigation works on narrow mobile widths.
- Product filters never hide all products incorrectly.
- Modal can open/close with mouse and Escape.
- Search is case-insensitive and matches name/category.
- Visual contrast remains readable on ivory/mist surfaces.

---

### Task 1: Structural storefront
**Files:**
- Create: `index.html`
- Create: `styles.css`
- Test: `tests/site.test.js`

- [ ] Write structural tests for required GMO-inspired sections and NOVAIR palette.
- [ ] Run tests and verify RED.
- [ ] Implement semantic storefront structure and base styling.
- [ ] Run tests and verify GREEN.

### Task 2: Demo catalog and interactions
**Files:**
- Create: `app.js`
- Modify: `index.html`
- Modify: `styles.css`
- Test: `tests/site.test.js`

- [ ] Add tests for 12+ demo products and interaction hooks.
- [ ] Run tests and verify RED.
- [ ] Implement product data, filters, search, quick view, favorites, mobile nav.
- [ ] Run tests and verify GREEN.

### Task 3: Brand assets, responsive polish, deployment metadata
**Files:**
- Create: `assets/novair-logo.png`
- Create: `assets/novair-isotipo.png`
- Create: `vercel.json`
- Modify: `index.html`
- Modify: `styles.css`

- [ ] Add tests for local official assets, responsive metadata and SEO.
- [ ] Run tests and verify RED.
- [ ] Copy official brand assets and finalize responsive/SEO/deployment config.
- [ ] Run full test suite and visual smoke check.
