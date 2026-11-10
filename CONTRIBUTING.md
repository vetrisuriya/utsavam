# Contributing to Utsavam

Thank you for considering a contribution. Utsavam is a small project with a simple goal: help people celebrate well, respectfully and without friction.

This guide covers setup, conventions and the most common contribution — adding or correcting a celebration.

## Code of conduct

By participating, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md). Be kind, assume good intent, and be precise when discussing cultural or religious content.

## Ways to contribute

- **Correct a description.** Festival details, spellings, regional names and observance practices should be accurate.
- **Add a celebration.** Regional festivals, harvest days, samskaras and community observances are welcome.
- **Improve wording.** Clearer labels, shorter help text and better microcopy.
- **Fix accessibility issues.** Keyboard navigation, screen-reader announcements, contrast and focus states.
- **Add translations.** Indian-language form labels and card copy are planned.
- **Report bugs.** Use the issue templates and include reproduction steps.
- **Improve the docs.** Setup instructions, deployment notes and architecture explanations.

## Development setup

```bash
git clone https://github.com/vetrisuriya/utsavam.git
cd utsavam
npm install
npm run dev
```

Requirements: Node.js 20.9+ and npm. On Windows PowerShell, use `npm.cmd run dev` if script execution is restricted.

Before opening a pull request, run:

```bash
npm run lint
npm run typecheck
npm run build
```

## Project conventions

- **Framework.** Next.js 16 App Router with Cache Components enabled. Read the version-matched docs in `node_modules/next/dist/docs/` before using unfamiliar APIs. Route `params` are Promises.
- **Styling.** Tailwind CSS v4 utilities plus the small set of surfaces and animations in `src/app/globals.css`. Use the existing design tokens (`night`, `ink`, `gold`, `saffron`, `muted`, `faint`) rather than raw hex values in new UI.
- **Components.** Server components by default; add `"use client"` only when state, effects or browser APIs are required.
- **Formatting.** Match the surrounding code. Double quotes, two-space indentation, trailing commas and named exports.
- **Copy.** Use sentence case for headings, Indian English spelling (`personalised`, `colour`, `celebration`) and the serial comma. Avoid exclamation-heavy greeting-card language.
- **No new runtime dependencies** without a clear reason. The app intentionally ships with Next.js, React and Tailwind only.

## Adding a celebration

1. Open the relevant file in `src/lib/celebrations/data/`:
   - `hindu.ts`
   - `sikh-jain-christian.ts`
   - `islamic.ts`
   - `life.ts`
2. Add a `Celebration` record. Use the helpers in `src/lib/celebrations/helpers.ts` for common fields (`from`, `to`, `message`, `date`, `time`, `venue`, `address`, `rsvp`).
3. Register the record in `src/lib/celebrations/index.ts` if you created a new data file.
4. If the celebration belongs to a new tradition, add a category in `src/lib/celebrations/categories.ts`.
5. If a new icon is needed, add a motif in `src/lib/celebrations/types.ts` and `src/components/motif.tsx`.
6. Run the checks and confirm the new page at `/celebrations/<slug>` and `/create/<slug>`.

### Content checklist

- [ ] The `name` matches common usage, with `native` script where appropriate.
- [ ] `dateLabel` describes the traditional calendar date and season, not a single fixed Gregorian date unless that is correct (for example, Christmas).
- [ ] `intro` is original writing, not copied from another site.
- [ ] `highlights` are concrete practices, not generic sentiments.
- [ ] `faqs` answer real questions, including when and how the occasion is observed.
- [ ] `fields` only ask for information that makes sense for this occasion.
- [ ] `theme` colours have enough contrast against the cream text.
- [ ] `related` links point to valid slugs.
- [ ] Spelling and diacritics are consistent with the rest of the file.

### Cultural accuracy

Descriptions should be respectful, specific and free of sectarian claims. Where practices vary by region or community, say so rather than generalising. Do not add ritual instructions that could be unsafe. When in doubt, cite the regions or communities a description applies to in the pull request.

## Pull requests

- Keep each pull request focused on one change.
- Reference the related issue, if any.
- Describe what changed and why, including any cultural sources or reviewers.
- Include screenshots for visual changes and mention the pages you checked.
- Confirm `lint`, `typecheck` and `build` pass.

By submitting a pull request, you agree that your contribution is licensed under the project's MIT License.

## Questions

Open a discussion or an issue on GitHub. For security reports, follow [SECURITY.md](SECURITY.md) instead of opening a public issue.
