# Security policy

## Supported versions

Utsavam is maintained on the `main` branch. Security fixes are applied there and deployed on the next release.

| Version | Supported |
| --- | --- |
| 1.x | Yes |
| < 1.0 | No |

## Reporting a vulnerability

Please **do not** open a public issue for security problems. Report them privately by emailing the maintainer through the contact details at <https://vetrisuriya.in/> or by using GitHub's private vulnerability reporting for the repository:

<https://github.com/vetrisuriya/utsavam/security/advisories/new>

Include:

- A description of the issue and its impact.
- Steps to reproduce, including a proof-of-concept URL or payload where relevant.
- The affected route, component or file.
- Your environment (browser, OS, Node version).
- Any suggested fix or mitigation.

You can expect an acknowledgement within a few days. Please allow reasonable time for a fix before public disclosure.

## Scope

In scope:

- Cross-site scripting (XSS) through card payloads, form values or decoded URLs.
- Injection or prototype-pollution issues in the wish codec.
- Open redirects or URL handling flaws in sharing flows.
- Cache poisoning or cache-key confusion.
- Dependency vulnerabilities with a realistic exploit path.
- Leaks of data that the architecture claims not to store.

Out of scope:

- The fact that a card link can be read by anyone who has the URL. This is a documented architectural choice, not a vulnerability. See `PRIVACY.md` and `/privacy`.
- Missing security headers on preview deployments.
- Denial-of-service through extremely long URLs beyond platform limits.
- Social engineering or spam sent using a link.

## Security model

- No accounts, sessions or server-side card storage.
- Card data is encoded in the URL and rendered client-side after validation and sanitisation against the celebration's field definitions.
- Text is rendered through React, which escapes values by default; raw HTML is never injected from user data.
- Personal card pages are marked `noindex` and excluded from the sitemap.
- The production deployment runs on Vercel behind HTTPS.

## Dependencies

Dependencies are pinned through `package-lock.json`. Run `npm audit` before releases and review any updates that affect the rendering of untrusted data.
