# Pause — Reflection & Practice

A mobile-first interactive prototype based on the English technical design.

## Run locally

Requires Node.js 22.13 or later.

```sh
npm ci
npm run dev
```

The development server prints its URL, normally http://localhost:5173/.

```sh
npm run build
npx tsc --noEmit
```

## What works

- Ten practices with context-specific prompts and editable sentence templates.
- Simulated voice input and transparent, rule-based recommendations.
- Manual practice selection and confirmed completion counts.
- Sentence quantities for practice 2, event-based practices without quotas, and a seven-day evening course.
- Editable records, undo, adjustable daily goals, and browser-local persistence.
- Four knowledge cards with recall, source comparison, reading mode, and review intervals.
- Offline and suggestion-failure previews, plus reminder configuration previews.
- Responsive phone, tablet, and desktop layouts.

The journal card is fictional. The user's private diary is not included.

## Prototype limitations

No real recording/transcription, LLM calls, account system, cloud database, cross-device synchronization, push notifications, or automatic Obsidian import. Browser storage is local to this origin and device. Private Sites access is enforced by the hosting platform, not by an application account system.

## Source map

- `app/page.tsx`: Interface, guided flows, records, and prototype state.
- `app/practices.ts`: Practice catalog, knowledge cards, and recommendation rules.
- `app/globals.css`: Visual design and responsive layout.
- `app/layout.tsx`: Page metadata.
- `components/ui/`: Existing accessible interface primitives.
- `.openai/hosting.json`: Private Sites project identity.

## Stack

React, TypeScript, Tailwind, Radix primitives, and Lucide icons, served using the Sites Vinext/Vite starter. This prototype uses a single-page tab interface rather than TanStack Router/Query because its state is local. The proposed production architecture remains React + TanStack + a TypeScript API + Supabase; those integrations are not claimed as implemented.

## Validation performed

- TypeScript validation and production build.
- Browser flow: enter observations, edit a generated reflection, confirm completion, and undo; progress returns to its previous count.
- Browser flow: knowledge recall, source comparison, self-rating, and next-day review scheduling.
- Offline preview prevents simulated suggestions while preserving manual selection.
- Phone-width check at 390px: no horizontal overflow on the Today screen.
- WebMCP `start_practice`: valid ID opens a guide without adding a completion; invalid ID is rejected.

Real iPhone/iPad microphone and notification testing belongs to the next phase once those capabilities exist.

## Visual palette

A muted Morandi-inspired palette based on the supplied reference: misty mauve for the capture surface, dusty plum actions, blush and apricot accents, pale lavender, and deep blue-gray text. Saturation is reserved for contrast rather than decoration.
